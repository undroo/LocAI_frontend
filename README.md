# TeachAssist - Educational Platform

A modern educational platform with AI-powered lesson assistance, built with TypeScript and React.

## Features

- **Clean Lesson Interface**: Well-structured lesson content with clear sections
- **AI Integration**: Interactive "Ask AI for more details" buttons throughout lessons
- **Modern Design**: Clean, minimalist UI matching the TeachAssist brand
- **TypeScript**: Full type safety and better development experience
- **Responsive Layout**: Works on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Top navigation header
│   ├── LessonContent.tsx   # Main lesson content area
│   └── AIButton.tsx        # Interactive AI assistance button
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles
```

## Features Overview

### Header
- TeachAssist logo with book icon
- Navigation menu (Dashboard, Lessons, Resources, Community)
- Notification bell icon
- User profile picture

### Lesson Content
- Lesson title and structured content
- Introduction, main content sections, and importance
- Numbered lists for step-by-step processes
- Clean, readable typography

### AI Integration
- Interactive "Ask AI for more details" buttons
- Contextual AI assistance for each section
- Hover effects and smooth transitions
- Ready for integration with AI services

## Sample Lesson: The Water Cycle

The platform includes a complete lesson about the water cycle with:
- Introduction to the hydrologic cycle
- Four detailed stages (Evaporation, Condensation, Precipitation, Collection)
- Importance and environmental impact
- AI assistance buttons for each section

## Customization

The application is built with modular components that can be easily customized:

- Update lesson content in `LessonContent.tsx`
- Modify the AI button behavior in `AIButton.tsx`
- Customize styling in the respective CSS files
- Add new lessons by extending the existing structure

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Modern styling with flexbox and transitions
