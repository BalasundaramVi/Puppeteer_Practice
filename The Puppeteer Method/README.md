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



## Making Websites Load Faster


### Blocking Images from Rendering (or CSS)

```
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.setRequestInterception(true);

  page.on('request', (request) => {
    if (request.resourceType() === 'image' || request.resourceType() === 'stylesheet') {
      request.abort();
    } else {
      request.continue();
    }

  });

  await page.goto('https://learnscraping.com/scraping-instagram-profile-data-with-nodejs/');
  
  debugger;
})();
```


**Another Way to block images, stylesheets, and fonts**
```
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.setRequestInterception(true);

  page.on('request', (request) => {
    if (['image', 'stylesheet', 'font'].includes(request.resourceType())) {
      request.abort();
    } else {
      request.continue();
    }

  });

  await page.goto('https://amazon.com/');
  
  debugger;
})();
```

> Some websites are dependent on stylesheets so make sure you are only using this on valid pages.


## HTTP Basic Authentication

```
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.authenticate({ username: 'admin', password: '1256' })

  await page.goto('https://httpbin.org/basic-auth/admin/123456');

  debugger;
  // await browser.close();
})();
```


## Ignoring HTTPS / SSL Errors & Changing the ViewPort

*Default Viewport for Puppeteer is 800x600 pixels.*

```
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    ignoreHTTPSErrors: true,
    defaultViewport: {
      width: 1920,
      height: 1080,
    }
  });
  const page = await browser.newPage();

  await page.goto('https://google.com/');

  
  debugger;

})();
```


## Learning how to use Proxies

Proxy servers are usually used in order to minimize the chances of getting banned when doing more than usual requests to a certain website.

When specifying the proxy in the args, you must specify the IP address *and* the port.

```
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--proxy-server=128.199.154.45:8080']
  });
  const page = await browser.newPage();

  await page.goto('https://httpbin.org/ip');

  debugger;
})();
```


## Using Puppeteer to login to Instagram

```
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://instagram.com/');
  await page.waitFor('a[href="/accounts/login/?source=auth_switcher"]');
  await page.click('a[href="/accounts/login/?source=auth_switcher"]');
  await page.waitFor(500); // use this when inputs not working for any reason

  //use copy-selector when you can't find a direct id for element
  await page.waitFor('input[name="username"]');
  await page.type('input[name="username"]', 'abc123', {delay: 100});

  await page.waitFor('input[name="password"]');
  await page.type('input[name="password"]', 'xxxxxx', {delay: 100});

  debugger;
  // await browser.close();
})();
```