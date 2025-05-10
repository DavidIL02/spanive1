import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { FaBook, FaBookOpen, FaHeadphones, FaLanguage, FaArrowLeft } from 'react-icons/fa';
import './VoiceMode.css';

const VoiceMode: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="voice-mode-container">
      <img 
        src={logo} 
        alt="Spanive Logo"
        className="voice-mode-logo"
      />
      
      <div className="voice-buttons">
        <button 
          className="voice-button stories"
          onClick={() => navigate('/stories')}
        >
          <FaBook size={24} />
          Stories
        </button>
        <button 
          className="voice-button vocabulary"
          onClick={() => navigate('/vocabulary')}
        >
          <FaBookOpen size={24} />
          Vocabulary
        </button>
        <button 
          className="voice-button podcast"
          onClick={() => navigate('/podcast')}
        >
          <FaHeadphones size={24} />
          Podcast
        </button>
        <button 
          className="voice-button grammar"
          onClick={() => navigate('/grammar')}
        >
          <FaLanguage size={24} />
          Grammar
        </button>
      </div>

      <button 
        className="return-button voice-return"
        onClick={() => navigate('/')}
      >
        <FaArrowLeft />
        Return
      </button>
    </div>
  );
};

export default VoiceMode; 