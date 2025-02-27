import React from 'react';
import './Category.css'; // Assurez-vous que ce fichier est accessible

const Pro = () => {
  return (
    <div className="categories-container">
      <div className="title-container">
        <div>
          <h2>Latest projects</h2>
          <p>Explore the best projects that benefit you</p>
        </div>
        <div className="explore-link">
          <a href="/freelancers">EExplorer All Projects</a>
        </div>
        
      </div>
    </div>
  );
}

export default Pro;
