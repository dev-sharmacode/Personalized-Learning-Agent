<div align="center">

# Personalized Learning Agent

### AI-Powered Adaptive Learning Platform

An intelligent learning platform that personalizes education using AI-powered tutoring, adaptive learning paths, accessibility-first design, and real-time progress tracking.

**Developed for the Google & Kaggle AI – Agent for Good Challenge**

<br>

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite)
![Gemini](https://img.shields.io/badge/Google-Gemini%20API-4285F4?logo=google)
![License](https://img.shields.io/badge/License-MIT-success)

</div>

---

# Table of Contents

- Overview
- Features
- System Architecture
- Application Flow
- Technology Stack
- Demo
- Project Structure
- Installation
- Environment Variables
- Future Enhancements
- Documentation
- License

---

# Overview

Personalized Learning Agent is an AI-powered educational platform designed to provide every learner with a customized learning experience.

The application analyzes a learner's interests, learning style, and knowledge level to generate adaptive learning pathways, intelligent tutoring, personalized quizzes, and real-time learning analytics.

The platform supports both **Google Gemini AI** and an intelligent **Offline Mode**, ensuring uninterrupted learning regardless of internet availability.

---

# Features

### AI Tutor

- Google Gemini AI Integration
- Explain Like I'm 5 (ELI5)
- Deep Dive Explanations
- Socratic Learning
- Custom Analogies
- Offline AI Tutor

### Personalized Learning

- Adaptive Learning Roadmap
- Personalized Study Plans
- Dynamic Topic Recommendations
- Learning Style Detection
- Diagnostic Assessment

### Interactive Learning

- Study Room
- Flashcards
- Interactive Quizzes
- Instant Feedback
- Progress Tracking

### Analytics

- Learning Streak
- XP System
- Mastery Levels
- Weekly Progress
- Quiz Analytics
- Achievement Badges

### Accessibility

- Text-to-Speech
- High Contrast Mode
- Dyslexia-Friendly Font
- Adjustable Typography
- Keyboard Navigation

### Offline Support

- Local Storage
- Offline AI Responses
- Saved Progress
- Cached Learning Content

---

# System Architecture

```text
                          User
                            │
                            ▼
                  Personalized Onboarding
                            │
                            ▼
                 Diagnostic Assessment
                            │
                            ▼
                      Dashboard
                            │
                            ▼
               Adaptive Learning Roadmap
                            │
                            ▼
                      Study Room
          ┌─────────────────┴─────────────────┐
          │                                   │
          ▼                                   ▼
 Learning Content                     AI Tutor
          │                                   │
          └─────────────────┬─────────────────┘
                            ▼
                      Quiz Engine
                            ▼
                   Progress Tracker
                            ▼
                  Analytics Dashboard
                            ▼
                      Local Storage
```

---

# Application Flow

```text
Start

↓

Welcome Screen

↓

Create Profile

↓

Select Learning Style

↓

Choose Interests

↓

Diagnostic Assessment

↓

Dashboard

↓

Learning Roadmap

↓

Study Room

↓

Ask AI Tutor

↓

Complete Quiz

↓

Gain XP & Achievements

↓

Unlock New Topic

↓

View Analytics

↓

Continue Learning
```

---

# AI Workflow

```text
User Prompt
      │
      ▼
Prompt Builder
      │
      ▼
Google Gemini API
      │
      ▼
Response Formatter
      │
      ▼
Tutor Chat
      │
      ▼
Learning Progress Updated
```

### Offline Mode

```text
User Prompt
      │
      ▼
Offline Prompt Templates
      │
      ▼
Knowledge Base
      │
      ▼
AI Simulator
      │
      ▼
Tutor Chat
```

---

# Technology Stack

| Category | Technology |
|----------|------------|
| Frontend | React, Vite |
| Styling | CSS3 |
| AI | Google Gemini API |
| State Management | React Context API |
| Charts | Chart.js |
| Animations | Framer Motion |
| Storage | Local Storage |
| Accessibility | Web Speech API |
| Icons | Lucide React |

---

# Demo

## Landing Page

![Landing](docs/screenshots/landing.png)

---

## Dashboard

![Dashboard](docs/screenshots/dashboard.png)

---

## Personalized Learning Roadmap

![Roadmap](docs/screenshots/roadmap.png)

---

## Study Room

![Study Room](docs/screenshots/study-room.png)

---

## AI Tutor

![AI Tutor](docs/screenshots/tutor-chat.png)

---

## Quiz Module

![Quiz](docs/screenshots/quiz.png)

---

## Analytics Dashboard

![Analytics](docs/screenshots/analytics.png)

---

## Accessibility Settings

![Accessibility](docs/screenshots/accessibility.png)

---

# Project Structure

```text
personalized-learning-agent/

├── docs/
│   ├── assets/
│   ├── diagrams/
│   ├── screenshots/
│   ├── IMPLEMENTATION_PLAN.md
│   ├── SYSTEM_ARCHITECTURE.md
│   ├── USER_FLOW.md
│   └── API.md
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── README.md
├── package.json
├── vite.config.js
├── .env.example
└── LICENSE
```

---

# Installation

Clone the repository

```bash
git clone https://github.com/<your-username>/personalized-learning-agent.git
```

Navigate to the project

```bash
cd personalized-learning-agent
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Open the application

```
http://localhost:5173
```

---

# Environment Variables

Create a `.env` file in the project root.

```env
VITE_GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

If no API key is provided, the application automatically switches to **Offline Mode**.

---

# Future Enhancements

- Voice-Based AI Tutor
- AI Mind Maps
- AI Flashcard Generator
- PDF Learning Assistant
- OCR Document Reader
- Cloud Synchronization
- Mobile Application
- Teacher Dashboard
- Parent Dashboard
- Collaborative Learning

---

# Documentation

Complete documentation is available in the **docs** folder.

- Project Overview
- Implementation Plan
- System Architecture
- User Flow
- API Documentation
- Testing Strategy
- Deployment Guide
- Future Scope

---

# License

This project is licensed under the **MIT License**.

---

# Author

**Lakshay Sharma**

Bachelor of Technology  
Computer Science & Engineering (Cyber Security)

Google & Kaggle AI – Agent for Good Challenge
