import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft, FaPhone, FaPhoneSlash, FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash } from 'react-icons/fa';
import { Teacher, TeacherState } from '../types/teacher';
import './TeacherCalling.css';

const TeacherCalling: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const teacher = location.state?.teacher as Teacher;

  const [state, setState] = useState<TeacherState>({
    isMuted: false,
    isVideoOff: false,
    isCallActive: false
  });

  const toggleMute = () => setState(prev => ({ ...prev, isMuted: !prev.isMuted }));
  const toggleVideo = () => setState(prev => ({ ...prev, isVideoOff: !prev.isVideoOff }));
  const toggleCall = () => setState(prev => ({ ...prev, isCallActive: !prev.isCallActive }));

  if (!teacher) {
    navigate('/teachers');
    return null;
  }

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
            className={`call-button ${state.isCallActive ? 'end' : ''}`}
            onClick={toggleCall}
          >
            {state.isCallActive ? (
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
          {state.isCallActive && (
            <>
              <button 
                className="call-button"
                onClick={toggleMute}
              >
                {state.isMuted ? <FaMicrophoneSlash /> : <FaMicrophone />}
                {state.isMuted ? 'Unmute' : 'Mute'}
              </button>
              <button 
                className="call-button"
                onClick={toggleVideo}
              >
                {state.isVideoOff ? <FaVideoSlash /> : <FaVideo />}
                {state.isVideoOff ? 'Start Video' : 'Stop Video'}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherCalling; 