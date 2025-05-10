import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft, FaPhone, FaVideo } from 'react-icons/fa';
import './TeacherCall.css';

const TeacherCall: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const teacher = location.state?.teacher;

  return (
    <div className="teacher-call">
      <button 
        className="return-button"
        onClick={() => navigate('/teachers')}
      >
        <FaArrowLeft />
        Return
      </button>

      <div className="call-container">
        <img src={teacher?.image} alt={teacher?.name} className="teacher-image" />
        <h2>{teacher?.name}</h2>
        <p className="expertise">{teacher?.expertise}</p>
        
        <div className="call-options">
          <button className="call-button voice">
            <FaPhone />
            Voice Call
          </button>
          <button className="call-button video">
            <FaVideo />
            Video Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherCall; 