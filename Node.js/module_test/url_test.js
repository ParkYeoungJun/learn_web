/*
 *  test url module
 */

var url = require('url');

var parse_url_false = url.parse("http://www.nodejs.org/api/url.html");
var urlStr_false = url.format(parse_url_false);

console.log("\nparse false\n");
console.log(parse_url_false);

console.log("\nformat false\n");
console.log(urlStr_false);

var parse_url_true = url.parse("http://www.nodejs.org/api/url.html", true, true);
var urlStr_true = url.format(parse_url_true);

console.log("\nparse true\n");
console.log(parse_url_true);

console.log("\nformat true\n");
console.log(urlStr_true);

console.log("\nconsole resolve\n");
console.log("url.resolve('/1/2/3/4', '5') : " + url.resolve('/1/2/3/4', '5'));
console.log("url.resolve('/1/2/3/4/', '5') : " + url.resolve('/1/2/3/4/', '5'));
console.log("url.resolve('/one/two/three/four', 'four') : " + url.resolve('/one/two/three/four', 'four'));
console.log("url.resolve('http://example.com/', '/one') : " + url.resolve('http://example.com/', '/one'));
console.log("url.resolve('/example/com/one/add', '/two/ddd') : " + url.resolve('/example/com/one/add', '/two/ddd'));
console.log("url.resolve('http://example.com/one/ddd', '/two/ddd') : " + url.resolve('http://example.com/one/ddd', '/two/ddd'));
