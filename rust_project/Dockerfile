# Use SonarScanner CLI image as base
FROM sonarsource/sonar-scanner-cli

# Set environment variables
ENV SONAR_HOST_URL="http://host.docker.internal:9000"
ENV SONAR_PROJECT_KEY="sonarintegration_rust"
ENV SONAR_TOKEN="sqp_2c11e89d757e14ec1625f1636afd80558af2fc3c"

# Set working directory
WORKDIR /usr/src

# Copy project files into the container
COPY . /usr/src

# Command to run SonarScanner analysis
CMD sonar-scanner
