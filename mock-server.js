const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3001

// Middleware
app.use(cors())
app.use(express.json())

// Mock lessons data
const lessons = [
  {
    id: "water-cycle",
    title: "The Water Cycle",
    summary: "How water moves through Earth's systems."
  },
  {
    id: "photosynthesis",
    title: "Photosynthesis",
    summary: "How plants convert sunlight into energy."
  },
  {
    id: "ecosystem",
    title: "Ecosystem Dynamics",
    summary: "The complex interactions between living organisms and their environment."
  }
]

// Mock detailed lesson data
const lessonDetails = {
  "water-cycle": {
    id: "water-cycle",
    title: "The Water Cycle",
    sections: [
      {
        id: "intro",
        title: "Introduction",
        content: "The water cycle (although not always this accurate), also known as the hydrologic cycle, is a continuous process that circulates water throughout the Earth's atmosphere, land, and oceans. This natural system involves the movement of water through various stages: evaporation, condensation, precipitation, and collection. The water cycle is essential for maintaining life on Earth, as it ensures the distribution of freshwater resources and plays a crucial role in weather patterns and climate regulation."
      },
      {
        id: "stages",
        title: "Stages of the Water Cycle",
        content: [
          { 
            step: "Evaporation", 
            description: "Water from oceans, lakes, rivers, and other bodies of water is heated by the sun and changes from liquid to water vapor (gas), rising into the atmosphere." 
          },
          { 
            step: "Condensation", 
            description: "As water vapor rises higher into the atmosphere, it cools down and condenses back into tiny water droplets, forming clouds." 
          },
          { 
            step: "Precipitation", 
            description: "When water droplets in clouds become too heavy, they fall back to Earth as rain, snow, sleet, or hail." 
          },
          { 
            step: "Collection", 
            description: "The fallen water collects in oceans, lakes, rivers, and other bodies of water, or seeps into the ground as groundwater. The cycle then begins again as this water evaporates." 
          }
        ]
      },
      {
        id: "importance",
        title: "Importance of the Water Cycle",
        content: "The water cycle is fundamental to life on Earth and plays a vital role in maintaining our planet's ecosystems. It ensures the continuous replenishment of freshwater resources, which are essential for drinking, agriculture, and industrial use. The water cycle also supports diverse ecosystems by providing water to plants and animals, influences weather patterns and climate systems, and helps regulate Earth's temperature. Understanding and protecting the water cycle is crucial for sustainable water management and addressing climate change challenges."
      }
    ]
  }
}

// Routes
app.get('/api/lessons', (req, res) => {
  // Simulate a small delay
  setTimeout(() => {
    res.json(lessons)
  }, 500)
})

app.get('/api/lessons/:lessonId', (req, res) => {
  const { lessonId } = req.params
  
  // Simulate a small delay
  setTimeout(() => {
    const lessonDetail = lessonDetails[lessonId]
    
    if (!lessonDetail) {
      return res.status(404).json({ 
        error: 'Lesson not found',
        message: `No lesson found with id: ${lessonId}`
      })
    }
    
    res.json(lessonDetail)
  }, 500)
})

// POST /text endpoint for AI requests
app.post('/text', (req, res) => {
  const { userPrompt, slide_topic, slide_num } = req.body
  
  // Validate required fields
  if (!userPrompt) {
    return res.status(400).json({ 
      error: 'Bad Request',
      message: 'userPrompt is required'
    })
  }
  
  // Simulate AI processing delay
  setTimeout(() => {
    // Generate a mock AI response based on the prompt and context
    const mockResponse = generateMockAIResponse(userPrompt, slide_topic, slide_num)
    
    res.json({
      input: userPrompt,
      response: mockResponse
    })
  }, 1000) // 1 second delay to simulate AI processing
})

// Helper function to generate mock AI responses
function generateMockAIResponse(userPrompt, slideTopic, slideNum) {
  const responses = [
    `That's a great question about ${slideTopic || 'this topic'}! Let me explain this in more detail...`,
    `I understand you're asking about ${slideTopic || 'this subject'}. Here's what you should know...`,
    `Excellent question! Regarding ${slideTopic || 'this concept'}, here's additional information...`,
    `That's an important aspect of ${slideTopic || 'this topic'}. Let me provide more context...`
  ]
  
  const randomResponse = responses[Math.floor(Math.random() * responses.length)]
  const slideContext = slideNum ? ` (from slide ${slideNum})` : ''
  
  return `${randomResponse}\n\nThis is a mock AI response${slideContext}. In a real implementation, this would be generated by an AI service based on your prompt: "${userPrompt}"`
}

app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Mock API server is running' })
})

// Start server
app.listen(PORT, () => {
  console.log(`Mock API server running on http://localhost:${PORT}`)
  console.log(`Available endpoints:`)
  console.log(`  GET /api/lessons - Get all lessons`)
  console.log(`  GET /api/lessons/:lessonId - Get lesson details`)
  console.log(`  POST /text - AI text generation`)
  console.log(`  GET /health - Health check`)
})
