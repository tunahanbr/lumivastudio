# Use the official Node.js image with Node.js version 22
FROM node:22 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project into the container
COPY . .

# Build the Vite project
RUN npm run build

# Use a lighter image for production (for serving the build files)
FROM nginx:alpine

# Copy the build output to the Nginx server directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for the container
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
