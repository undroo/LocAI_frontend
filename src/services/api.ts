export interface Lesson {
  id: string
  title: string
  summary: string
}

export interface LessonStep {
  step: string
  description: string
}

export interface LessonSection {
  id: string
  title: string
  content: string | LessonStep[]
}

export interface LessonDetail {
  id: string
  title: string
  sections: LessonSection[]
}

export interface AskRequest {
  userPrompt: string
  slide_topic?: string | null
  slide_num?: number | null
}

export interface AskResponse {
  input: string
  response: string
}

const API_BASE_URL = 'http://localhost:3001'

export const api = {
  async getLessons(): Promise<Lesson[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/lessons`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const lessons = await response.json()
      return lessons
    } catch (error) {
      console.error('Failed to fetch lessons:', error)
      throw error
    }
  },

  async getLessonDetail(lessonId: string): Promise<LessonDetail> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/lessons/${lessonId}`)
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(`Lesson not found: ${lessonId}`)
        }
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const lessonDetail = await response.json()
      return lessonDetail
    } catch (error) {
      console.error('Failed to fetch lesson detail:', error)
      throw error
    }
  },

  async askAI(request: AskRequest): Promise<AskResponse> {
    try {
      console.log('API: Making request to /text with:', request)
      const response = await fetch(`${API_BASE_URL}/text`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request)
      })
      
      console.log('API: Response status:', response.status)
      
      if (!response.ok) {
        if (response.status === 400) {
          const errorData = await response.json()
          throw new Error(errorData.message || 'Bad request')
        }
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const askResponse = await response.json()
      console.log('API: Response data:', askResponse)
      return askResponse
    } catch (error) {
      console.error('Failed to get AI response:', error)
      throw error
    }
  }
}