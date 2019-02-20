# More Info & Concepts

## Why & When to Choose Scraping

### Why?

1. It can be more convenient compared to other options
2. You could get more data out than their api is offering.
3. You do not have an official api.
4. You have a very bad official api to work with.
5. You want a challenge / you want to learn.

### When?

- You have checked the website's terms of service and it does not specifically say that you should not scrape it.
- When you get permission from the owner of the website that you are trying to scrape.

> Respect the site and the company. Definitely check the terms of service page.


### Helpful Advice

- Respect other people's / company's website's data.
- Use official API's where possible.
- Don't spam their website with disrespectful amount of requests.
- If you plan to monetize, sell scraped data, go to production with your code in a serious manner: *seek legal advice to make sure that what you are doing is completely legal*.


## The biggest "problem" with scraping


### Maintenance & Stability

- You need to keep an eye on the website tha tyou are building a scraper for
- The website can change and then depending on the change, you need to adapt it to your code.




### Running with Terminal / CMD & Basics on VSCode Debugger

An integrated debugger can save a lot of time. Using VSCode debugger is pretty easy.



## Request Method with Request Library


### What is the Request npm library

- It is the easiest way of sending HTTP(s) requests.
- You can send any type of requests manually (GET, POST, PUT, DELETE... etc)
- Supports HTTP Basic Auth, Gzip, multipart-data post, custom headers, file streaming... and a lot more


### Pro's & Con's

**PRO** - you can control each request and every parameter<br>
**PRO** - very fast (compared to a headless browser)<br>

<hr>

**CON** - It can get messy if not done right<br>
**CON** - You could potentially write more code (compared to a headless browser)<br>


Do not go down the request route if you have a lot of requests to simulate.

Using a headless browser would be best on automatically sending AJAX requests with a lot of parameters.


### When to use the request method:

- Few examples of websites that should be scraped with the request method:
  - it is API based
  - it has *basic* authentication
  - it is NOT dynamically rendered
  - downloading files
  - it has simple html content



## The Browser Automation Method

### What is the browser automation method?

Controlling a browser with code instead of human live interaction can be called **browser automation**.


### Pro's & Con's

**PRO** - Easy to understand (beginner friendly)<br>
**PRO** - Easy to write code<br>
**PRO** - Less code than the Request method<br>

<hr>

**CON** - different limitations on the browser engine you use<br>
**CON** - can be slower than the Request method<br>

Check the documentation to make sure it has the functionality you need.


### When to use the browser automation method

Once again, either method can be used but it is often better to use one method of another. These are *opinions* not rules.

- When network resources / bandwidth don't matter
- When the website is rendered dynamically
- When being super fast does not matter
- When you want to build something fast and easily
- WHen you don't want to deal that much with network inspection

> The request method will only get the html for a specific site, it will not load external files, libraries, or references. However, the browser automation method will.


### Best libraries to use

- Puppeteer (by Google)
- NightmareJS (based on Electron browser)
  - does not support multiple tab handling at the same time


### Extra Info

- You can disable the headless browser and you can actually inspect what happens with it live
- You can simulate almost every action a human can do in a browser
- You can screenshot pages / create pdf's
- You can manipulate the DOM, inject code, and of course, scrape!


