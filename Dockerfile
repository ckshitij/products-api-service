# Use official Node.js image with LTS version
FROM node:23-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies first (for caching)
COPY package*.json ./


EXPOSE 7008

RUN npm ci

# Copy source code
COPY . .

# Build TypeScript (make sure you have "build": "tsc" in package.json scripts)
CMD ["npm", "run" ,"prod"]
