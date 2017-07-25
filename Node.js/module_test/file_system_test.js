/*
 *  test fs module
 */

var fs = require('fs');

console.log('readFileSync');
var text = fs.readFileSync('test.txt', 'utf8');
console.log(text);

console.log('readFile');
fs.readFile('test.txt', 'utf8', function(error, data){
    console.log(data);
});

console.log('writeFileSync');
fs.writeFileSync('test.txt', 'hi', 'utf8');
var text = fs.readFileSync('test.txt', 'utf8');
console.log(text);

console.log('writeFile');
fs.writeFile('test.txt', 'seonjin', 'utf8');
var text = fs.readFileSync('test.txt', 'utf8');
console.log(text);
