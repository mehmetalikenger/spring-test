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
- PostgreSQL Database: localhost:5433

## Features

- User management (create and list users)
- RESTful API with Spring Boot
- Modern UI with Next.js
- PostgreSQL database
- Docker containerization

## API Endpoints

- `GET /api/users/get` - Get all users
- `POST /api/users/create` - Create a new user

## Development

### Backend
- Built with Spring Boot
- Java 21
- PostgreSQL database
- JPA/Hibernate for data persistence

### Frontend
- Built with Next.js
- TypeScript
- Modern React features
- Responsive design

## Docker Configuration

The project uses three containers:
1. PostgreSQL (port 5433)
2. Spring Boot Backend (port 8081)
3. Next.js Frontend (port 3000)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 