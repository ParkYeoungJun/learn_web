/*
 *  testing process object
 */

// argv
process.argv.forEach( function (item, index){
  console.log(index + " : " + typeof (item) + " : ", item);

  if( item == '--exit')
  {
    console.log('test');
    var exitTime = Number(process.argv[index + 1]);
    setTimeout(
      function() {
        process.exit();
      }, exitTime);
  }
});

console.log('\u001b[31m', "process.version : " + process.version);
console.log('\u001b[1m', "process.versions : " + process.versions);
console.log('\u001b[0m', "process.argv : " + process.argv);
console.log('\u001b[41m', "process.env : " + process.env);
console.log('\u001b[0m', "process.arch : " + process.arch);
console.log('\u001b[33m', "process.platform : " + process.platform);
console.log('\u001b[0m', "process.memoryUsage() : " +process.memoryUsage());
console.log('\u001b[1m', "process.uptime() : " + process.uptime());
