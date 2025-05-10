import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaBookOpen, FaSearch } from 'react-icons/fa';
import './Vocabulary.css';

const Vocabulary: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="vocabulary-container">
      <div className="vocabulary-header">
        <button 
          className="return-button"
          onClick={() => navigate('/voice-mode')}
        >
          <FaArrowLeft />
          Back
        </button>
        <h1>Vocabulary Builder</h1>
      </div>

      <div className="vocabulary-banner">
        <div className="banner-content">
          <FaBookOpen size={48} />
          <h2>Expand Your Spanish Vocabulary</h2>
          <p>Master essential words and phrases with our interactive learning tools</p>
        </div>
      </div>

      <div className="search-section">
        <div className="search-container">
          <FaSearch />
          <input 
            type="text" 
            placeholder="Search for words or phrases..."
            className="search-input"
          />
        </div>
      </div>

      <div className="vocabulary-categories">
        <h2>Word Categories</h2>
        <div className="category-grid">
          <div className="category-card">
            <h3>Everyday Phrases</h3>
            <p>Essential expressions for daily conversations</p>
            <span className="word-count">120 words</span>
          </div>
          <div className="category-card">
            <h3>Business Spanish</h3>
            <p>Professional vocabulary for the workplace</p>
            <span className="word-count">85 words</span>
          </div>
          <div className="category-card">
            <h3>Travel & Tourism</h3>
            <p>Words and phrases for your next trip</p>
            <span className="word-count">150 words</span>
          </div>
        </div>
      </div>

      <div className="learning-tools">
        <h2>Learning Tools</h2>
        <div className="tools-grid">
          <div className="tool-card">
            <h3>Flashcards</h3>
            <p>Practice with interactive flashcards</p>
            <button className="start-button">Start Practice</button>
          </div>
          <div className="tool-card">
            <h3>Word Games</h3>
            <p>Learn through fun games and challenges</p>
            <button className="start-button">Play Now</button>
          </div>
          <div className="tool-card">
            <h3>Pronunciation Guide</h3>
            <p>Listen and practice correct pronunciation</p>
            <button className="start-button">Start Learning</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vocabulary; 