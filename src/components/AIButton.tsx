import React from 'react'
import './AIButton.css'

interface AIButtonProps {
  onClick: () => void
}

const AIButton: React.FC<AIButtonProps> = ({ onClick }) => {
  return (
    <button className="ai-button" onClick={onClick}>
      <span className="ai-icon">✨</span>
      <span className="ai-text">Ask AI for more details</span>
    </button>
  )
}

export default AIButton
