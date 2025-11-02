pipeline {
    agent any

    environment {
        IMAGE_NAME = "hello-devops-app"
        CONTAINER_NAME = "hello-devops-container"
        HOST_PORT = "8085"
        APP_PORT = "5000"
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo "Cloning the repository..."
                git branch: 'main', url: 'https://github.com/ayushranjan002/hello-devops-app-Task1.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                bat "docker build -t %IMAGE_NAME% ."
            }
        }

        stage('Run Container') {
            steps {
                echo "Running Docker container..."
                bat """
                    docker ps -a -q --filter name=%CONTAINER_NAME% | findstr . && docker rm -f %CONTAINER_NAME% || echo No old container to remove.
                    docker run -d -p %HOST_PORT%:%APP_PORT% --name %CONTAINER_NAME% %IMAGE_NAME%
                """
            }
        }

        stage('Verify Deployment') {
            steps {
                echo "Verifying running containers..."
                bat """
                    docker ps
                    echo Checking logs for %CONTAINER_NAME%
                    docker logs %CONTAINER_NAME%
                """
            }
        }
    }

    post {
        success {
            echo "Build and Deployment Successful!"
            echo "Visit your app at: http://localhost:8085"
        }
        failure {
            echo "Build failed. Check logs for details."
        }
    }
}
