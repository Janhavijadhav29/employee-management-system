# Employee Management System

Full-stack Employee Management System to add, view, update, delete and search employees by department.

## Tech Stack

- **Backend:** Java 17, Spring Boot 3, Spring Data JPA (Hibernate), Bean Validation
- **Database:** MySQL
- **Frontend:** React 18 (Vite), Axios
- **Build tools:** Maven, npm

## Features

- Full CRUD (Create, Read, Update, Delete) for Employee, Department
- Search with case-insensitive keyword matching
- Input validation with clear error messages
- Global exception handling with proper HTTP status codes
- Layered architecture: Controller → Service → Repository → Entity
- Responsive React UI with tabbed navigation

## Project Structure

```
employee-management-system/
├── backend/                 # Spring Boot REST API
│   ├── pom.xml
│   └── src/main/java/com/ems/
│       ├── config/          # CORS configuration
│       ├── controller/      # REST controllers
│       ├── entity/          # JPA entities
│       ├── exception/       # Custom exceptions & global handler
│       ├── repository/      # Spring Data JPA repositories
│       └── service/         # Business logic
└── frontend/                # React + Vite UI
    └── src/
        ├── components/
        ├── api.js
        └── App.jsx
```

## Getting Started

### Prerequisites

- Java 17+
- Maven 3.8+
- MySQL 8+
- Node.js 18+

### 1. Database

The database `ems_db` is created automatically. Update the MySQL username and password in
`backend/src/main/resources/application.properties` if they are not `root` / `root`.

### 2. Run the backend

```bash
cd backend
mvn spring-boot:run
```

The API runs on `http://localhost:8080`.

### 3. Run the frontend

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## REST API Endpoints

### Employee

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/employees` | Get all |
| GET | `/api/employees/{id}` | Get by ID |
| GET | `/api/employees/search?keyword=` | Search by department |
| POST | `/api/employees` | Create |
| PUT | `/api/employees/{id}` | Update |
| DELETE | `/api/employees/{id}` | Delete |

### Department

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/departments` | Get all |
| GET | `/api/departments/{id}` | Get by ID |
| GET | `/api/departments/search?keyword=` | Search by name |
| POST | `/api/departments` | Create |
| PUT | `/api/departments/{id}` | Update |
| DELETE | `/api/departments/{id}` | Delete |

## Author

Built as a Java Full Stack portfolio project.
