# End-2-End-and-Jasmine-UT-scaffold
Protractor end to end test and Karma js module unit test 

##Steps for end to end testing
* Install Protractor
```javascript
  npm i protractor -g
```
* Install selenium-standalone (网上的 webdriver-manager update 不好使)
```javascript
  npm i selenium-standalone -g
```
* webdriver-manager update
* webdriver-manager start
* Run protractor test/e2e/conf.js

##Steps for jasmine unit testing, supports es6/es7
* make sure you have chrome installed
* npm i -g karma-cli
* npm Install
* npm test