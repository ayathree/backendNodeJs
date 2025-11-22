const path = require('path');
console.log('Current file Info: \n')
console.log('filename: ', __filename);
console.log('Directory: ', __dirname);

console.log("\n"+"-".repeat(50) + "\n");
const filePath = "/Pooja/documents/nextlevel.pdf";
console.log('analyzing path :', filePath, "\n");

console.log('Directory :', path.dirname(filePath));
console.log('Basename: ', path.basename(filePath));
console.log('file extension: ',path.extname(filePath));
console.log('File Name: ', path.basename(filePath,path.extname(filePath)))

console.log("\n"+"-".repeat(50) + "\n");

const parsed = path.parse(filePath);
console.log('Parsed path: ', parsed);
console.log("\n"+"-".repeat(50) + "\n");

console.log('formated path: ', path.format(parsed));


