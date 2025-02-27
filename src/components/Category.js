import React from 'react';
import './Category.css'; // Assurez-vous que ce fichier est accessible

const categories = [
  { name: "Design", services: 25, link: "/design" },
  { name: "Development", services: 40, link: "/development" },
  { name: "Marketing", services: 30, link: "/marketing" },
  { name: "Writing", services: 20, link: "/writing" },
  { name: "Photography", services: 15, link: "/photography" },
  
];

const Category = () => {
  return (
    <div className="categories-container">
      <div className="title-container">
        <div>
          <h2>Find freelancers by category</h2>
          <p>Find services from 100+ categories</p>
        </div>
        <div className="explore-link">
          <a href="/freelancers">View All Categories</a>
        </div>
      </div>

      <div className="categories-list">
        {categories.map((category, index) => (
          <a href={category.link} className="category-card" key={index}>
            <div className="category-background">
              <h3 className="category-name">{category.name}</h3>
              <p className="category-services">{category.services} services</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Category;
