import React from 'react'
import './Header.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <div className="logo-icon">📚</div>
          <span className="logo-text">TeachAssist</span>
        </div>
      </div>
      
      <nav className="header-nav">
        <a href="#" className="nav-link">Dashboard</a>
        <a href="#" className="nav-link">Lessons</a>
        <a href="#" className="nav-link">Resources</a>
        <a href="#" className="nav-link">Community</a>
      </nav>
      
      <div className="header-right">
        <button className="notification-button">
          🔔
        </button>
        <div className="user-profile">
          <img 
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" 
            alt="User profile" 
            className="profile-picture"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
