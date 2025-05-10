import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMicrophone, FaDesktop } from 'react-icons/fa';
import './LoadingScreen.css';

interface LoadingScreenProps {
  logoColors: {
    white: number;
    blue: number;
    red: number;
  };
  logos: string[];
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ logoColors, logos }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loading-container" role="main">
      <img 
        src={logos[0]} 
        alt="Spanive Logo"
        className={`logo ${loading ? 'loading' : ''}`}
      />
      
      {!loading && (
        <div className="action-buttons">
          <button 
            className="voice-mode-btn"
            onClick={() => navigate('/voice-mode')}
            aria-label="Switch to Voice Mode"
          >
            <FaMicrophone size={24} />
            Voice Mode
          </button>
          <button 
            className="screen-mode-btn"
            onClick={() => navigate('/screen-mode')}
            aria-label="Switch to Screen Mode"
          >
            <FaDesktop size={24} />
            Screen Mode
          </button>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen; 