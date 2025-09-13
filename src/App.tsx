import React from 'react'
import Header from './components/Header'
import LessonContent from './components/LessonContent'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <LessonContent />
      </main>
    </div>
  )
}

export default App