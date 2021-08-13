pipeline {
	agent any
	stages {
		stage('Build') {
			steps {
				dir('frontend') {
					sh 'npm install'
					sh 'npm build'
				}
			}
		}
		stage('Docker build') {
			steps {
				sh 'docker build -t licipe_front:latest.'
			}
		}
		stage ('Docker run') {
			steps {
				sh 'docker run -d --name nginx -p 80:80 licipe_front:latest'
			}
		}
	}
	post {
		success {
			echo 'i am her'
		}
	}
}
