# Spring Boot + Next.js Docker Project

This project demonstrates a full-stack application using Spring Boot for the backend, Next.js for the frontend, and PostgreSQL for the database, all containerized with Docker.

## Prerequisites

- Docker
- Docker Compose

## Project Structure

```
springBootProject/
├── backend/           # Spring Boot application
├── frontend/         # Next.js application
├── docker-compose.yml
└── README.md
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/mehmetalikenger/spring-test.git
cd spring-test
```

2. Build and start the containers:
```bash
docker-compose up --build
```

3. Access the applications:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8081
- PostgreSQL Database (testdb): localhost:5432

## Development

### Backend
- Built with Spring Boot
- Java 21
- PostgreSQL database
- JPA/Hibernate for data persistence

The project uses three containers:
1. PostgreSQL (port 5433)
2. Spring Boot Backend (port 8081)
3. Next.js Frontend (port 3000)

