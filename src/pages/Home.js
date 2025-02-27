import React from 'react';
import Navbar from '../components/Navbar';
import Accueil from '../components/Accueil'; 
import FreelancersList from '../components/FreelancersList'; 
import Category from '../components/Category'; 
import HeroSection from '../components/HeroSection'; 
import Services from '../components/Services'; 
import TrendingServices from '../components/TrendingServices'; 
import Pro from '../components/Pro'; 
import Projets from '../components/Projets'; 


const Home = () => {
  return (
    <div>
      <Navbar />
      <Accueil /> 
      <FreelancersList />
      <Category />
      <HeroSection />
      <Services />
      <TrendingServices />
      <Pro />
      <Projets />

    </div>
  );
};

export default Home;
