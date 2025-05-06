import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft, FaBook, FaCalendarAlt } from 'react-icons/fa';
import './TeacherLesson.css';

const TeacherLesson: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const teacher = location.state?.teacher;

  return (
    <div className="teacher-lesson">
      <button 
        className="return-button"
        onClick={() => navigate('/teachers')}
      >
        <FaArrowLeft />
        Return
      </button>

      <div className="lesson-container">
        <img src={teacher?.image} alt={teacher?.name} className="teacher-image" />
        <h2>{teacher?.name}</h2>
        <p className="expertise">{teacher?.expertise}</p>
        
        <div className="lesson-options">
          <button className="lesson-button schedule">
            <FaCalendarAlt />
            Schedule Lesson
          </button>
          <button className="lesson-button materials">
            <FaBook />
            Learning Materials
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherLesson; 