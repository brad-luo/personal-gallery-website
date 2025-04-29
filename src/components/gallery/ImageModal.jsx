import { useEffect, useCallback } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ImageModal.css';

const ImageModal = ({ image, onClose, onNavigate, hasMultipleImages }) => {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowRight' && hasMultipleImages) {
      onNavigate('next');
    } else if (e.key === 'ArrowLeft' && hasMultipleImages) {
      onNavigate('prev');
    }
  }, [onClose, onNavigate, hasMultipleImages]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <FaTimes />
        </button>
        
        <div className="modal-image-container">
          <img src={image.url} alt={image.title} className="modal-image" />
        </div>
        
        {hasMultipleImages && (
          <>
            <button 
              className="modal-nav modal-prev" 
              onClick={() => onNavigate('prev')}
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>
            <button 
              className="modal-nav modal-next" 
              onClick={() => onNavigate('next')}
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>
          </>
        )}
        
        <div className="modal-info">
          <h2 className="modal-title">{image.title}</h2>
          {image.description && (
            <p className="modal-description">{image.description}</p>
          )}
          {image.date && (
            <p className="modal-date">Date: {image.date}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
