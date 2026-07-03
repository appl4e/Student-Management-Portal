# Student Management Portal

A polished React + Vite student management prototype for a university department. The app lets you register students, record enrollments, submit grades, and keep everything saved locally in the browser.

## Features

- Student registration with validation
- Course enrollment tracking
- Grade submission and review
- Search and sorting in each data table
- Local persistence with browser storage
- Clean feature-based project structure

## Tech Stack

- React
- Vite
- React Router
- React Hook Form
- Yup
- CSS

## Project Structure

- src/App.jsx – app routing and provider setup
- src/common – shared layout, UI, hooks, constants, and storage helpers
- src/context – shared app state and actions
- src/features – feature-based modules for students, enrollments, grades, and home
- docs – requirements and implementation documentation

## Getting Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the development server

   ```bash
   npm run dev
   ```

3. Build for production
   ```bash
   npm run build
   ```

## Notes

- Data is stored in browser localStorage, so it remains available after refresh.
- Clearing localStorage will restore the seeded sample data.

## Documentation

See the docs folder for the project requirements and implementation notes:

- docs/requirements.md
- docs/implementation-blueprint.md
- docs/implementation-plan.md
