# Puppeteer_Practice
Web Scraper

Headless browsers are simply browsers without the *head*, which means that there's no browser UI, no GUI of any sorts.

This is useful since when running tests, especially in a CI environment, there is nobody "watching" the visuals, so there is no need to have the extra overhead of the browser GUI.

One of the biggest reasons for using a headless browser/ carrying out headless testing is performance, since it lets you run tests more quickly in a real browser environment.

Headless browsers avoid *draw* operations, which handle rendering of the UI and their various pixels on the screen. With headless testing, we ignore those *draw* operations and the headless engines just run the same tests in the backgorund without a need for user interface.