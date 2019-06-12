# anz-platform-test

This is a simple NodeJS app, along with a unit test and a few performance tests. 

There is a single GET /version returns a JSON values including the version# from the package.json, Last Commit SHA and a Hardcoded description. 

# Manual app startup & test execution

# Starting the app

To start the app running in a CI-ready state
$ NODE_ENV=test npm install && node helloworld.js

# Quality Control : 
    Running unit tests
        $ npm run unittests
        
# Running performance tests
    $ npm install -g artillery
    $ artillery run test/performance/performance.yml
        
# Security Checks 
    Open-source vulnerability scans
        The chain of open-source dependencies used in this application is scanned on every checkin by Whitesource Bolt.       Details for how to set this up for Github repos are at https://whitesource.atlassian.net/wiki/spaces/WD/pages/697696422/GitHub+Integration
        
        
# Automated CI pipeline execution

The app is hooked into its own Azure DevOps pipeline, and will run through all build/test steps automatically whenever a pull request is made to this repo.

Pipeline build & test config for this test is held in the file azure-pipelines.yml

At the end of the pipeline if all quality checks are passed, the app will be containerised as a single artefact encapsulating all the dependencies. 

# Version Control (Not included due to security reasons) 
New Docker images will be built at the end of each build pipeline and will be pushed to Docker Hub / Azure Container Registry. 
Tags with $(Build.BuildId) will be used which willl help to track the versions 





