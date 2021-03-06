pipeline {
    agent any
    options {
        parallelsAlwaysFailFast()
        timeout(time: 30, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '3'))
    }

    stages {
        stage('npm build') {
            steps {
                nodejs('nodejs') {
                    sh 'npm install --unsafe-perm=true --allow-root'
                    sh 'npm run deploy:build'
                }
            }
        }
        
        stage('docker build') {
            environment {
                dockerRegistry = 'img.adp-custom.cn'
                harborCred = credentials('harbor')
                imgName = "${dockerRegistry}/internal/${JOB_BASE_NAME}:${BUILD_NUMBER}"
            }

            steps {
                sh "docker login ${dockerRegistry} -u ${harborCred_USR} -p ${harborCred_PSW}"
                sh "docker build -t ${imgName} ."
                sh "docker push ${imgName}"
            }
        }

        stage('Deployment') {
            steps {
                //sh "/usr/local/bin/helm3 upgrade --kubeconfig /root/.kube/config -i -n internal /data/scripts/configs/element-chart --set itemName=element --set namespace=internal"
                sh "/usr/local/bin/helm3 upgrade element --kubeconfig /root/.kube/config -i -n internal /data/scripts/configs/element-chart --set itemName=${JOB_BASE_NAME} --set namespace=internal --set image.version=${BUILD_NUMBER}"
            }
        }
    }
}