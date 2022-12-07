const puppeteer = require('puppeteer');

(async ()=>{
    console.log('Lanzamos el navegador');
    // const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js');

    console.log('Cerramos navegador ....');
    browser.close();
    console.log('Navegador cerrado');
})()