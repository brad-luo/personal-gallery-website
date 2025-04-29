import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { galleryData } from '../../data/galleryData';
import './HomePage.css';

const HomePage = () => {
  const [featuredImages, setFeaturedImages] = useState([]);
  
  useEffect(() => {
    // Get 3 random images for the carousel
    const shuffled = [...galleryData].sort(() => 0.5 - Math.random());
    const featured = shuffled.slice(0, 3);
    setFeaturedImages(featured);
  }, []);

  // Get unique categories
  const categories = [...new Set(galleryData.map(img => img.category))];
  
  // Get one image from each category for the featured section
  const featuredCategories = categories.slice(0, 3).map(category => {
    const categoryImages = galleryData.filter(img => img.category === category);
    return {
      category,
      image: categoryImages[0]
    };
  });

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-carousel">
          {featuredImages.map((image, index) => (
            <div 
              key={image.id} 
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image.url})` }}
            >
              <div className="carousel-content">
                <h1>Personal Gallery</h1>
                <p>A collection of my favorite moments and creations</p>
                <Link to="/gallery" className="cta-button">View Gallery</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-content">
          <h2>Welcome to My Gallery</h2>
          <p>
            This is a personal space where I showcase my photography, artwork, and creative projects.
            Feel free to explore the different categories and discover the stories behind each piece.
          </p>
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Collections</h2>
        <div className="featured-grid">
          {featuredCategories.map(item => (
            <div key={item.category} className="featured-item">
              <div className="featured-image">
                <img src={item.image.url} alt={item.category} />
              </div>
              <div className="featured-info">
                <h3>{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</h3>
                <Link to={`/gallery?category=${item.category}`} className="featured-link">
                  View Collection
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
