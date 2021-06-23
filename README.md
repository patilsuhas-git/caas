## CAAS (Container as a Service)

### Setup
#### Prerequisites (Windows)
* Install GitBash (comes with git-scm) - https://git-scm.com/downloads
* Install Chocolatey - https://chocolatey.org/

#### Prerequisites (Linux)
* TODO...

#### Prerequisites (Common)
* Install npm - https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
* Install npx
```
npm install -g npx
```

#### Frontend
* To start frontend,
```bash
cd caas-frontend
npm start
```

### Conventions for repo
* Add story / ticket number in front of each commit. e.g.: CAAS-1: <Commit Message>
* Branch names - preferably start with feature/CAAS-<TICKET_NUMBER>
* Hotfix branches: hotfix/<issue-being-fixed>