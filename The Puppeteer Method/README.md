# The Puppeteer Method

Setting headless to false means the whole browser will start up, and all actions will show up live.

Setting debugger to true will pause the page with the debugger open.

```
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    devtools: true,
  });
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.screenshot({ path: 'example.png' });

  // await browser.close();

  debugger;
})();
```

**Taking a simple screenshot of a google page after it loads:**

```
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.type('.gLFyf', 'Udemy Tutorials', {delay: 100}); // Types slower, like a user
  await page.keyboard.press('Enter');

  await page.waitForNavigation();
  
  await page.screenshot({ path: 'example.png' });


  await browser.close();

})();
```

### Generating PDFs

When generating PDF `headless` must be true.

```
const puppeteer = require('puppeteer');

(async () => {
  /* 1. Creating a PDF from the website */
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://learnscraping.com');
  await page.pdf({
    path: './page.pdf',
    format: 'A4',
  });
  await browser.close();
})();
```

### Getting the URL or Title of the Current Page

```
(async () => {
  /* 2. Getting the URL or the Title of the current page */
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://learnscraping.com');

  let title = await page.title();
  console.log(`Title of the page is ${title}`);

  let url = await page.url();
  console.log(`Url of the page is ${url}`);

  await browser.close();
})();
```

### Emulating a Phone

```
(async () => {
  /* 3. Emulate a phone */
  const devices = require('puppeteer/DeviceDescriptors');

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.emulate(devices['iPhone X']);
  await page.goto('https://learnscraping.com/');

  await browser.close();
})();
```