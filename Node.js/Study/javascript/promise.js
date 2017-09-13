// var async1 = function(param, callback) {callback(param*2);}
// var async2 = function(param, callback) {callback(param*2);}
// var async3 = function(param, callback) {callback(param*2);}

// async1(2, function(result){                 // result = 4
//     async2(result, function(result){           // 8
//         async3(result, function(result){       // 16
//             console.log(result);
//         });
//     });
// });

// var Promise = require('promise');


 
// function async1 (param){
//     return Promise.resolve(param*2);
// }
// function async2 (param){
//     return Promise.resolve(param*2);
// }
// function async3 (param){
//     return Promise.resolve(param*2);
// }

// async1(2)
// .then(async2)
// .then(async3)
// .then(function(result){
//     console.log(result);
// });


// function pAsync1(param){
//     return new Promise(function(resolve, reject){
//         resolve(param*2);
//     });
// }
// function pAsync2(param){
//     return new Promise(function(resolve, reject){
//         resolve(param*2);
//     });
// }
// function pAsync3(param){
//     return new Promise(function(resolve, reject){
//          resolve(param*2);
//     });
// }

// function myReject()
// {
//     console.log("Rejected");
// }

// pAsync1(2)
// .then(pAsync2)
// .then(pAsync3)
// .then(function(result){
//     console.log(result);
// })
// .catch(myReject);

// var promise1 = new Promise(function(resolve, reject){

//     setTimeout(function(){
//         console.log("1 complete");
//         resolve(1);
//     }, 100);
// });


// var promise2 = new Promise(function(resolve, reject){

//     setTimeout(function(){
//         console.log("2 complete");
//         resolve(2);
//     }, 100);
// });

// Promise
//     .all([promise1, promise2])
//     .then(function(result){
//         console.log(result);
//     });


// var _promise = new Promise( function(func){
//     setTimeout(func(new Date()), 1000);
// });

// _promise.then(console.log);
// _promise.then(console.log);
// _promise.then(console.log);


// var p1 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 500, "one");
// });
// var p2 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 100, "two");
// });

// Promise.race([p1, p2]).then(function(value) {
//   console.log(value); // "two"
// });


// function promise(func){
//     return new Promise(function(resolve,rejcet){
//         setTimeout(resolve(func(new Date()),1000));
//         });
//     }

// promise(console.log);
// promise(console.log);
// promise(console.log);
