pipeline {
  agent {
    docker {
      image 'python:2.7'
      label 'docker'
    }
    
  }
  stages {
    stage('Install') {
      steps {
        echo 'Begin ${env.build_name} install phase.'
        sh 'pip install j2cli[yaml] yamllint'
        echo 'End ${env.build_name} install phase.'
      }
    }
    stage('Pre-Build') {
      steps {
        parallel(
          "Source Test": {
            sh 'python --version'
            
          },
          "Build": {
            sh 'ls -la'
          }
        )
      }
    }
    stage('Build Test') {
      steps {
        sh 'printenv'
      }
    }
    stage('Archive') {
      steps {
        archiveArtifacts(artifacts: '${env.build_output}', onlyIfSuccessful: true)
      }
    }
  }
  environment {
    build_name = 'Sprint Demo'
    build_output = 'test.yaml'
  }
}