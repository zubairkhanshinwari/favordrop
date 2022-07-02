pipeline {
    agent any
    stages {
        stage('install') {
            steps {
                sh 'npm install'
            }
        }
        stage('cypress') {
            steps {
                sh 'npm cypress run'
            }
        }
    }
}