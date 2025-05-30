# Spring Boot + Next.js Docker Project

This project demonstrates a full-stack application using Spring Boot for the backend, Next.js for the frontend, and PostgreSQL for the database, all containerized with Docker.

## Prerequisites

- Docker
- Docker Compose

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

