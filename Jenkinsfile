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
                git 'https://github.com/<your-username>/hello-devops-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "🔹 Building Docker image..."
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Run Container') {
            steps {
                echo "🔹 Running Docker container..."
                sh 'docker rm -f $CONTAINER_NAME || true'
                sh 'docker run -d -p 5000:5000 --name $CONTAINER_NAME $IMAGE_NAME'
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
