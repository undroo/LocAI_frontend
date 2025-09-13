import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Landing from './components/Landing'
import LessonsList from './components/LessonsList'
import LessonContent from './components/LessonContent'
import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/lessons" element={<LessonsList />} />
            <Route path="/lesson/:lessonId" element={<LessonContent />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App