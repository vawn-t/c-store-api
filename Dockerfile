FROM node:20-slim

WORKDIR /usr/src/app

COPY package*.json ./

# Install dependencies needed for bcrypt and other native modules
RUN apt-get update && apt-get install -y build-essential python3

# Use only one package installation method (ci is preferred for reproducible builds)
RUN npm ci

# Copy all source files
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Make sure TypeScript is compiled correctly
RUN npx tsc && npx tsc-alias

# Verify build output exists
RUN ls -la dist/

EXPOSE 3000

# Use start instead of docker:start to simplify troubleshooting
CMD ["node", "dist/server.js"]
