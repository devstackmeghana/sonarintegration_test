# Use Node.js image as base
FROM node:latest

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Expose port 3010
EXPOSE 3010

# Command to start the application
CMD node index.js























# # Use Node.js image as base
# FROM node:latest

# # Set working directory
# WORKDIR /usr/src/app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy application files
# COPY . .

# # Expose port 3010
# EXPOSE 3010

# # Install SonarScanner
# RUN npm install -g sonarqube-scanner

# # Command to run SonarScanner analysis
# RUN   sonar-scanner \
#  -Dsonar.host.url=http://host.docker.internal:9000 \
#     -Dsonar.projectKey=sonarintegration_node \
#     -Dsonar.sources=.\
#     -Dsonar.token=sqp_3d1b655c8e7f26ca4e9f9fcee3a2085cef11363f
#     # for testing --network
#    #   -Dsonar.token=sqp_b236bb1be1095409fabcb0e53b0c1b2ec2105fd3
# # Command to start the application
# CMD node index.js
