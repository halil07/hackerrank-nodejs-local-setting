'use strict';
require('dotenv').config()
var fs = require('fs');
var readStream = fs.createReadStream('./input.txt', 'utf8'); 
let inputArray = [];
let currentLine = 0;
console.clear()
const cleanup= (str) => {
    return str.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''))
    .map(str => str.trim());
}

readStream.on('data', (inputStdin) => {
    inputArray = cleanup(inputStdin);
}).on('end', (_) => {

    main();
});
function readLine() {
    return inputArray[currentLine++];
}

function solve(...args) {
    // Write your code here
    return args;
}


 
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    ws.write(solve(1,2,3) + '\n');

    ws.end();
}
