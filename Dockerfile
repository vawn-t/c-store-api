FROM node:20-alpine as base

WORKDIR /usr/src/app
COPY package*.json ./

FROM base as development
ENV NODE_ENV=development
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "run", "dev"]

FROM base as production
ENV NODE_ENV=production
RUN npm ci --only=production
COPY . .
RUN npm run build
CMD ["npm", "start"]
