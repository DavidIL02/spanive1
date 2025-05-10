import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { FaArrowLeft } from 'react-icons/fa';
import './ScreenMode.css';

const ScreenMode: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="screen-mode-container">
      <img 
        src={logo} 
        alt="Spanive Logo"
        className="screen-mode-logo"
      />
      
      <h3 className="screen-mode-question">
        ¿Do you want to talk with a personal teacher or a general teacher?
      </h3>

      <div className="teacher-buttons">
        <button 
          className="pt-button"
          onClick={() => navigate('/teachers')}
        >
          PT
        </button>
        <button 
          className="gt-button"
          onClick={() => navigate('/gt-mode')}
        >
          GT
        </button>
      </div>

      <button 
        className="return-button screen-return"
        onClick={() => navigate('/')}
      >
        <FaArrowLeft />
        Return
      </button>
    </div>
  );
};

export default ScreenMode; 