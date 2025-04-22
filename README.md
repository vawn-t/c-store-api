# C-Store API

## 🚀 Overview

C-Store API serves as the backend infrastructure for a convenience store management system, providing endpoints for product management, order processing, user authentication, and inventory control. Built with performance, security, and scalability in mind.

## 💻 Technology Stack

- **Runtime Environment**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT-based token authentication
- **Containerization**: Docker

## 📋 Prerequisites

- Node.js v20+
- PostgreSQL v16+
- Docker (optional for containerized deployment)

## ⚙️ Installation & Setup

Check out [this guide](/api-server/README.md)

## 📚 API Documentation

For detailed information about available endpoints and request/response formats, refer to the documentation in the `/documents/apis/` directory.

## 📁 Directory Structure

```
c-store-api/
  ├── documents/                      # Comprehensive API documentation
  │     ├── apis/                     # Endpoint-specific documentation
  │     │     ├── authentication/     # Auth-related API docs
  │     │     ├── catalogue/          # Product management API docs
  │     │     ├── shipping-method/    # Shipping and delivery API docs
  │     │     └── user/               # User management API docs
  │     ├── app-flow/                 # Application flow diagrams
  │     ├── entity-relationship/      # Database ER diagrams
  │     └── sequences/                # Sequence diagrams for key processes
  │
  └── api-server/                     # Server codebase
        ├── prisma/                   # Database ORM configuration
        │     ├── schema.prisma       # Prisma schema definition
        │     └── seed.ts             # Database seeding script
        │
        └── src/                      # Source code
              ├── controllers/        # Request handlers and response formatters
              ├── helper/             # Helper utilities and common functions
              ├── middlewares/        # Express middlewares (auth, validation, etc.)
              ├── routes/             # API route definitions
              ├── services/           # Business logic implementation
              ├── utils/              # Utility functions and helpers
              └── validator.ts        # Request validation functions
```
## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
