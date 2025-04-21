FROM node:20-alpine as base

# Set working directory
WORKDIR /usr/src/app

# Copy package files for dependency installation
COPY package*.json ./

# Development stage
FROM base as development
ENV NODE_ENV=development
RUN npm install
COPY . .
CMD ["sh", "-c", "npm run db:dev:migrate && npm run dev"]

# Build stage
FROM base as build
RUN npm install
COPY . .
RUN npx prisma generate && npm run build

# Production stage
FROM node:20-alpine as production
WORKDIR /usr/src/app
ENV NODE_ENV=production

# Install production dependencies only
COPY package*.json ./
RUN npm install --omit=dev

# Copy built files and required Prisma artifacts
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules/.prisma ./node_modules/.prisma
COPY prisma ./prisma

# Start the application
CMD ["sh", "-c", "npm run db:production:migrate && npm start"]
