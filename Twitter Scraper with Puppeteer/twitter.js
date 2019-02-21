const puppeteer = require('puppeteer');

const BASE_URL = 'https://twitter.com';
const LOGIN_URL = 'https://twitter.com/login';
const USERNAME_URL = (username) => (`https://twitter.com/${username}`);

let browser = null;
let page = null;

const twitter = {

  initialize: async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();

    await page.goto(BASE_URL);
  },

  login: async (username, password) => {

    await page.goto(LOGIN_URL);

    await page.waitFor('form[class="t1-form clearfix signin js-signin"] input[name="session[username_or_email]"]');
    await page.type('form[class="t1-form clearfix signin js-signin"] input[name="session[username_or_email]"]', username, {delay: 50});
    await page.type('form[class="t1-form clearfix signin js-signin"] input[name="session[password]"]', password, {delay: 50});

    await page.click('button[type="submit"][class="submit EdgeButton EdgeButton--primary EdgeButtom--medium"]');
  },

  getTweets: async (username) => {
    let url = await page.url();

    if (url !== USERNAME_URL(username)) {
      await page.goto(USERNAME_URL(username));
    };

    await page.waitFor('#stream-items-id');

    let tweetsArray = await page.$$('#stream-items-id > li');
    let tweets = [];

    for (let tweetElement of tweetsArray) {
      let tweet = await tweetElement.$eval('div[class="js-tweet-text-container"]', element => element.innerText);
      tweets.push(tweet);
    };

    debugger;
  },

  end: async () => {
    await browser.close();
  },
};

module.exports = twitter;