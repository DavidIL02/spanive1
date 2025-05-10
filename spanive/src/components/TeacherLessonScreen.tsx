import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft, FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash, FaComments, FaFileAlt } from 'react-icons/fa';
import { Teacher, TeacherState } from '../types/teacher';
import './TeacherLessonScreen.css';

const TeacherLessonScreen: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const teacher = location.state?.teacher as Teacher;

  const [state, setState] = useState<TeacherState>({
    isMuted: false,
    isVideoOff: false,
    isCallActive: true
  });

  const toggleMute = () => setState(prev => ({ ...prev, isMuted: !prev.isMuted }));
  const toggleVideo = () => setState(prev => ({ ...prev, isVideoOff: !prev.isVideoOff }));

  if (!teacher) {
    navigate('/teacher-calling');
    return null;
  }

  return (
    <div className="lesson-screen-container">
      <div className="lesson-screen-header">
        <button 
          className="return-button"
          onClick={() => navigate('/teacher-calling')}
        >
          <FaArrowLeft />
          Back
        </button>
        <h1>Live Lesson</h1>
      </div>

      <div className="lesson-content">
        <div className="video-container">
          <img 
            src={teacher.image} 
            alt={teacher.name} 
            className="teacher-video"
          />
        </div>

        <div className="lesson-info">
          <h3>{teacher.name}</h3>
          <p>{teacher.expertise}</p>
          <div className="lesson-stats">
            <span>⭐ {teacher.rating}/5</span>
            <span>👥 {teacher.students}+ students</span>
            <span>⏱️ 45 min lesson</span>
          </div>

          <div className="lesson-controls">
            <button 
              className="control-button"
              onClick={toggleMute}
            >
              {state.isMuted ? <FaMicrophoneSlash /> : <FaMicrophone />}
              {state.isMuted ? 'Unmute' : 'Mute'}
            </button>
            <button 
              className="control-button"
              onClick={toggleVideo}
            >
              {state.isVideoOff ? <FaVideoSlash /> : <FaVideo />}
              {state.isVideoOff ? 'Start Video' : 'Stop Video'}
            </button>
            <button className="control-button">
              <FaComments />
              Chat
            </button>
            <button className="control-button">
              <FaFileAlt />
              Notes
            </button>
            <button 
              className="control-button end"
              onClick={() => navigate('/teachers')}
            >
              End Lesson
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherLessonScreen; 