# Use an official Node.js runtime as a parent image
FROM node:16.16.0

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build --configuration=production

# Expose port 8080 to the outside world
EXPOSE 8080

# Start the application
CMD [ "npm", "start" ]
