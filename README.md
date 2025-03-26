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

## Troubleshooting

### Common Issues

1. **Port Conflicts**
   - If you get port conflicts, make sure no other services are using ports 3000, 8081, or 5433
   - You can modify the ports in docker-compose.yml if needed

2. **Database Connection Issues**
   - The PostgreSQL container might take a few seconds to start up
   - Make sure you're using the correct port (5433) when connecting from outside Docker
   - Inside Docker network, services use the container name (postgres) and default port (5432)

3. **Build Issues**
   - If you encounter build issues, try cleaning Docker:
   ```bash
   docker-compose down
   docker system prune -a
   docker-compose up --build
   ```

4. **Frontend-Backend Communication**
   - The frontend is configured to communicate with the backend at http://localhost:8081
   - Make sure both services are running and accessible

### Development Workflow

1. **Making Changes**
   - Frontend changes will be reflected immediately due to hot reloading
   - Backend changes require rebuilding the container:
   ```bash
   docker-compose up --build backend
   ```

2. **Viewing Logs**
   - All containers: `docker-compose logs -f`
   - Specific container: `docker-compose logs -f [service_name]`

3. **Database Access**
   - Connect to PostgreSQL using:
   ```bash
   docker exec -it postgres_db psql -U postgres -d testdb
   ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 