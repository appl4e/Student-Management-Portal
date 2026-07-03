# Implementation Blueprint

## Proposed Stack

- React for the UI layer
- React Router for multi-page navigation
- CSS for layout and styling
- react-hook-form for form handling
- yup for schema-driven validation
- localStorage for persistence

## File Structure

- src/App.jsx: route composition and app shell wiring
- src/common/layout/MainLayout.jsx: shared navigation shell
- src/common/ui/DataTable.jsx: reusable searchable and sortable table
- src/common/hooks/useTableState.js: reusable table state logic
- src/common/constants/appConstants.js: route and storage constants
- src/common/utils/storage.js: persistence helpers
- src/context/AppContext.jsx: shared app data, actions, and toast state
- src/features/students/: student registration page and form components
- src/features/enrollments/: enrollment page and form components
- src/features/grades/: grade page and form components
- src/features/home/: dashboard home page
- docs/requirements.md: product requirements summary
- docs/implementation-plan.md: execution checklist and status

## Data Model

- Students: studentId, name, email, program, academicYear
- Enrollments: enrollmentId, studentId, courseId, enrollmentDate
- Grades: gradeId, studentId, courseId, grade, semester

## Persistence Strategy

- Store each collection under a dedicated localStorage key.
- On first load, write an in-app seed dataset if no stored data exists.
- On each add action, update the in-memory state and write it back to storage.

## Validation Rules

- Student ID must match the current admission-year prefix, a shift code of 1 or 2, and four trailing digits.
- Grade must be between 0 and 100.
- Required fields must be present before submission.

## UI Behavior

- The home page contains three dashboard cards that route to dedicated pages.
- Each module page contains a form and a rendered table.
- Tables support search and sorting.
- Success and validation feedback are shown through inline messages and a toast notification.
