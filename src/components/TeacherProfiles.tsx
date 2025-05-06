import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaChalkboardTeacher, FaUsers, FaStar, FaGraduationCap, FaPhone, FaBook } from 'react-icons/fa';
import './TeacherProfiles.css';

const TeacherProfiles: React.FC = () => {
  const navigate = useNavigate();

  const handleViewProfile = (teacher: any) => {
    navigate('/teacher-call', { state: { teacher } });
  };

  const handleScheduleLesson = (teacher: any) => {
    navigate('/teacher-lesson', { state: { teacher } });
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

      <div className="teacher-profiles-features">
        <div className="feature-card">
          <h3>Personalized Learning</h3>
          <p>Customized lessons tailored to your goals and learning style</p>
        </div>
        <div className="feature-card">
          <h3>Flexible Scheduling</h3>
          <p>Choose lesson times that work best for your schedule</p>
        </div>
        <div className="feature-card">
          <h3>Progress Tracking</h3>
          <p>Regular assessments and feedback to monitor your improvement</p>
        </div>
      </div>

      <div className="teacher-profiles-grid">
        <div className="teacher-card">
          <div className="teacher-info">
            <h3>María Rodríguez</h3>
            <p>10+ years teaching experience</p>
            <div className="teacher-stats">
              <span><FaStar /> 4.9/5</span>
              <span><FaUsers /> 500+ students</span>
              <span><FaGraduationCap /> DELE Certified</span>
            </div>
          </div>
          <div className="teacher-actions">
            <button 
              className="action-button call"
              onClick={() => handleViewProfile({
                name: 'María Rodríguez',
                expertise: 'Spanish Language Expert',
                rating: 4.9,
                students: 500
              })}
            >
              <FaPhone />
              Call Teacher
            </button>
            <button 
              className="action-button lesson"
              onClick={() => handleScheduleLesson({
                name: 'María Rodríguez',
                expertise: 'Spanish Language Expert',
                rating: 4.9,
                students: 500
              })}
            >
              <FaBook />
              Schedule Lesson
            </button>
          </div>
        </div>

        <div className="teacher-card">
          <div className="teacher-info">
            <h3>Carlos Martínez</h3>
            <p>8+ years teaching experience</p>
            <div className="teacher-stats">
              <span><FaStar /> 4.8/5</span>
              <span><FaUsers /> 400+ students</span>
              <span><FaGraduationCap /> CELTA Certified</span>
            </div>
          </div>
          <div className="teacher-actions">
            <button 
              className="action-button call"
              onClick={() => handleViewProfile({
                name: 'Carlos Martínez',
                expertise: 'Spanish Language Expert',
                rating: 4.8,
                students: 400
              })}
            >
              <FaPhone />
              Call Teacher
            </button>
            <button 
              className="action-button lesson"
              onClick={() => handleScheduleLesson({
                name: 'Carlos Martínez',
                expertise: 'Spanish Language Expert',
                rating: 4.8,
                students: 400
              })}
            >
              <FaBook />
              Schedule Lesson
            </button>
          </div>
        </div>

        <div className="teacher-card">
          <div className="teacher-info">
            <h3>Ana García</h3>
            <p>12+ years teaching experience</p>
            <div className="teacher-stats">
              <span><FaStar /> 5.0/5</span>
              <span><FaUsers /> 600+ students</span>
              <span><FaGraduationCap /> DELE & CELTA</span>
            </div>
          </div>
          <div className="teacher-actions">
            <button 
              className="action-button call"
              onClick={() => handleViewProfile({
                name: 'Ana García',
                expertise: 'Spanish Language Expert',
                rating: 5.0,
                students: 600
              })}
            >
              <FaPhone />
              Call Teacher
            </button>
            <button 
              className="action-button lesson"
              onClick={() => handleScheduleLesson({
                name: 'Ana García',
                expertise: 'Spanish Language Expert',
                rating: 5.0,
                students: 600
              })}
            >
              <FaBook />
              Schedule Lesson
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfiles; 