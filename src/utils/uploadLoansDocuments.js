import { storage } from '../firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

/**
 * Uploads a single file to Firebase Storage and returns metadata
 * @param {File} file - The file to upload
 * @param {string} userId - The current user's ID
 * @param {string} loanRequestId - The loan request document ID
 * @param {Function} onProgress - Callback function for upload progress (0-100)
 * @returns {Promise<Object>} - Object containing url, name, type, and timestamp
 */
export const uploadSingleDocument = async (
  file,
  userId,
  loanRequestId,
  onProgress = null
) => {
  // Validate file
  if (!file) throw new Error('No file provided');
  
  const maxSize = 10 * 1024 * 1024; // 10MB
  if (file.size > maxSize) {
    throw new Error('File size must be less than 10MB');
  }

  // Allowed file types
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
    throw new Error('File type not supported. Please upload PDF, images, or documents.');
  }

  // Create storage path: loans/{userId}/{loanRequestId}/{fileName}-{timestamp}
  const timestamp = Date.now();
  const fileName = `${timestamp}-${file.name}`;
  const storagePath = `loans/${userId}/${loanRequestId}/${fileName}`;

  try {
    const storageRef = ref(storage, storagePath);

    // Upload with progress tracking
    const snapshot = await uploadBytes(storageRef, file, {
      customMetadata: {
        uploadedAt: new Date().toISOString(),
        originalFileName: file.name
      }
    });

    // Simulate progress if callback provided
    if (onProgress) {
      onProgress(100);
    }

    // Get download URL
    const downloadUrl = await getDownloadURL(snapshot.ref);

    // Return file metadata to store in Firestore
    return {
      url: downloadUrl,
      name: file.name,
      type: file.type,
      size: file.size,
      uploadedAt: new Date().toISOString(),
      storagePath: storagePath
    };
  } catch (error) {
    console.error('Error uploading file to Firebase Storage:', error);
    throw new Error(`Failed to upload file: ${error.message}`);
  }
};

/**
 * Uploads multiple files to Firebase Storage
 * @param {File[]} files - Array of files to upload
 * @param {string} userId - The current user's ID
 * @param {string} loanRequestId - The loan request document ID
 * @param {Function} onProgress - Callback for overall progress (0-100)
 * @returns {Promise<Object[]>} - Array of file metadata objects
 */
export const uploadMultipleDocuments = async (
  files,
  userId,
  loanRequestId,
  onProgress = null
) => {
  if (!files || files.length === 0) {
    throw new Error('No files provided');
  }

  const results = [];
  const totalFiles = files.length;

  for (let i = 0; i < files.length; i++) {
    try {
      // Calculate overall progress
      const fileProgress = (i / totalFiles) * 100;
      if (onProgress) {
        onProgress(Math.floor(fileProgress));
      }

      const fileMetadata = await uploadSingleDocument(
        files[i],
        userId,
        loanRequestId,
        null
      );

      results.push(fileMetadata);

      // Update progress
      const updatedProgress = ((i + 1) / totalFiles) * 100;
      if (onProgress) {
        onProgress(Math.floor(updatedProgress));
      }
    } catch (error) {
      console.error(`Error uploading file ${files[i].name}:`, error);
      // Continue with other files but track the error
      results.push({
        name: files[i].name,
        error: error.message,
        uploadedAt: new Date().toISOString()
      });
    }
  }

  return results;
};
