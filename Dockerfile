FROM node:20-alpine as base

WORKDIR /usr/src/app
COPY package*.json ./

FROM base as development
ENV NODE_ENV=development
RUN npm install
COPY . .
CMD ["sh", "-c", "npm run db:dev:migrate && npm run dev"]

FROM base as production
ENV NODE_ENV=production
RUN npm ci --only=production
COPY . .
CMD ["sh", "-c", "npm run db:production:migrate && npm start"]
