import React from 'react';
import './AdminLoanDetailsModal.css';

const AdminLoanDetailsModal = ({ loan, isOpen, onClose }) => {
  if (!isOpen || !loan) return null;

  const getStatusBadgeClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'accepted':
        return 'badge-accepted';
      case 'denied':
        return 'badge-denied';
      case 'pending':
      default:
        return 'badge-pending';
    }
  };

  const getFileIcon = (fileType) => {
    if (fileType?.includes('pdf')) return '📄';
    if (fileType?.includes('image')) return '🖼️';
    if (fileType?.includes('word') || fileType?.includes('document')) return '📝';
    if (fileType?.includes('excel') || fileType?.includes('sheet')) return '📊';
    return '📎';
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return 'N/A';
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'N/A';
    }
  };

  return (
    <div className="admin-modal-overlay" onClick={onClose}>
      <div className="admin-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="admin-modal-header">
          <h2 className="admin-modal-title">Loan Request Details</h2>
          <button
            className="admin-modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
            title="Close"
          >
            ✕
          </button>
        </div>

        {/* Modal Content */}
        <div className="admin-modal-content">
          {/* Loan Information Section */}
          <div className="admin-loan-info-section">
            <div className="admin-loan-info-grid">
              {/* Amount */}
              <div className="admin-info-item">
                <label className="admin-info-label">Amount</label>
                <p className="admin-info-value">${loan.amount?.toFixed(2) || 'N/A'}</p>
              </div>

              {/* Status */}
              <div className="admin-info-item">
                <label className="admin-info-label">Status</label>
                <span className={`admin-status-badge ${getStatusBadgeClass(loan.status)}`}>
                  {loan.status || 'Pending'}
                </span>
              </div>

              {/* Applicant Name */}
              <div className="admin-info-item">
                <label className="admin-info-label">Name</label>
                <p className="admin-info-value">{loan.name || 'N/A'}</p>
              </div>

              {/* Submission Date */}
              <div className="admin-info-item">
                <label className="admin-info-label">Submitted</label>
                <p className="admin-info-value">
                  {loan.timestamp
                    ? new Date(
                        loan.timestamp?.toDate?.() || loan.timestamp
                      ).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })
                    : 'N/A'}
                </p>
              </div>
            </div>

            {/* Reason */}
            <div className="admin-info-item-full">
              <label className="admin-info-label">Reason</label>
              <p className="admin-info-value admin-reason-text">
                {loan.reason || 'No reason provided'}
              </p>
            </div>
          </div>

          {/* Documents Section */}
          <div className="admin-documents-section">
            <h3 className="admin-documents-title">
              📎 Attached Documents {loan.documents && loan.documents.length > 0 && `(${loan.documents.length})`}
            </h3>

            {loan.documents && loan.documents.length > 0 ? (
              <div className="admin-documents-list">
                {loan.documents.map((doc, index) => (
                  <div key={index} className="admin-document-item">
                    <div className="admin-document-icon-wrapper">
                      <span className="admin-document-icon">{getFileIcon(doc.type)}</span>
                    </div>

                    <div className="admin-document-details">
                      <p className="admin-document-name">{doc.name || 'Unnamed File'}</p>
                      <div className="admin-document-meta">
                        <span className="admin-document-size">
                          {formatFileSize(doc.size)}
                        </span>
                        <span className="admin-document-separator">•</span>
                        <span className="admin-document-date">
                          {formatDate(doc.uploadedAt)}
                        </span>
                      </div>
                    </div>

                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="admin-document-download-btn"
                      title="Download file"
                      download
                    >
                      ⬇️
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="admin-documents-empty">
                <p className="admin-empty-text">No documents attached</p>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="admin-modal-footer">
          <button className="admin-modal-close-footer-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLoanDetailsModal;
