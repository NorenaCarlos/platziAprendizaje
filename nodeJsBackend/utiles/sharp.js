const sharp = require('sharp');
sharp('java.webp')
    .resize(50,100)
    .toFile('resized.png');