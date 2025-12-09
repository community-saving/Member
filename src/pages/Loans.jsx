import React, { useState, useEffect } from 'react';
import { db, deleteDoc, doc } from '../firebaseConfig';
import { collection, addDoc, query, where, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import Alert from '../components/Alert';
import FileUpload from '../components/FileUpload';
import { uploadMultipleDocuments } from '../utils/uploadLoansDocuments';
import './Loans.css';
import { updateDoc } from "firebase/firestore";

const CashoutPage = () => {
  const { currentUser } = useAuth();
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [reason, setReason] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [fetching, setFetching] = useState(true);

  // Fetch user's cashout requests
  useEffect(() => {
    if (!currentUser) return;

    // Simplified query without composite index requirement
    const q = query(
      collection(db, 'loans'),
      where('userId', '==', currentUser.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const cashoutRequests = [];
      snapshot.forEach((doc) => {
        cashoutRequests.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      // Sort by timestamp locally (newest first)
      cashoutRequests.sort((a, b) => {
        const aTime = a.timestamp?.toDate?.() || new Date(0);
        const bTime = b.timestamp?.toDate?.() || new Date(0);
        return bTime - aTime;
      });
      
      setRequests(cashoutRequests);
      setFetching(false);
    }, (err) => {
      console.error('Error fetching cashout requests:', err);
      // Fallback to fetch all and filter locally
      const unsubscribeAll = onSnapshot(collection(db, 'loans'), (snapshot) => {
        const cashoutRequests = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          if (data.userId === currentUser.uid) {
            cashoutRequests.push({
              id: doc.id,
              ...data
            });
          }
        });
        
        // Sort by timestamp locally (newest first)
        cashoutRequests.sort((a, b) => {
          const aTime = a.timestamp?.toDate?.() || new Date(0);
          const bTime = b.timestamp?.toDate?.() || new Date(0);
          return bTime - aTime;
        });
        
        setRequests(cashoutRequests);
        setFetching(false);
      });
      
      return () => unsubscribeAll();
    });

    return () => unsubscribe();
  }, [currentUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount || !name || !reason || selectedFiles.length === 0) {
      if (!amount || !name || !reason) {
        setError('Please fill in all fields');
      } else {
        setError('Please attach at least one document');
      }
      return;
    }

    if (parseFloat(amount) <= 0) {
      setError('Amount must be greater than 0');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');
    setUploadProgress(0);

    try {
      // First, create the loan request document
      const loanDocRef = await addDoc(collection(db, 'loans'), {
        userId: currentUser.uid,
        amount: parseFloat(amount),
        name: name,
        reason: reason,
        status: 'pending',
        userDecision: 'pending',
        timestamp: serverTimestamp(),
        documents: [] // Initialize empty documents array
      });

      // If files are selected, upload them
      if (selectedFiles.length > 0) {
        const uploadedFiles = await uploadMultipleDocuments(
          selectedFiles,
          currentUser.uid,
          loanDocRef.id,
          (progress) => {
            setUploadProgress(progress);
          }
        );

        // Filter out files with errors and only keep successful uploads
        const successfulFiles = uploadedFiles.filter((f) => !f.error);

        // Update the loan document with file metadata
        if (successfulFiles.length > 0) {
          await updateDoc(loanDocRef, {
            documents: successfulFiles
          });
        }

        // Show warning if some files failed
        if (uploadedFiles.some((f) => f.error)) {
          setSuccess(
            `Loan request submitted with ${successfulFiles.length} file(s). Some files failed to upload.`
          );
        } else {
          setSuccess('Loan request submitted successfully with all documents!');
        }
      } else {
        setSuccess('Loan request submitted successfully!');
      }

      // Reset form
      setAmount('');
      setName('');
      setReason('');
      setSelectedFiles([]);
      setUploadProgress(0);
    } catch (err) {
      console.error('Error submitting loan request:', err);
      setError('Failed to submit loan request. Please try again.');
    } finally {
      setLoading(false);
    }
  };


  const getStatusClass = (status) => {
    switch (status) {
      case 'accepted':
        return 'status-accepted';
      case 'denied':
        return 'status-denied';
      case 'pending':
      default:
        return 'status-pending';
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    
    return `${hours}:${minutes} · ${day} ${month}`;
  };

  return (
    <div className="whatsapp-container">
      {/* <Header /> */}

      <div className="main-content">
        <h1 className="page-title">Loan Request</h1>
        
        {/* Alerts */}
        {error && <Alert type="error" message={error} />}
        {success && <Alert type="success" message={success} />}
        
        {/* Cashout Form */}
        <div className="card animate-slideUp">
          <h2 className="card-title">New Request</h2>
          
          <form onSubmit={handleSubmit} className="form-group">
            <div>
              <label className="form-label">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="form-input"
                placeholder="Enter amount"
                min="0"
                step="0.01"
              />
            </div>
            
            <div>
              <label className="form-label">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label className="form-label">Reason</label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="form-textarea"
                placeholder="Enter reason for cashout"
                rows="3"
              />
            </div>

            <div>
              <label className="form-label">Attachments (Required)</label>
              <FileUpload
                onFilesSelected={setSelectedFiles}
                disabled={loading}
                maxFiles={5}
              />
            </div>

            {uploadProgress > 0 && uploadProgress < 100 && (
              <div className="upload-progress-container">
                <div className="upload-progress-bar" style={{ width: `${uploadProgress}%` }}></div>
                <p className="upload-progress-text">Uploading files... {uploadProgress}%</p>
              </div>
            )}
            
            <button
              type="submit"
              disabled={loading}
              className="form-button"
            >
              {loading ? (
                <>
                  <div className="spinner"></div>
                  Sending...
                </>
              ) : (
                'Send Request'
              )}
            </button>
          </form>
        </div>
        
        {/* Requests List */}
        <div className="card">
          <h2 className="card-title">Your Requests</h2>
          
          {fetching ? (
            <div className="loading-indicator">
              <div className="loading-dots">
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
              </div>
            </div>
          ) : requests.length === 0 ? (
            <p className="empty-state">No cashout requests found</p>
          ) : (
            <div className="request-list">
              {requests.map((request) => (
                <div key={request.id} className="request-item animate-slideUp">
                  <div className="request-header">
                    <div className="request-info">
                      <h3>Amount: ${request.amount}</h3>
                      <p>Name: {request.name}</p>
                      <p>Reason: {request.reason}</p>
                      
                      <img src={request.receiptUrl} alt="" />
                    </div>
                    <div className={`request-status ${getStatusClass(request.status)}`}>
                      {request.status}
                    </div>
                  </div>

                  {/* Documents Section */}
                  {request.documents && request.documents.length > 0 && (
                    <div className="request-documents">
                      <h4 className="documents-title">📎 Attachments ({request.documents.length})</h4>
                      <div className="documents-list">
                        {request.documents.map((doc, index) => (
                          <div key={index} className="document-item">
                            <span className="document-icon">
                              {doc.type?.includes('pdf')
                                ? '📄'
                                : doc.type?.includes('image')
                                ? '🖼️'
                                : doc.type?.includes('word') || doc.type?.includes('document')
                                ? '📝'
                                : doc.type?.includes('excel') || doc.type?.includes('sheet')
                                ? '📊'
                                : '📎'}
                            </span>
                            <div className="document-info">
                              <p className="document-name">{doc.name}</p>
                              <p className="document-meta">
                                {doc.size ? `${(doc.size / 1024).toFixed(1)}KB` : ''}{' '}
                                {doc.uploadedAt
                                  ? new Date(doc.uploadedAt).toLocaleDateString('en-US', {
                                      month: 'short',
                                      day: 'numeric',
                                      hour: '2-digit',
                                      minute: '2-digit'
                                    })
                                  : ''}
                              </p>
                            </div>
                            <a
                              href={doc.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="document-download-btn"
                              title="Download file"
                            >
                              ⬇️
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="request-footer">
                    Requested on {formatDate(request.timestamp)}
                  </div>
                  
                  {/* USER DECISION SECTION */}
                  {request.status !== "pending" && (
                    <div className="mt-3">
                      <p className="text-sm text-gray-500 mb-2">
                        What do you think about this decision?
                      </p>

                      {/* If user has NOT responded yet */}
                      {(!request.userDecision || request.userDecision === "pending") && (
                        <div className="flex gap-3">
                          <button
                            onClick={async () => {
                              await updateDoc(doc(db, "loans", request.id), {
                                userDecision: "accepted",
                                userDecisionAt: serverTimestamp()
                              });
                            }}
                            className="px-3 py-1 rounded-lg bg-green-600 text-white hover:bg-green-700 text-sm"
                          >
                            I Accept
                          </button>

                          <button
                            onClick={async () => {
                              await updateDoc(doc(db, "loans", request.id), {
                                userDecision: "denied",
                                userDecisionAt: serverTimestamp()
                              });
                            }}
                            className="px-3 py-1 rounded-lg bg-red-600 text-white hover:bg-red-700 text-sm"
                          >
                            I Reject
                          </button>
                        </div>
                      )}

                      {/* If user already made decision */}
                      {request.userDecision === "accepted" && (
                        <p className="text-green-600 text-sm font-semibold">
                          ✔ You accepted this decision.
                        </p>
                      )}

                      {request.userDecision === "denied" && (
                        <p className="text-red-600 text-sm font-semibold">
                          ✖ You disagreed with this decision.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CashoutPage;