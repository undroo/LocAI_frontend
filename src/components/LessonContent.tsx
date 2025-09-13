import React from 'react'
import AIButton from './AIButton'
import './LessonContent.css'

const LessonContent: React.FC = () => {
  const handleAIClick = (section: string) => {
    console.log(`AI assistance requested for: ${section}`)
    // Here you would typically open a modal or navigate to an AI chat interface
    alert(`AI assistance for ${section} - This would open an AI chat interface`)
  }

  return (
    <div className="lesson-content">
      <h1 className="lesson-title">Lesson: The Water Cycle</h1>
      
      <section className="lesson-section">
        <h2 className="section-title">Introduction</h2>
        <p className="section-content">
          The water cycle, also known as the hydrologic cycle, is a continuous process that circulates water throughout the Earth's atmosphere, land, and oceans. This natural system involves the movement of water through various stages: evaporation, condensation, precipitation, and collection. The water cycle is essential for maintaining life on Earth, as it ensures the distribution of freshwater resources and plays a crucial role in weather patterns and climate regulation.
        </p>
        <AIButton onClick={() => handleAIClick('Introduction')} />
      </section>

      <section className="lesson-section">
        <h2 className="section-title">Stages of the Water Cycle</h2>
        <div className="stages-list">
          <div className="stage-item">
            <span className="stage-number">1.</span>
            <div className="stage-content">
              <strong>Evaporation:</strong> Water from oceans, lakes, rivers, and other bodies of water is heated by the sun and changes from liquid to water vapor (gas), rising into the atmosphere.
            </div>
          </div>
          <div className="stage-item">
            <span className="stage-number">2.</span>
            <div className="stage-content">
              <strong>Condensation:</strong> As water vapor rises higher into the atmosphere, it cools down and condenses back into tiny water droplets, forming clouds.
            </div>
          </div>
          <div className="stage-item">
            <span className="stage-number">3.</span>
            <div className="stage-content">
              <strong>Precipitation:</strong> When water droplets in clouds become too heavy, they fall back to Earth as rain, snow, sleet, or hail.
            </div>
          </div>
          <div className="stage-item">
            <span className="stage-number">4.</span>
            <div className="stage-content">
              <strong>Collection:</strong> The fallen water collects in oceans, lakes, rivers, and other bodies of water, or seeps into the ground as groundwater. The cycle then begins again as this water evaporates.
            </div>
          </div>
        </div>
        <AIButton onClick={() => handleAIClick('Stages of the Water Cycle')} />
      </section>

      <section className="lesson-section">
        <h2 className="section-title">Importance of the Water Cycle</h2>
        <p className="section-content">
          The water cycle is fundamental to life on Earth and plays a vital role in maintaining our planet's ecosystems. It ensures the continuous replenishment of freshwater resources, which are essential for drinking, agriculture, and industrial use. The water cycle also supports diverse ecosystems by providing water to plants and animals, influences weather patterns and climate systems, and helps regulate Earth's temperature. Understanding and protecting the water cycle is crucial for sustainable water management and addressing climate change challenges.
        </p>
        <AIButton onClick={() => handleAIClick('Importance of the Water Cycle')} />
      </section>
    </div>
  )
}

export default LessonContent
