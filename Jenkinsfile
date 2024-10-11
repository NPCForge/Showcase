pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/NPCForge/Showcase.git'
            }
        }
    }

    post {
        failure {
            echo "Deployment Failed"
        }
        success {
            echo "Deployment Success"
        }
    }
}
