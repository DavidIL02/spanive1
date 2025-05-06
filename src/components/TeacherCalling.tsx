import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft, FaPhone, FaPhoneSlash, FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash } from 'react-icons/fa';
import './TeacherCalling.css';

const TeacherCalling: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);

  const teacher = location.state?.teacher || {
    name: 'María Rodríguez',
    expertise: 'Spanish Language Expert',
    rating: 4.9,
    students: 500
  };

  const toggleMute = () => setIsMuted(!isMuted);
  const toggleVideo = () => setIsVideoOff(!isVideoOff);
  const toggleCall = () => setIsCallActive(!isCallActive);

  return (
    <div className="teacher-calling-container">
      <div className="teacher-calling-header">
        <button 
          className="return-button"
          onClick={() => navigate('/teachers')}
        >
          <FaArrowLeft />
          Back
        </button>
        <h1>Teacher Call</h1>
      </div>

      <div className="teacher-calling-banner">
        <div className="banner-content">
          <h2>Live Spanish Lesson</h2>
          <p>Connect with your teacher for personalized learning</p>
        </div>
      </div>

      <div className="teacher-info-card">
        <div className="teacher-info">
          <h3>{teacher.name}</h3>
          <p>{teacher.expertise}</p>
          <div className="teacher-stats">
            <span>⭐ {teacher.rating}/5</span>
            <span>👥 {teacher.students}+ students</span>
          </div>
        </div>

        <div className="call-controls">
          <button 
            className={`call-button ${isCallActive ? 'end' : ''}`}
            onClick={toggleCall}
          >
            {isCallActive ? (
              <>
                <FaPhoneSlash />
                End Call
              </>
            ) : (
              <>
                <FaPhone />
                Start Call
              </>
            )}
          </button>
          {isCallActive && (
            <>
              <button 
                className="call-button"
                onClick={toggleMute}
              >
                {isMuted ? <FaMicrophoneSlash /> : <FaMicrophone />}
                {isMuted ? 'Unmute' : 'Mute'}
              </button>
              <button 
                className="call-button"
                onClick={toggleVideo}
              >
                {isVideoOff ? <FaVideoSlash /> : <FaVideo />}
                {isVideoOff ? 'Start Video' : 'Stop Video'}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherCalling; 