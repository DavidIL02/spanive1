import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useEffect } from 'react';
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

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red' }}>
          <h1>Something went wrong.</h1>
          <pre>{this.state.error?.toString()}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  useEffect(() => {
    console.log('App mounted');
  }, []);

  return (
    <Router>
      <div className="app-container">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<LoadingScreen logoColors={{
              white: 255,
              blue: 55,
              red: 5
            }} logos={[logo]} />} />
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
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;