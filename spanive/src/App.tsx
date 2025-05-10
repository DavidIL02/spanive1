import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import ScreenMode from './components/ScreenMode';
import VoiceMode from './components/VoiceMode';
import TeacherProfiles from './components/TeacherProfiles';
import TeacherCalling from './components/TeacherCalling';
import TeacherLessonScreen from './components/TeacherLessonScreen';
import Stories from './components/Stories';
import Vocabulary from './components/Vocabulary';
import Podcast from './components/Podcast';
import Grammar from './components/Grammar';
import GTMode from './components/GTMode';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingScreen logos={[logo]} />} />
        <Route path="/voice-mode" element={<VoiceMode />} />
        <Route path="/screen-mode" element={<ScreenMode />} />
        <Route path="/gt-mode" element={<GTMode />} />
        <Route path="/teachers" element={<TeacherProfiles />} />
        <Route path="/teacher-calling" element={<TeacherCalling />} />
        <Route path="/teacher-lesson-screen" element={<TeacherLessonScreen />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/grammar" element={<Grammar />} />
      </Routes>
    </Router>
  );
}

export default App;