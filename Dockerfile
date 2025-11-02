# Use official Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy all remaining files
COPY . .

# Expose app port
EXPOSE 5000

# Start the app
CMD ["node", "server.js"]
