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
