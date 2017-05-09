/*
 *  test util module
 */


var util = require('util');
var val = util.format('%d and %s and %j', 123, "abc", {name:'node.js'});

console.log("val", val);
util.log(val);
