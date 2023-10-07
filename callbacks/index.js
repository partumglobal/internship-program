// const count = false

// let promise = new Promise( function(resolve, reject){

//   if (count) {
//     resolve('there is a count value');

//    } else {
//       reject('no count value')
//     }

// })

// console.log(promise)


// * * PROMISE CHAINING

// then() method syntax
// promiseObj.then(fulfilled, onReject)


// let promise = new Promise( function(resolve, reject){
//     resolve('resolved')

// });

// promise.then(function successVal(result){
//     console.log(result);

// }) .then(function successVal2(){
//     console.log('do something');
// })



// catch() method syntax
// let promise = new Promise( function(resolve, reject){
//     reject('rejected')

// });

// promise.then(function successVal(result){
//     console.log(result);

// }) .catch(function errorVal(result){
//     console.log(result);
// })

// finally() method syntax

// let promise = new Promise( function(resolve, reject){
//     reject('resolved')
// });

// promise.finally(
//     function greet(){
// console.log('code executed');
//     }
// )


// async/await

// async function name(param){
//     console.log("async function");
//     return Promise.resolve(1)
// }



// let promise = new Promise( function(resolve, reject){
//     setTimeout(function(){
//         resolve('promise resolved')}, 3000);
//     });


//     async function asyncFunc(){
//         // wait for promise to resolve
//         let result = await promise
//         console.log(result)
//          console.log('hello')
//     }

// asyncFunc()

// * * ERROR HANDLING

// let promise = new Promise( function(resolve, reject){
//     setTimeout(function(){
//         resolve('promise resolved')}, 3000);
//     });

// async function asyncFunc(){
//     try {
//         let result = await promise
//         console.log(result);

//     } catch(error) {
//         console.log(error);
//     }
// }




