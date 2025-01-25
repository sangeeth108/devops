# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Update npm to the latest compatible version (10.x) and install dependencies
RUN npm install -g npm@10 && \
    npm install || npm install

# Copy app files
COPY . .

# Build Next.js app
RUN npm run build

# Expose frontend port (e.g., 3000)
EXPOSE 3000

# Start Next.js app
CMD ["npm", "run", "start"]
