# Code Changes Reference - Loans.jsx Integration

This document shows the exact code changes made to integrate document upload functionality.

## 1. Imports Added (Top of file)

```jsx
import FileUpload from '../components/FileUpload';
import { uploadMultipleDocuments } from '../utils/uploadLoansDocuments';
```

## 2. State Variables Added

```jsx
const [selectedFiles, setSelectedFiles] = useState([]);
const [uploadProgress, setUploadProgress] = useState(0);
```

## 3. handleSubmit Function - Full Implementation

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!amount || !name || !reason) {
    setError('Please fill in all fields');
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
```

## 4. Form Field Added - FileUpload Component

Add this section in the form before the submit button:

```jsx
<div>
  <label className="form-label">Attachments (Optional)</label>
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
```

## 5. Request Display - Documents Section

Add this section in the request list, after the request header and before the footer:

```jsx
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
```

## 6. CSS Classes Added to Loans.css

```css
/* Upload Progress Section */
.upload-progress-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background-color: #f0f9ff;
  border-radius: var(--radius-md);
  border: 1px solid #bfdbfe;
}

.upload-progress-bar {
  height: 6px;
  background-color: #3b82f6;
  border-radius: 3px;
  transition: width 0.3s ease;
}

.upload-progress-text {
  margin: 0;
  font-size: 0.85rem;
  color: #1e40af;
  font-weight: 500;
}

/* Documents Section in Request Cards */
.request-documents {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
}

.documents-title {
  margin: 0 0 0.75rem 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: #374151;
}

.documents-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.document-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background-color: #fafbfc;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
}

.document-item:hover {
  background-color: #f1f5f9;
  border-color: #cbd5e1;
}

.document-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
  min-width: 20px;
  text-align: center;
}

.document-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.document-name {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 500;
  color: #1e293b;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.document-meta {
  margin: 0;
  font-size: 0.75rem;
  color: #64748b;
}

.document-download-btn {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  color: #3b82f6;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.document-download-btn:hover {
  background-color: #dbeafe;
  border-color: #93c5fd;
  color: #1e40af;
  transform: scale(1.05);
}

.document-download-btn:active {
  transform: scale(0.95);
}
```

## Summary of Changes

| Category | Changes |
|----------|---------|
| Imports | 2 new imports added |
| State | 2 new state variables |
| Functions | handleSubmit completely rewritten |
| Form Fields | 1 new FileUpload component + progress bar |
| Request Display | 1 new documents section added |
| CSS Classes | 9 new CSS classes added |
| Lines of Code | ~200 lines added (imports, state, form, display, CSS) |

---

**All changes are backward compatible and preserve existing functionality.**
