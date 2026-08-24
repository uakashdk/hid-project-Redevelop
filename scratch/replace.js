const fs = require('fs');

const mediaPath = 'd:\\Samagra Jaiswal\\HID\\src\\routes\\Media.jsx';
let mediaContent = fs.readFileSync(mediaPath, 'utf8');
mediaContent = mediaContent.replace(/\/image\//gi, '/Images/');
fs.writeFileSync(mediaPath, mediaContent, 'utf8');

const careerPath = 'd:\\Samagra Jaiswal\\HID\\src\\routes\\Career.jsx';
let careerContent = fs.readFileSync(careerPath, 'utf8');
careerContent = careerContent.replace(/\/image\//gi, '/Images/');
fs.writeFileSync(careerPath, careerContent, 'utf8');
