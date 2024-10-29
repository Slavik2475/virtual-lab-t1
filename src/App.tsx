import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EditorPage from './pages/EditorPage';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 transition-colors">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/editor" element={<EditorPage />} />
      </Routes>
    </div>
  );
}

export default App;