const puppeteer = require('puppeteer');
const { USERNAME, PASSWORD } = require('./auth.js');
const twitter = require('./twitter.js');

(async () => {

  await twitter.initialize();
  await twitter.login(USERNAME, PASSWORD);

  debugger;

  // await twitter.end();
})();
