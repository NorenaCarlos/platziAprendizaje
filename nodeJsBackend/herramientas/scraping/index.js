const puppeteer = require('puppeteer');

(async ()=>{
    console.log('Lanzamos el navegador');
    // const browser = await puppeteer.launch();
    // const browser = await puppeteer.launch({headless:true});
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    //await page.goto('https://es.wikipedia.org/wiki/Node.js');
    await page.goto('https://www.google.com');
    console.log('Cerramos navegador ....');
    browser.close();
    console.log('Navegador cerrado');
})()