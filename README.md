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

![ER Diagram](./erdiagram.png)

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

### User API

- **POST /api/users**: Create a new user
- **GET /api/users/:id**: Get user details by ID
- **PUT /api/users/:id**: Update user details
- **DELETE /api/users/:id**: Delete a user
