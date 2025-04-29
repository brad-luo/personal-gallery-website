import { useState } from 'react';
import './GalleryItem.css';

const GalleryItem = ({ image, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      className="gallery-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className={`image-container ${isLoaded ? 'loaded' : ''}`}>
        {!isLoaded && <div className="image-placeholder"></div>}
        <img 
          src={image.url} 
          alt={image.title} 
          onLoad={handleImageLoad}
          loading="lazy"
        />
        
        {isHovered && (
          <div className="image-overlay">
            <h3 className="image-title">{image.title}</h3>
            {image.description && (
              <p className="image-description">{image.description}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryItem;
