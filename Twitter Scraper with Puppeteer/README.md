# Twitter Scraper with Puppeteer

### How to handle complicated log in forms such as twitter

```
const puppeteer = require('puppeteer');
const { USERNAME, PASSWORD } = require('./auth.js');

(async () => {
  const BASE_URL = 'https://twitter.com';
  const LOGIN_URL = 'https://twitter.com/login';

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(LOGIN_URL);

  await page.waitFor('form[class="t1-form clearfix signin js-signin"] input[name="session[username_or_email]"]');
  await page.type('form[class="t1-form clearfix signin js-signin"] input[name="session[username_or_email]"]', USERNAME, {delay: 50});
  await page.type('form[class="t1-form clearfix signin js-signin"] input[name="session[password]"]', PASSWORD, {delay: 50});

  await page.click('button[type="submit"][class="submit EdgeButton EdgeButton--primary EdgeButtom--medium"]');

  debugger;
})();
```

### Scraping User Tweets

```
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
```

The `page.$$` method is equivalent to document.querySelectorAll (as apposed to `page.$` being document.querySelector).

`tweetElement.$eval` takes the element selected by the query selector in the first argument and applies it to the function in the second argument. *Easier to get specific information this way.*

