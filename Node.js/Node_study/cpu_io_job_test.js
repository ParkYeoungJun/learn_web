// CPU Job
console.log('the first CPU Bound working');
console.log('the second CPU Bound working');
console.log('the third CPU Bound working');

// I/O Job
console.log('the first CPU Bound working');

setTimeout(function(){
    console.log('the second CPU Bound working');
}, 3000);

console.log('the third CPU Bound working');