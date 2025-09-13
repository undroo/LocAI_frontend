import React from 'react'
import './Header.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <a href="/" className="logo-link" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <div className="logo-icon">📚</div>
            <span className="logo-text">Teachi</span>
          </a>
          
        </div>
      </div>
      
      <nav className="header-nav">
        <a href="lessons" className="nav-link">Lessons</a>
      </nav>
      
      <div className="header-right">
      </div>
    </header>
  )
}

export default Header
