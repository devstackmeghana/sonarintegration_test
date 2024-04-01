# Use SonarScanner CLI image as base
FROM sonarsource/sonar-scanner-cli

# Set environment variables
ENV SONAR_HOST_URL="http://host.docker.internal:9000"
ENV SONAR_PROJECT_KEY="sonarintegration_node"
ENV SONAR_TOKEN="sqp_3d1b655c8e7f26ca4e9f9fcee3a2085cef11363f"

# Set working directory
WORKDIR /usr/src

# Copy project files into the container
COPY . /usr/src

# Command to run SonarScanner analysis
CMD sonar-scanner






















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
