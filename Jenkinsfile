pipeline {

    agent none

    stages {
        stage ('Run the app in docker') {
            agent {
                docker {image 'ousmane1999/kit-energy:latest'}
            }

            steps {
                sh 'docker ps'
            }
        }
    }
}