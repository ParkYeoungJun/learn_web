/*
 *  test crypto module
 */

var crypto = require('crypto');
var key = 'my secret';
var input = 'password';

console.log("input : " + input);

var cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
var cip_output = cipher.final('base64');

console.log("cipher : " + cip_output);

var decipher = crypto.createDecipher('aes192', key);
decipher.update(cip_output, 'base64', 'utf8');
var decip_output = decipher.final('utf8');

console.log("decipher : " + decip_output);
