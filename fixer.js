const fs = require('fs');
const data = fs.readFileSync('bootstrap-iso.css', { encoding: 'utf8', flag: 'r' });
let result = data.replace(/.bootstrap-iso :root/g, ':root');
result = result.replace(/.bootstrap-iso \[data-bs-theme=light\]/g, '[data-bs-theme=light]');
result = result.replace(/.bootstrap-iso \[data-bs-theme=dark\]/g, '[data-bs-theme=light]');
result = result.replace(/.bootstrap-iso body/g, '.bootstrap-iso');
fs.writeFileSync('bootstrap-iso.css', result);