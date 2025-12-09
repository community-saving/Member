import React, { useState, useRef } from 'react';
import './FileUpload.css';

const FileUpload = ({ onFilesSelected, disabled = false, maxFiles = 5 }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileErrors, setFileErrors] = useState({});
  const fileInputRef = useRef(null);

  const validateFile = (file, fileIndex) => {
    const errors = [];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (file.size > maxSize) {
      errors.push('File size must be less than 10MB');
    }

    const allowedTypes = [
      'application/pdf',
      'image/jpeg',
      'image/png',
      'image/gif',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ];

    if (!allowedTypes.includes(file.type)) {
      errors.push('File type not supported (PDF, images, or documents only)');
    }

    if (errors.length > 0) {
      setFileErrors((prev) => ({
        ...prev,
        [fileIndex]: errors.join('; ')
      }));
      return false;
    }

    return true;
  };

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    const newErrors = {};
    const validFiles = [];

    files.forEach((file, index) => {
      if (validFiles.length + selectedFiles.length >= maxFiles) {
        newErrors[index] = `Maximum ${maxFiles} files allowed`;
        return;
      }

      if (validateFile(file, index)) {
        validFiles.push({
          file,
          id: `${file.name}-${Date.now()}-${index}`
        });
      }
    });

    setFileErrors(newErrors);
    const updatedFiles = [...selectedFiles, ...validFiles];
    setSelectedFiles(updatedFiles);

    // Notify parent component
    if (onFilesSelected) {
      onFilesSelected(updatedFiles.map((f) => f.file));
    }

    // Reset input
    e.target.value = '';
  };

  const handleRemoveFile = (fileId) => {
    const updatedFiles = selectedFiles.filter((f) => f.id !== fileId);
    setSelectedFiles(updatedFiles);

    // Notify parent component
    if (onFilesSelected) {
      onFilesSelected(updatedFiles.map((f) => f.file));
    }

    // Clear error for this file if exists
    setFileErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[fileId];
      return newErrors;
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const files = Array.from(e.dataTransfer.files);
    const newErrors = {};
    const validFiles = [];

    files.forEach((file, index) => {
      if (validFiles.length + selectedFiles.length >= maxFiles) {
        newErrors[index] = `Maximum ${maxFiles} files allowed`;
        return;
      }

      if (validateFile(file, index)) {
        validFiles.push({
          file,
          id: `${file.name}-${Date.now()}-${index}`
        });
      }
    });

    setFileErrors(newErrors);
    const updatedFiles = [...selectedFiles, ...validFiles];
    setSelectedFiles(updatedFiles);

    // Notify parent component
    if (onFilesSelected) {
      onFilesSelected(updatedFiles.map((f) => f.file));
    }
  };

  const getFileIcon = (fileType) => {
    if (fileType.includes('pdf')) return '📄';
    if (fileType.includes('image')) return '🖼️';
    if (fileType.includes('word') || fileType.includes('document')) return '📝';
    if (fileType.includes('excel') || fileType.includes('sheet')) return '📊';
    return '📎';
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="file-upload-container">
      <div className="file-upload-input-wrapper">
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileInputChange}
          disabled={disabled}
          accept=".pdf,.jpg,.jpeg,.png,.gif,.doc,.docx,.xls,.xlsx"
          className="file-upload-input"
          id="file-upload-input"
        />

        <label
          htmlFor="file-upload-input"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="file-upload-label"
        >
          <div className="file-upload-content">
            <span className="file-upload-icon">📁</span>
            <p className="file-upload-text">
              Drag files here or <span className="file-upload-link">browse</span>
            </p>
            <p className="file-upload-hint">
              PDF, images, or documents (max 10MB each, up to {maxFiles} files)
            </p>
          </div>
        </label>
      </div>

      {/* File Previews */}
      {selectedFiles.length > 0 && (
        <div className="file-upload-preview">
          <p className="file-upload-preview-title">
            Selected Files ({selectedFiles.length}/{maxFiles})
          </p>
          <div className="file-upload-list">
            {selectedFiles.map((fileObj) => (
              <div key={fileObj.id} className="file-upload-item">
                <div className="file-upload-item-info">
                  <span className="file-upload-item-icon">
                    {getFileIcon(fileObj.file.type)}
                  </span>
                  <div className="file-upload-item-details">
                    <p className="file-upload-item-name">{fileObj.file.name}</p>
                    <p className="file-upload-item-size">
                      {formatFileSize(fileObj.file.size)}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveFile(fileObj.id)}
                  className="file-upload-remove-btn"
                  disabled={disabled}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* File Errors */}
      {Object.keys(fileErrors).length > 0 && (
        <div className="file-upload-errors">
          {Object.entries(fileErrors).map(([key, error]) => (
            <p key={key} className="file-upload-error-message">
              ⚠️ {error}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
