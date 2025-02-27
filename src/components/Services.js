import React from 'react';
import './Category.css'; // Assurez-vous que ce fichier est accessible

const Services = () => {
  return (
    <div className="categories-container">
      <div className="title-container">
        <div>
          <h2>Trending Services</h2>
          <p>Explore the best services that suit you</p>
        </div>
        <div className="explore-link">
          <a href="/freelancers">Explorer All Services</a>
        </div>
      </div>
    </div>
  );
}

export default Services;
