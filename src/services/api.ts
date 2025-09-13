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
  }
}