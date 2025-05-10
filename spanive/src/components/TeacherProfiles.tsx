import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaChalkboardTeacher } from 'react-icons/fa';
import { teachers } from '../data/teachers';
import { Teacher } from '../types/teacher';
import './TeacherProfiles.css';

const TeacherProfiles: React.FC = () => {
  const navigate = useNavigate();

  const handleTeacherSelect = (teacher: Teacher) => {
    navigate('/teacher-calling', { state: { teacher } });
  };

  return (
    <div className="teacher-profiles-container">
      <div className="teacher-profiles-header">
        <button 
          className="return-button"
          onClick={() => navigate('/screen-mode')}
        >
          <FaArrowLeft />
          Back
        </button>
        <h1>Personal Teachers</h1>
      </div>

      <div className="teacher-profiles-banner">
        <div className="banner-content">
          <FaChalkboardTeacher size={48} />
          <h2>Learn with Personal Teachers</h2>
          <p>Get one-on-one attention from experienced Spanish teachers</p>
        </div>
      </div>

      <div className="teachers-grid">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="teacher-card">
            <img src={teacher.image} alt={teacher.name} className="teacher-image" />
            <div className="teacher-info">
              <h3>{teacher.name}</h3>
              <p>{teacher.expertise}</p>
              <div className="teacher-stats">
                <span>⭐ {teacher.rating}/5</span>
                <span>👥 {teacher.students}+ students</span>
                <span>⏱️ {teacher.experience}</span>
              </div>
            </div>
            <button 
              className="select-teacher"
              onClick={() => handleTeacherSelect(teacher)}
            >
              Select Teacher
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherProfiles; 