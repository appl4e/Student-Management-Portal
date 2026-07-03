# Student Management System Requirements

## Goal

Create a polished React-based student management prototype for a university department that supports student registration, course enrollment, grade submission, local persistence, and clear navigation across dedicated routes.

## Functional Requirements

1. Student Registration
   - Provide a form to add a new student.
   - Required fields: Student ID, Name, Email, Program, Academic Year.
   - Display students in a searchable and sortable table.
2. Course Enrollment
   - Provide a form to enroll a student into a course.
   - Required fields: Enrollment ID, Student ID, Course ID, Enrollment Date.
   - Display enrollments in a searchable and sortable table.
3. Grade Submission
   - Provide a form to submit grades.
   - Required fields: Grade ID, Student ID, Course ID, Grade, Semester.
   - Validate that grade values are between 0 and 100.
   - Display grades in a searchable and sortable table.
4. Data Persistence
   - Use browser localStorage.
   - Load seed data on first run.
5. Validation
   - Use react-hook-form and yup.
   - Show validation errors close to the input fields.
6. Navigation and Structure
   - Provide a home dashboard with three cards linking to separate routes.
   - Present each form and its list on its own route.
7. Engineering Quality
   - Organize code into reusable components, hooks, constants, and utility modules.
   - Keep page-specific logic inside feature folders and shared infrastructure in the common layer.
   - Use app context to share data and actions between feature pages while keeping submit behavior local to each feature.

## Deliverable Notes

The prototype should be easy to run with Vite and should remain usable after refreshes and page navigation.
