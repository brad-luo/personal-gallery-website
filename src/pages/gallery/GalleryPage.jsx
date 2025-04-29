import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { galleryData } from '../../data/galleryData';
import GalleryGrid from '../../components/gallery/GalleryGrid';
import CategoryFilter from '../../components/gallery/CategoryFilter';
import './GalleryPage.css';

const GalleryPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  
  // Get unique categories from gallery data
  const categories = [...new Set(galleryData.map(img => img.category))];
  
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    
    // Update URL query parameter
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };
  
  // Update active category if URL changes
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory('all');
    }
  }, [searchParams]);

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1>Gallery</h1>
        <p>Browse through my collection of images</p>
      </div>
      
      <CategoryFilter 
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      
      <GalleryGrid 
        images={galleryData}
        category={activeCategory}
      />
    </div>
  );
};

export default GalleryPage;
