pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    environment {
        BASE_URL = credentials('BASE_URL')
        EMAIL = credentials('EMAIL')
        PASSWORD = credentials('PASSWORD')
        ROLE = credentials('ROLE')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps chromium'
            }
        }

        stage('Generate BDD Specs') {
            steps {
                bat 'npx bddgen'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test --project=chromium-auth --project=chromium-noauth'
            }
        }

        stage('Generate Allure Report') {
            steps {
                allure([
                    includeProperties: [],
                    jdk: '',
                    results: [[path: 'allure-results']]
                ])
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            echo 'Tests completed successfully!'
        }
        failure {
            echo 'Tests failed!'
        }
    }
}
