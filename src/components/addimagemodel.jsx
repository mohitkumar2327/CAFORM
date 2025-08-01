// src/components/AddImageModal.js (or adjust path)
import React, { useState, useRef, useEffect } from 'react';
import '../css/addimagemodel.css'; // We'll create this CSS file

const AddImageModal = ({ onClose }) => {
    const modalRef = useRef(null);
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState('');

    // Close modal when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    // Handle file selection and preview
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
            setImagePreviewUrl(URL.createObjectURL(file));
        } else {
            setSelectedImage(null);
            setImagePreviewUrl('');
        }
    };

    // Clean up the object URL when component unmounts or image changes
    useEffect(() => {
        return () => {
            if (imagePreviewUrl) {
                URL.revokeObjectURL(imagePreviewUrl);
            }
        };
    }, [imagePreviewUrl]);

    const handleUploadClick = () => {
        // Here you would typically handle the image upload to a server
        // For now, let's just log and close the modal
        console.log('Uploading image:', selectedImage);
        alert('Image upload initiated (not actually uploaded).');
        onClose(); // Close modal after initiating upload
    };

    const handleCancelClick = () => {
        onClose(); // Just close the modal
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        // Add styling for drag over if desired
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            setSelectedImage(file);
            setImagePreviewUrl(URL.createObjectURL(file));
        } else {
            alert('Please drop an image file.');
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="modal-overlay">
            <div className="add-image-modal" ref={modalRef}>
                <div className="modal-header">
                    <h3>Upload Profile Image</h3>
                    <button className="close-button" onClick={onClose}>&times;</button>
                </div>
                <div className="modal-body">
                    <div
                        className="image-upload-area"
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        onClick={triggerFileInput} // Click to open file dialog
                    >
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            ref={fileInputRef}
                            style={{ display: 'none' }} // Hide the default file input
                        />
                        {imagePreviewUrl ? (
                            <img src={imagePreviewUrl} alt="Preview" className="image-preview" />
                        ) : (
                            <>
                                <p>Drag & Drop your image here, or</p>
                                <button className="browse-button">Browse File</button>
                            </>
                        )}
                    </div>
                    {selectedImage && (
                        <p className="file-name">Selected: {selectedImage.name}</p>
                    )}
                </div>
                <div className="modal-footer">
                    <button className="modal-button cancel" onClick={handleCancelClick}>Cancel</button>
                    <button className="modal-button upload" onClick={handleUploadClick} disabled={!selectedImage}>Upload Image</button>
                </div>
            </div>
        </div>
    );
};

export default AddImageModal;