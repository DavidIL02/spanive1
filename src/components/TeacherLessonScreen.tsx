import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft, FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash, FaComments, FaFileAlt } from 'react-icons/fa';
import './TeacherLessonScreen.css';

const TeacherLessonScreen: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  const teacher = location.state?.teacher || {
    name: 'María Rodríguez',
    expertise: 'Spanish Language Expert',
    rating: 4.9,
    students: 500
  };

  const toggleMute = () => setIsMuted(!isMuted);
  const toggleVideo = () => setIsVideoOff(!isVideoOff);

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
            src="https://via.placeholder.com/800x450" 
            alt="Teacher Video" 
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
              {isMuted ? <FaMicrophoneSlash /> : <FaMicrophone />}
              {isMuted ? 'Unmute' : 'Mute'}
            </button>
            <button 
              className="control-button"
              onClick={toggleVideo}
            >
              {isVideoOff ? <FaVideoSlash /> : <FaVideo />}
              {isVideoOff ? 'Start Video' : 'Stop Video'}
            </button>
            <button className="control-button">
              <FaComments />
              Chat
            </button>
            <button className="control-button">
              <FaFileAlt />
              Notes
            </button>
            <button className="control-button end">
              End Lesson
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherLessonScreen; 