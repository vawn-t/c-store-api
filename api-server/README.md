# C-Store API

A robust API service for the C-Store application, developed as a personal learning project to practice modern backend development techniques and best practices. This project serves as a practical implementation of RESTful API design, database integration, authentication, and containerization.

## Production Environment

- **URL:** [https://c-store-api.onrender.com](https://c-store-api.onrender.com)

## Tech Stack

- **Node.js:** 20.17.0
- **npm:** 11.3.0
- **Other technologies:**
  - Express.js (REST API framework)
  - Postgressql (Database)
  - JWT (Authentication)

## Getting Started

### Prerequisites

- Node.js (v20.17.0)
- npm (v11.3.0)
- Docker (for containerized setup)

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:vawn-t/c-store-api.git
   cd c-store-api/api-server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Running with Docker

For development:

```bash
# Start development containers
npm run docker:dev

# Build and start development containers
npm run docker:dev:build
```

For production:

```bash
# Start production containers
npm run docker:prod

# Build and start production containers
npm run docker:prod:build
```

To stop Docker containers:

```bash
npm run docker:down
```

To clean up Docker resources:

```bash
npm run docker:prune
```

### Production Build

```bash
npm run build
npm start
```

### Database Operations

```bash
# Run migrations in development
npm run db:dev:migrate

# Run migrations in production
npm run db:production:migrate

# Schema push to production
npm run db:production:push

# Seed database
npm run seed
```

## Testing Accounts

Use these credentials to test different user roles in the application:

| Role     | Username          | Password    |
| -------- | ----------------- | ----------- |
| Admin    | admin@example.com | password123 |
| Customer | user@example.com  | password123 |

## API Documentation

Comprehensive API documentation is available in the following locations:

- [Authentication APIs](/documents/apis/authentication/README.md)
- [Product APIs](/documents/apis/catalogue/README.md)
- [Order APIs](/documents/apis/shipping-method/README.md)
- [User Management APIs](/documents/apis/user/README.md)

## Author

[vawn](mailto:vantran99dn@gmail.com)
