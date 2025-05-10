import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
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
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('App mounted');
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={
            <ErrorBoundary>
              <LoadingScreen logoColors={{
                white: 255,
                blue: 55,
                red: 5
              }} logos={[logo]} />
            </ErrorBoundary>
          } />
          <Route path="/voice-mode" element={<ErrorBoundary><VoiceMode /></ErrorBoundary>} />
          <Route path="/screen-mode" element={<ErrorBoundary><ScreenMode /></ErrorBoundary>} />
          <Route path="/gt-mode" element={<ErrorBoundary><GTMode /></ErrorBoundary>} />
          <Route path="/teachers" element={<ErrorBoundary><TeacherProfiles /></ErrorBoundary>} />
          <Route path="/teacher-calling" element={<ErrorBoundary><TeacherCalling /></ErrorBoundary>} />
          <Route path="/teacher-lesson-screen" element={<ErrorBoundary><TeacherLessonScreen /></ErrorBoundary>} />
          <Route path="/stories" element={<ErrorBoundary><Stories /></ErrorBoundary>} />
          <Route path="/vocabulary" element={<ErrorBoundary><Vocabulary /></ErrorBoundary>} />
          <Route path="/podcast" element={<ErrorBoundary><Podcast /></ErrorBoundary>} />
          <Route path="/grammar" element={<ErrorBoundary><Grammar /></ErrorBoundary>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;