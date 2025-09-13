import React, { useState, useEffect } from 'react'
import './Carousel.css'

interface CarouselProps {
  children: React.ReactNode[]
  sectionTitles: string[]
}

const Carousel: React.FC<CarouselProps> = ({ children, sectionTitles }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? children.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === children.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        goToPrevious()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        goToNext()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="carousel">
      <div className="carousel-header">
        <h1 className="lesson-title">Lesson: The Water Cycle</h1>
        <div className="slide-counter">
          {currentSlide + 1} of {children.length}
        </div>
      </div>

      <div className="carousel-container">
        <div className="carousel-content">
          <div 
            className="carousel-slides" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {children.map((child, index) => (
              <div key={index} className="carousel-slide">
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>

      

      <div className="carousel-dots">
        {sectionTitles.map((title, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to ${title}`}
          >
            <span className="dot-title">{title}</span>
          </button>
        ))}
      </div>

    </div>
  )
}

export default Carousel
