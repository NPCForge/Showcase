pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/NPCForge/Showcase.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t showcase .'
                }
            }
        }

        stage('Deploy Docker Container') {
            steps {
                script {
                    def containerExists = sh(
                        script: 'docker ps -a -q -f name=^showcase-prod$',
                        returnStdout: true
                    ).trim()

                    if (containerExists) {
                        sh 'docker stop showcase-prod || true'
                        sh 'docker rm showcase-prod || true'
                    }

                    sh 'docker run -d -p 3000:3000 --name showcase-prod showcase'
                }
            }
        }
    }

    post {
        failure {
            echo 'Deployment Failed'
        }
        success {
            echo 'Deployment Success'
        }
    }
}
