const puppeteer = require('puppeteer');
const { USERNAME, PASSWORD } = require('./auth.js');
const twitter = require('./twitter.js');

(async () => {

  await twitter.initialize();
  // await twitter.login(USERNAME, PASSWORD);

  await twitter.getTweets('Udemy');

  debugger;

  // await twitter.end();
})();
