pipeline {
    agent any

    environment {
        IMAGE_NAME = "hello-devops-app"
        CONTAINER_NAME = "hello-devops-container"
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo "🔹 Cloning the repository..."
                git branch: 'main', url: 'https://github.com/ayushranjan002/hello-devops-app-Task1.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "🐳 Building Docker image..."
                bat "docker build -t %IMAGE_NAME% ."
            }
        }

        stage('Run Container') {
            steps {
                echo "🚀 Running Docker container..."
                // Stop and remove old container if exists
                bat "docker ps -a -q --filter name=%CONTAINER_NAME% | findstr . && docker rm -f %CONTAINER_NAME% || echo No old container to remove."
                // Run new container
                bat "docker run -d -p 5000:5000 --name %CONTAINER_NAME% %IMAGE_NAME%"
            }
        }

        stage('Verify Deployment') {
            steps {
                echo "🔍 Verifying running containers..."
                bat "docker ps"
            }
        }
    }

    post {
        success {
            echo "✅ Build and Deployment Successful!"
        }
        failure {
            echo "❌ Build failed. Check logs."
        }
    }
}
