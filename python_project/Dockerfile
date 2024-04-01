# # Use the official Python image as a base
# FROM python:3.9

# # Set the working directory in the container
# WORKDIR /usr/src/app

# # Copy the Python script into the container
# COPY python_script.py .

# # Install SonarScanner
# RUN apt-get update && \
#     apt-get install -y openjdk-11-jdk && \
#     apt-get clean;

# RUN wget https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.6.2.2472-linux.zip && \
#     unzip sonar-scanner-cli-4.6.2.2472-linux.zip && \
#     mv sonar-scanner-4.6.2.2472-linux /opt/sonar-scanner && \
#     ln -s /opt/sonar-scanner/bin/sonar-scanner /usr/local/bin/sonar-scanner && \
#     rm sonar-scanner-cli-4.6.2.2472-linux.zip

# # Command to run the SonarScanner analysis
# CMD ["sonar-scanner", "-Dsonar.host.url=http://host.docker.internal:9000", "-Dsonar.projectKey=pythonintegration", "-Dsonar.sources=." ," -Dsonar.token=sqp_01a5afa255cfe5eb4fbd070ade0749be8746c255"]



# Use Python image as base
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

# # Command to run SonarScanner analysis
# RUN sonar-scanner \
#     -Dsonar.host.url=http://host.docker.internal:9000 \
#     -Dsonar.projectKey=sonarintegration_python \
#     -Dsonar.sources=.

# # Command to start the application
# CMD python python_script.py



# build method
# Build stage
# Use Python image as base
FROM python:3.9

# Set working directory
WORKDIR /usr/src/app

# Copy Python script into the container
COPY python_script.py .

# Update package repository and install OpenJDK 11
RUN apt-get update && \
    apt-get install -y default-jdk && \
    apt-get clean;

# Install Node.js and npm
RUN apt-get update && \
    apt-get install -y nodejs npm && \
    apt-get clean;

# Install SonarScanner
RUN npm install -g sonarqube-scanner

# Install Python dependencies
RUN pip install requests numpy pandas

# Command to run SonarScanner analysis
RUN sonar-scanner \
    -Dsonar.host.url=http://host.docker.internal:9000 \
    -Dsonar.projectKey=sonarintegration_python \
    -Dsonar.sources=.\
     -Dsonar.token=sqp_01a5afa255cfe5eb4fbd070ade0749be8746c255

# Command to start the application
CMD python python_script.py
