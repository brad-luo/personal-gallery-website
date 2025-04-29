import { useState } from 'react';
import Masonry from 'react-masonry-css';
import GalleryItem from './GalleryItem';
import ImageModal from './ImageModal';
import './GalleryGrid.css';

const GalleryGrid = ({ images, category }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredImages = category === 'all' 
    ? images 
    : images.filter(image => image.category === category);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  // Breakpoints for the masonry grid
  const breakpointColumns = {
    default: 3,
    992: 3,
    768: 2,
    576: 1
  };

  return (
    <>
      {filteredImages.length > 0 ? (
        <Masonry
          breakpointCols={breakpointColumns}
          className="gallery-grid"
          columnClassName="gallery-grid-column"
        >
          {filteredImages.map(image => (
            <GalleryItem 
              key={image.id} 
              image={image} 
              onClick={() => openModal(image)} 
            />
          ))}
        </Masonry>
      ) : (
        <div className="no-images">
          <p>No images found in this category.</p>
        </div>
      )}

      {modalOpen && selectedImage && (
        <ImageModal 
          image={selectedImage} 
          onClose={closeModal} 
          onNavigate={navigateImage}
          hasMultipleImages={filteredImages.length > 1}
        />
      )}
    </>
  );
};

export default GalleryGrid;
