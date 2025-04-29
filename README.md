# Personal Gallery Website

A clean, minimalist personal gallery website for showcasing photography, artwork, or creative projects.

## Live Demo

Visit the live demo: [Personal Gallery Website](https://brad-luo.github.io/personal-gallery-website/)

*Note: The live demo will be available after GitHub Pages is enabled in the repository settings.*

## Features

- Responsive design that works on all devices
- Image gallery with filtering by categories
- Lightbox view for detailed image viewing
- Contact form for inquiries
- Fast loading with image optimization

## Technologies Used

- React
- React Router for navigation
- CSS for styling
- React Masonry CSS for gallery layout
- React Icons for UI icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/gallery-website.git
   ```

2. Navigate to the project directory
   ```
   cd gallery-website
   ```

3. Install dependencies
   ```
   npm install
   ```

4. Start the development server
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## Customization

### Adding Your Own Images

1. Add your images to the `public` folder
2. Update the `galleryData.js` file in the `src/data` directory with your image information

### Changing Colors and Styles

- Main styles are defined in `src/index.css` using CSS variables
- Component-specific styles are in their respective CSS files

## Deployment

This site can be easily deployed to platforms like GitHub Pages, Netlify, or Vercel.

### Build for Production

```
npm run build
```

The build files will be in the `dist` directory.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Images from [Unsplash](https://unsplash.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
