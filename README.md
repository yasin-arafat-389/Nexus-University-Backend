# Nexus University Backend

## Project Overview

This project is a comprehensive academic management system designed to streamline the administration of various academic processes. The system manages students, faculty members, academic departments, courses, and academic semesters. It provides functionalities for creating, updating, and retrieving records, ensuring efficient management and access to essential academic information.

## Features

- **User Management**: Handle user creation, authentication, and authorization.
- **Student Management**: Manage student information, including personal details, guardian information, and academic records.
- **Faculty Management**: Manage faculty member details and their association with academic departments.
- **Academic Departments**: Organize and manage academic departments and their associated faculties.
- **Course Management**: Create and manage courses, including prerequisite courses and offered sections.
- **Semester Management**: Manage academic semesters, including registration and offered courses.

## Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Validation**: Zod
- **Authentication**: JWT
- **Other**: TypeScript, ES6+

## ER Diagram

![ER Diagram](./ER-Diagram.png)

## Setting Up and Using the Application

### Prerequisites

- Node.js (>=14.x)
- npm or yarn
- MongoDB

### Installation

1. **Clone the repository**:

   ```sh
   https://github.com/yasin-arafat-389/Nexus-University-Backend
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following variables:

   ```
   NODE_ENV=development
   PORT=5000
   DATABASE_URL=your mongodb URI
   DEFAULT_PASS=NexusUni1234
   SALT_ROUND=JWT salt round
   JWT_ACESS_TOKEN_SECRET=your JWT access token secret
   JWT_REFRESH_TOKEN_SECRET=your JWT refresh token secret
   ACCESS_TOKEN_EXPIRES_IN=1d
   ACCESS_TOKEN_EXPIRES_IN=7d
   RESET_PASS_UI_LINK= your reset password ui link
   SMTP_HOST= your smtp host
   SMTP_PORT= your smtp port
   SMTP_USER= your smtp username
   SMTP_PASS= your smtp password
   CLOUDINARY_API_SECRET= your cloudinary api secret
   CLOUDINARY_API_KEY= your cloudinary api key
   CLOUDINARY_CLOUD_NAME= your cloudinary cloud name
   SUPER_ADMIN_ID= your super admin ID
   SUPER_ADMIN_EMAIL= your super admin email
   SUPER_ADMIN_PASS= your super admin password

   ```

4. **Run the application**:
   ```sh
   npm run start:dev
   ```

### Usage

Once the server is running, you can use the following endpoints:

### API Endpoints

### Auth API

- **POST /api/v1/auth/login**: User login
- **POST /api/v1/auth/refresh-token**: Refresh authentication token
- **POST /api/v1/auth/forget-password**: Request a password reset
- **POST /api/v1/auth/reset-password**: Reset the password

### User API

- **POST /api/v1/create-student**: Create a new student
- **POST /api/v1/create-faculty-member**: Create a faculty member
- **POST /api/v1/create-admin**: Create an admin

### Student API

- **GET /api/v1/students**: Get all students
- **DELETE /api/v1/students/:studentId**: Delete a student by ID
- **PATCH /api/v1/students/:studentId**: Update student details by ID

### Admin API

- **GET /api/v1/admin/:id**: Get a single admin by ID
- **PUT /api/v1/admin/:id**: Update an admin by ID
- **DELETE /api/v1/admin/:id**: Delete an admin by ID
- **GET /api/v1/admin/**: Get all admins

### Faculty Member API

- **GET /api/v1/faculty-members/:id**: Get a single faculty member by ID
- **PUT /api/v1/faculty-members/:id**: Update a faculty member by ID
- **DELETE /api/v1/faculty-members/:id**: Delete a faculty member by ID
- **GET /api/v1/faculty-members**: Get all faculty members

### Semester Registration API

- **POST /api/v1/semester-registrations/create-semester-registration**: Create a new semester registration
- **GET /api/v1/semester-registrations/:id**: Get a single semester registration by ID
- **DELETE /api/v1/semester-registrations/:id**: Delete a semester registration by ID
- **PATCH /api/v1/semester-registrations/:id**: Update a semester registration by ID
- **GET /api/v1/semester-registrations**: Get all semester registrations

### Course API

- **POST /api/v1/courses/create-course**: Create a new course
- **GET /api/v1/courses/:id**: Get a single course by ID
- **PATCH /api/v1/courses/:id**: Update a course by ID
- **DELETE /api/v1/courses/:id**: Delete a course by ID
- **PUT /api/v1/courses/:courseId/assign-faculties**: Assign faculties to a course
- **DELETE /api/v1/courses/:courseId/remove-faculties**: Remove faculties from a course
- **GET /api/v1/courses/**: Get all courses

### Offered Course API

- **GET /api/v1/offered-courses**: Get all offered courses
- **GET /api/v1/offered-courses/:id**: Get a single offered course by ID
- **POST /api/v1/offered-courses/create-offered-course**: Create a new offered course
- **PATCH /api/v1/offered-courses/:id**: Update an offered course by ID
- **DELETE /api/v1/offered-courses/:id**: Delete an offered course by ID

### Enrolled Course API

- **POST /api/v1/enrolled-courses/create-enrolled-course**: Create an enrolled course (requires student authentication)
- **PATCH /api/v1/enrolled-courses/update-enrolled-course-marks**: Update marks for an enrolled course (requires faculty authentication)

### Academic Semester API

- **POST /api/v1/academic-semesters/create-academic-semester**: Create a new academic semester (requires admin authentication)
- **GET /api/v1/academic-semesters/**: Get all academic semesters

### Academic Faculty API

- **POST /api/v1/academic-faculties/create-academic-faculty**: Create a new academic faculty
- **GET /api/v1/academic-faculties/:facultyId**: Get a single academic faculty by ID
- **PATCH /api/v1/academic-faculties/:facultyId**: Update an academic faculty by ID
- **GET /api/v1/academic-faculties/**: Get all academic faculties

### Academic Department API

- **POST /api/v1/academic-departments/create-academic-department**: Create a new academic department
- **GET /api/v1/academic-departments/:departmentId**: Get a single academic department by ID
- **PATCH /api/v1/academic-departments/:departmentId**: Update an academic department by ID
- **GET /api/v1/academic-departments/**: Get all academic departments
