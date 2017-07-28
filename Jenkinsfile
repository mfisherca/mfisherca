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
        echo 'Begin ${build_name} install phase.'
        sh 'pip install j2cli[yaml] yamllint'
        echo 'End ${build_name} install phase.'
      }
    }
    stage('Pre-Build') {
      steps {
        parallel(
          "Source Test": {
            sh 'python j2-lint.py test.yaml.j2'
            
          },
          "Build": {
            sh 'j2 test.yaml.j2 > ${build_output}'
            
          }
        )
      }
    }
    stage('Build Test') {
      steps {
        sh 'yamllint ${build_output}'
      }
    }
    stage('Archive') {
      steps {
        archiveArtifacts(artifacts: '${build_output}', onlyIfSuccessful: true)
      }
    }
  }
  environment {
    build_name = 'Sprint Demo'
    build_output = 'test.yaml'
  }
}