import React from 'react';
import './FreelancersList.css'; // Assurez-vous que ce fichier est accessible
import portrait from '../images/portrait.jfif'; // Chemin vers votre image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faGlobe } from '@fortawesome/free-solid-svg-icons'; // Importez les icônes

const freelancers = [
  {
    name: 'Lucy Haley',
    rating: 4.5,
    profession: 'Human Resources',
    location: 'Buffalo',
    languages: ['Chinese', 'English'],
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...',
    services: 6,
    price: '$60/day',
    experiences: ['Recruitment', 'Training'],
    image: portrait,
  },
  {
    name: 'Thiago Henry',
    rating: 5.0,
    profession: 'Software Engineer',
    location: 'New York City',
    languages: ['English', 'Russian'],
    description: 'My name is Thiago Henry. I am a chemical engineer turned Airtable expert...',
    services: 3,
    price: '$200/hr',
    experiences: ['Software', 'AI'],
    image: portrait,
  },
  {
    name: 'Marcus Rosser',
    rating: 5.0,
    profession: 'Product Manager',
    location: 'Los Angeles',
    languages: ['English'],
    description: 'Hello, I’m Marcus Carter, CISA. I have nearly 7 years in IT Audit and Compliance with experience...',
    services: 2,
    price: '$560/month',
    experiences: ['Product Design', 'Agile'],
    image: portrait,
  },
];

const FreelancersList = () => {
  return (
    <div className="freelancers-list">
      <h2>Top rated freelancers</h2>
      <p>Browse talent for your projects</p>
      <div className="freelancers-cards">
        {freelancers.map((freelancer, index) => (
          <div className="freelancer-card" key={index}>
            <div className="freelancer-header">
              <img src={freelancer.image} alt={`${freelancer.name}`} className="freelancer-image" />
              <div className="freelancer-info">
                <h3>{freelancer.name}</h3>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div className="rating">{`★ ${freelancer.rating}`}</div>
                  <div className="profession" style={{ marginLeft: '5px' }}>{freelancer.profession}</div>
                </div>
              </div>
            </div>
            <div className="location">
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '5px' }} />
              {freelancer.location}
            </div>
            <div className="languages">
              <FontAwesomeIcon icon={faGlobe} style={{ marginRight: '5px' }} />
              {freelancer.languages.join(', ')}
            </div>
            <p>{freelancer.description}</p>

            {/* Affichage des expériences */}
            <div className="experiences">
              {freelancer.experiences.map((experience, i) => (
                <div key={i} className="experience-badge">{experience}</div>
              ))}
            </div>

            {/* Ligne horizontale personnalisée */}
            <hr className="custom-hr" />

            {/* Services et prix sur la même ligne */}
            <div className="services-price">
              <div className="services">{`${freelancer.services} services`}</div>
              <div className="price"><strong>{freelancer.price}</strong></div>
            </div>
          </div>
        ))}
      </div>
      <div className="explore-link">
        <a href="/freelancers">Explorer All Freelancers</a>
      </div>
    </div>
  );
};

export default FreelancersList;
