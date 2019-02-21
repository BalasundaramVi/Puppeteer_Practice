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