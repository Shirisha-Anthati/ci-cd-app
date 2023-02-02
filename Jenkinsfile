pipeline {
    agent any
    tools {
        dockerTool 'Docker'
    }
    
    environment {
        DOCKERHUB_CREDS = credentials('docker-hub-creds')
        RAILWAY_TOKEN = credentials('railway-token')
    }
    
    stages {
        stage('checkout from git') {
            steps {
                script {
                    checkout scmGit(
                        branches: [[ name: 'main' ]],
                        userRemoteConfigs: [[ url: 'https://github.com/Shirisha-Anthati/ci-cd-app' ]]
                    )
                    echo 'Checkout complete'
                    sh 'env | sort'
                }
            }
        }
        
        stage('Build') {
            steps {
                script {
                    sh 'docker build -t anthatishirisha/ci-cd-app .'
                    echo 'Build complete'
                }
            }
        }
        
        stage ('Push to docker registry') {
            steps {
                script {
                    sh 'docker login -u $DOCKERHUB_CREDS_USR -p $DOCKERHUB_CREDS_PSW'
                    sh 'docker push anthatishirisha/ci-cd-app'
                }
            }
        }
        
        stage ('Deploy to Railway') {
            steps {
                script {
                    sh 'curl -fsSL https://railway.app/install.sh | sh'
                    sh 'RAILWAY_TOKEN=$RAILWAY_TOKEN railway up --detach'
                }
            }
        }
    }
    post {
        always {
            sh 'docker logout'
        }
    }
}