import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute'; // Importer le composant PrivateRoute

const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/auth/Login'));
const Register = React.lazy(() => import('./pages/auth/Register'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

const App = () => {
  const location = useLocation();

  // Show Navbar in all pages but Footer only when it's not /login, /register, or /dashboard
  const showNavbar = !['/login', '/register'].includes(location.pathname);
  const showFooter = !['/login', '/register', '/dashboard'].includes(location.pathname);

  return (
    <div>
      {showNavbar && <Navbar />} {/* Show Navbar on all pages except /login and /register */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/dashboard" 
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } 
          />
        </Routes>
      </Suspense>
      {showFooter && <Footer />} {/* Show Footer on all pages except /login, /register, and /dashboard */}
    </div>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
