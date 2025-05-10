import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaChalkboardTeacher, FaUsers, FaClock, FaStar } from 'react-icons/fa';
import './GTMode.css';

const GTMode: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="gt-container">
      <div className="gt-header">
        <button 
          className="return-button"
          onClick={() => navigate('/screen-mode')}
        >
          <FaArrowLeft />
          Back
        </button>
        <h1>General Teacher</h1>
      </div>

      <div className="gt-banner">
        <div className="banner-content">
          <FaChalkboardTeacher size={48} />
          <h2>Learn with Our Expert Teachers</h2>
          <p>Join group sessions with experienced Spanish teachers</p>
        </div>
      </div>

      <div className="gt-features">
        <div className="feature-card">
          <h3>Group Learning</h3>
          <p>Learn alongside other students in interactive group sessions</p>
        </div>
        <div className="feature-card">
          <h3>Expert Teachers</h3>
          <p>Learn from certified Spanish teachers with years of experience</p>
        </div>
        <div className="feature-card">
          <h3>Flexible Schedule</h3>
          <p>Choose from multiple time slots that fit your schedule</p>
        </div>
      </div>

      <div className="gt-sessions">
        <h2>Available Sessions</h2>
        <div className="sessions-grid">
          <div className="session-card">
            <div className="session-info">
              <h3>Beginner Spanish</h3>
              <p>Basic conversation and grammar</p>
              <div className="session-meta">
                <span><FaUsers /> 4/8 students</span>
                <span><FaClock /> 60 min</span>
                <span><FaStar /> 4.8/5</span>
              </div>
            </div>
            <button className="join-button">Join Session</button>
          </div>
          <div className="session-card">
            <div className="session-info">
              <h3>Intermediate Practice</h3>
              <p>Advanced conversation and writing</p>
              <div className="session-meta">
                <span><FaUsers /> 6/8 students</span>
                <span><FaClock /> 60 min</span>
                <span><FaStar /> 4.9/5</span>
              </div>
            </div>
            <button className="join-button">Join Session</button>
          </div>
          <div className="session-card">
            <div className="session-info">
              <h3>Business Spanish</h3>
              <p>Professional communication skills</p>
              <div className="session-meta">
                <span><FaUsers /> 3/8 students</span>
                <span><FaClock /> 60 min</span>
                <span><FaStar /> 4.7/5</span>
              </div>
            </div>
            <button className="join-button">Join Session</button>
          </div>
        </div>
      </div>

      <div className="gt-teachers">
        <h2>Featured Teachers</h2>
        <div className="teachers-grid">
          <div className="teacher-card">
            <div className="teacher-info">
              <h3>María Rodríguez</h3>
              <p>10+ years experience</p>
              <div className="teacher-stats">
                <span>4.9/5 rating</span>
                <span>500+ students</span>
              </div>
            </div>
            <button className="view-profile">View Profile</button>
          </div>
          <div className="teacher-card">
            <div className="teacher-info">
              <h3>Carlos Martínez</h3>
              <p>8+ years experience</p>
              <div className="teacher-stats">
                <span>4.8/5 rating</span>
                <span>400+ students</span>
              </div>
            </div>
            <button className="view-profile">View Profile</button>
          </div>
          <div className="teacher-card">
            <div className="teacher-info">
              <h3>Ana García</h3>
              <p>12+ years experience</p>
              <div className="teacher-stats">
                <span>5.0/5 rating</span>
                <span>600+ students</span>
              </div>
            </div>
            <button className="view-profile">View Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GTMode; 