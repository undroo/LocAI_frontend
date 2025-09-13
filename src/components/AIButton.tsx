import React, { useState, useRef, useEffect } from 'react'
import { api, AskRequest } from '../services/api'
import './AIButton.css'

interface AIButtonProps {
  onSubmit: (prompt: string, response: string) => void
  sectionTitle: string
  slideNum?: number
}

const AIButton: React.FC<AIButtonProps> = ({ onSubmit, sectionTitle, slideNum }) => {
  console.log('AIButton rendering with props:', { sectionTitle, slideNum })
  const [isInputMode, setIsInputMode] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (isInputMode && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isInputMode])

  const handleButtonClick = () => {
    console.log('AIButton clicked, switching to input mode')
    setIsInputMode(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('AIButton handleSubmit called with:', { inputValue, isSubmitting })
    
    if (inputValue.trim() && !isSubmitting) {
      setIsSubmitting(true)
      console.log('Making API request with:', { sectionTitle, slideNum })
      
      try {
        const request: AskRequest = {
          userPrompt: inputValue.trim(),
          slide_topic: sectionTitle,
          slide_num: slideNum
        }
        
        console.log('Sending request:', request)
        const response = await api.askAI(request)
        console.log('Received response:', response)
        
        await onSubmit(response.input, response.response)
        setInputValue('')
        setIsInputMode(false)
      } catch (error) {
        console.error('Failed to get AI response:', error)
        // You might want to show an error message to the user here
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const handleCancel = () => {
    setInputValue('')
    setIsInputMode(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleCancel()
    }
  }

  if (isInputMode) {
    return (
      <form className="ai-input-form" onSubmit={handleSubmit}>
        <div className="ai-input-container">
          <textarea
            ref={inputRef}
            className="ai-input-textarea"
            placeholder="Ask AI about this section..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={2}
            disabled={isSubmitting}
          />
          <div className="ai-input-actions">
            <button
              type="button"
              className="ai-input-cancel"
              onClick={handleCancel}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ai-input-submit"
              disabled={!inputValue.trim() || isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Ask AI'}
            </button>
          </div>
        </div>
      </form>
    )
  }

  return (
    <button 
      className="ai-button" 
      onClick={handleButtonClick}
      style={{ border: '2px solid red', padding: '10px' }}
    >
      <span className="ai-icon">✨</span>
      <span className="ai-text">Ask AI for more details</span>
    </button>
  )
}

export default AIButton
