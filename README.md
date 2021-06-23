## CAAS (Container as a Service)

### Setup
#### Prerequisites (Windows)
* Install GitBash (comes with git-scm) - https://git-scm.com/downloads
* Install Chocolatey - https://chocolatey.org/
* For debugging port connectivity issues, install netcat - https://nmap.org/ncat/
* Install virtualbox (required for minikube)
  ```bash
  choco install virtualbox --params "/NoDesktopShortcut
  ```
* Now install the following projects:
  ```bash
  choco install gradle --version 6.0.1
  choco install kubernetes-cli --version 1.17.1
  choco install kubernetes-helm --version 3.3.0
  ```
* Install docker without virtualbox (untested) - https://docs.docker.com/docker-for-windows/install/

#### Prerequisites (Linux)
* TODO...

#### Prerequisites (Common)
* Install npm - https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
* Enable minikube addons if you haven't already
```
minikube addons enable storage-provisioner
minikube addons enable default-storageclass
```

#### Frontend
* To start frontend,
```bash
cd caas-frontend
# if you haven't already,
npm install
# for future runs - only start is needed
npm start
```
* To create a docker container for testing the kubernetes pod
```bash
docker build -t caas-frontend:latest .
```
* Process for loading the image in minikube
```
docker save caas-frontend:latest | (eval $(minikube docker-env --shell bash) && docker load)
```
* Now, install the helm chart to start the application up
```
cd caas-frontend/helm
helm install caas-frontend caas-frontend
```
* Kubectl port forward to access application
```
kubectl port-forward service/caas-frontend 3000
```

### Conventions for repo
* Add story / ticket number in front of each commit. e.g.: CAAS-1: <Commit Message>
* Branch names - preferably start with feature/CAAS-<TICKET_NUMBER>
* Hotfix branches: hotfix/<issue-being-fixed>