import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaLanguage, FaBook, FaCheck } from 'react-icons/fa';
import './Grammar.css';

const Grammar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="grammar-container">
      <div className="grammar-header">
        <button 
          className="return-button"
          onClick={() => navigate('/voice-mode')}
        >
          <FaArrowLeft />
          Back
        </button>
        <h1>Spanish Grammar</h1>
      </div>

      <div className="grammar-banner">
        <div className="banner-content">
          <FaLanguage size={48} />
          <h2>Master Spanish Grammar</h2>
          <p>Learn and practice essential grammar rules with interactive exercises</p>
        </div>
      </div>

      <div className="grammar-levels">
        <h2>Grammar Levels</h2>
        <div className="levels-grid">
          <div className="level-card">
            <h3>Beginner</h3>
            <ul className="topics-list">
              <li><FaCheck /> Basic Verb Conjugation</li>
              <li><FaCheck /> Articles and Gender</li>
              <li><FaCheck /> Simple Present Tense</li>
              <li><FaCheck /> Basic Sentence Structure</li>
            </ul>
            <button className="start-button">Start Learning</button>
          </div>
          <div className="level-card">
            <h3>Intermediate</h3>
            <ul className="topics-list">
              <li><FaCheck /> Past Tenses</li>
              <li><FaCheck /> Subjunctive Mood</li>
              <li><FaCheck /> Pronouns and Prepositions</li>
              <li><FaCheck /> Complex Sentences</li>
            </ul>
            <button className="start-button">Start Learning</button>
          </div>
          <div className="level-card">
            <h3>Advanced</h3>
            <ul className="topics-list">
              <li><FaCheck /> Conditional Tenses</li>
              <li><FaCheck /> Subjunctive in Detail</li>
              <li><FaCheck /> Idiomatic Expressions</li>
              <li><FaCheck /> Advanced Syntax</li>
            </ul>
            <button className="start-button">Start Learning</button>
          </div>
        </div>
      </div>

      <div className="grammar-tools">
        <h2>Learning Tools</h2>
        <div className="tools-grid">
          <div className="tool-card">
            <FaBook size={24} />
            <h3>Interactive Exercises</h3>
            <p>Practice grammar rules with instant feedback</p>
          </div>
          <div className="tool-card">
            <FaBook size={24} />
            <h3>Grammar Quizzes</h3>
            <p>Test your knowledge with comprehensive quizzes</p>
          </div>
          <div className="tool-card">
            <FaBook size={24} />
            <h3>Progress Tracking</h3>
            <p>Monitor your improvement over time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grammar; 