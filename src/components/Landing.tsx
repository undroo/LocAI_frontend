import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Landing.css'

const Landing: React.FC = () => {
  const navigate = useNavigate()

  const handleLessonsClick = () => {
    navigate('/lessons')
  }

  return (
    <div className="landing">
      <div className="landing-content">
        <h1 className="landing-title">Welcome to LocAI</h1>
        <p className="landing-subtitle">Your AI-powered learning companion</p>
        <p className="landing-description">
          Discover interactive lessons designed to enhance your learning experience with intelligent assistance.
        </p>
        <button 
          className="landing-cta"
          onClick={handleLessonsClick}
        >
          Start Learning
        </button>
      </div>
    </div>
  )
}

export default Landing
