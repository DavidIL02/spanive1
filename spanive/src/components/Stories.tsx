import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaBook } from 'react-icons/fa';
import './Stories.css';

const Stories: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="stories-container">
      <div className="stories-header">
        <button 
          className="return-button"
          onClick={() => navigate('/voice-mode')}
        >
          <FaArrowLeft />
          Back
        </button>
        <h1>Interactive Stories</h1>
      </div>

      <div className="stories-banner">
        <div className="banner-content">
          <FaBook size={48} />
          <h2>Learn Spanish Through Stories</h2>
          <p>Immerse yourself in engaging narratives while improving your language skills</p>
        </div>
      </div>

      <div className="stories-features">
        <div className="feature-card">
          <h3>Level-Based Stories</h3>
          <p>Choose from beginner to advanced levels, each story tailored to your proficiency</p>
        </div>
        <div className="feature-card">
          <h3>Interactive Elements</h3>
          <p>Click on words to see translations and hear pronunciation</p>
        </div>
        <div className="feature-card">
          <h3>Progress Tracking</h3>
          <p>Monitor your reading comprehension and vocabulary growth</p>
        </div>
      </div>

      <div className="stories-content">
        <h2>Featured Stories</h2>
        <div className="story-grid">
          <div className="story-card">
            <h3>El Viaje Inesperado</h3>
            <p>Beginner • 5 min read</p>
            <button className="read-button">Start Reading</button>
          </div>
          <div className="story-card">
            <h3>La Misteriosa Carta</h3>
            <p>Intermediate • 8 min read</p>
            <button className="read-button">Start Reading</button>
          </div>
          <div className="story-card">
            <h3>El Secreto del Abuelo</h3>
            <p>Advanced • 12 min read</p>
            <button className="read-button">Start Reading</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories; 