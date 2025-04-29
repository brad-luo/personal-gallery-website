import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Me</h1>
      </div>
      
      <div className="about-content">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Profile" />
        </div>
        
        <div className="about-text">
          <h2>Hello, I'm [Your Name]</h2>
          <p>
            Welcome to my personal gallery website. I'm a passionate [photographer/artist/designer] 
            based in [Your Location]. My work focuses on capturing [describe your focus or style].
          </p>
          
          <p>
            I started my journey in [year] when I [brief story about how you started]. 
            Since then, I've been dedicated to [your mission or what drives you].
          </p>
          
          <p>
            When I'm not [creating/photographing/designing], you can find me [your hobbies or interests].
            I believe that [your philosophy or approach to your work].
          </p>
          
          <h3>My Approach</h3>
          <p>
            I strive to [what you aim to achieve with your work]. Each piece in my gallery 
            represents [what your work means to you or what you hope it conveys to viewers].
          </p>
          
          <h3>Equipment & Tools</h3>
          <ul className="tools-list">
            <li>[Camera/Equipment/Software 1]</li>
            <li>[Camera/Equipment/Software 2]</li>
            <li>[Camera/Equipment/Software 3]</li>
            <li>[Camera/Equipment/Software 4]</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
