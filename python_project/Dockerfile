# Use SonarScanner CLI image as base
FROM sonarsource/sonar-scanner-cli

# Set environment variables
ENV SONAR_HOST_URL="http://host.docker.internal:9000"
ENV SONAR_PROJECT_KEY="sonarintegration_python"
ENV SONAR_TOKEN="sqp_fae34aa3ea8180df4b4239f0d8ea2bad1d44ca46"

# Set working directory
WORKDIR /usr/src

# Copy project files into the container
COPY . /usr/src

# Command to run SonarScanner analysis
CMD sonar-scanner



















# # Use Python image as base
# FROM python:3.9

# # Set working directory
# WORKDIR /usr/src/app

# # Copy Python script into the container
# COPY python_script.py .

# # Update package repository and install OpenJDK 11
# RUN apt-get update && \
#     apt-get install -y default-jdk && \
#     apt-get clean;

# # Install Node.js and npm
# RUN apt-get update && \
#     apt-get install -y nodejs npm && \
#     apt-get clean;

# # Install SonarScanner
# RUN npm install -g sonarqube-scanner

# # Install Python dependencies
# RUN pip install requests numpy pandas

# # Command to run SonarScanner analysis
# RUN sonar-scanner \
#     -Dsonar.host.url=http://host.docker.internal:9000 \
#     -Dsonar.projectKey=sonarintegration_python \
#     -Dsonar.sources=.\
#      -Dsonar.token=sqp_fae34aa3ea8180df4b4239f0d8ea2bad1d44ca46

# # Command to start the application
# CMD python python_script.py
