import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHeadphones, FaPlay, FaPause, FaDownload } from 'react-icons/fa';
import './Podcast.css';

const Podcast: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="podcast-container">
      <div className="podcast-header">
        <button 
          className="return-button"
          onClick={() => navigate('/voice-mode')}
        >
          <FaArrowLeft />
          Back
        </button>
        <h1>Spanish Podcasts</h1>
      </div>

      <div className="podcast-banner">
        <div className="banner-content">
          <FaHeadphones size={48} />
          <h2>Learn Spanish Through Podcasts</h2>
          <p>Improve your listening skills with engaging audio content</p>
        </div>
      </div>

      <div className="featured-episodes">
        <h2>Featured Episodes</h2>
        <div className="episodes-grid">
          <div className="episode-card">
            <div className="episode-info">
              <h3>Spanish for Beginners</h3>
              <p>Basic phrases and essential vocabulary</p>
              <div className="episode-meta">
                <span>15 min</span>
                <span>Beginner</span>
              </div>
            </div>
            <div className="episode-controls">
              <button className="play-button">
                <FaPlay />
              </button>
              <button className="download-button">
                <FaDownload />
              </button>
            </div>
          </div>
          <div className="episode-card">
            <div className="episode-info">
              <h3>Business Spanish</h3>
              <p>Professional communication in the workplace</p>
              <div className="episode-meta">
                <span>20 min</span>
                <span>Intermediate</span>
              </div>
            </div>
            <div className="episode-controls">
              <button className="play-button">
                <FaPlay />
              </button>
              <button className="download-button">
                <FaDownload />
              </button>
            </div>
          </div>
          <div className="episode-card">
            <div className="episode-info">
              <h3>Spanish Culture</h3>
              <p>Exploring traditions and customs</p>
              <div className="episode-meta">
                <span>25 min</span>
                <span>Advanced</span>
              </div>
            </div>
            <div className="episode-controls">
              <button className="play-button">
                <FaPlay />
              </button>
              <button className="download-button">
                <FaDownload />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="podcast-categories">
        <h2>Podcast Categories</h2>
        <div className="categories-grid">
          <div className="category-card">
            <h3>Grammar Focus</h3>
            <p>Deep dives into Spanish grammar rules</p>
            <span className="episode-count">12 episodes</span>
          </div>
          <div className="category-card">
            <h3>Conversation Practice</h3>
            <p>Real-life dialogues and scenarios</p>
            <span className="episode-count">8 episodes</span>
          </div>
          <div className="category-card">
            <h3>Pronunciation Guide</h3>
            <p>Master Spanish pronunciation</p>
            <span className="episode-count">10 episodes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcast; 