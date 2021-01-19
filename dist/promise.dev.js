"use strict";

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* let allGood = true;

// Define a Promise
// A promise can be in one of three states:
// -Pending    | hasn t settled to a value yet
// -Fullfilled | settled successfully (resolve())
// -Rejected   | settled unsuccessfully (reject())
const fetchSomeData = new Promise ((resolve, reject) => {
    if(!allGood) {
        reject('error fetching data!')
    } else {
        resolve({
            id: 1,
            message: 'nice work'
        })
    }
})

// Consuming a Promise
fetchSomeData.then(Data => console.log('then' + Data)).catch(error => console.log('catch' + error));
 */

/* 
// Let`s create several functions that return Promises
// and look at Promise chaining 

// Simulate fetching some data
let fetchData = function(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetching Data Complete');
            resolve({id: 1, message: 'Nice Work'});
        },2000)
    });
};

// Parse the data
let parseData = function(data) {
    return new Promise((resolve, reject) => {
        foo= bar;
        setTimeout(() => {
            let parseOutput = `Parsed the Data for id: ${data} with message: ${data.message}`;
            resolve({parsed: parseOutput});
        },2000)
    });
};
 
// Echo the data
let EchoData = function(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data.parsed);
        },2000)
    });
};

fetchData().then(parseData).then(EchoData).catch(error => console.log(`error = ${error}`)); */

/* // Promise.all is useful for aggregating the results of multiple promises, 
// return a single Promise that fulfills when all of the Promises passed to it have been fulfilled.
// It rejects with the reason of the first promise that rejects or with the error caught by the first argument, if that argument has caught an error inside it using try/catch/throw blocks.
const p1 = new Promise ((resolve, reject) => {
    setTimeout (resolve, 3000, 'Hello');
})

const p2 = new Promise ((resolve, reject) => {
    setTimeout (resolve, 2000, 'World');
})

const p3 = 1000;

Promise.all([p1,p2,p3]).then((result => console.log(result))).catch(error => {
    console.log('Promise.all rejected this error', error)
})
// Promise.race return a promise that fullfils or rejects as soon as one of the Promises in an iterable fullfils or rejects, with the value or reason from that promise. 
Promise.race([p1,p2,p3]).then((result => console.log(result))).catch(error => {
    console.log('Promise.all rejected this error', error)
}) */
var url = "https://api.themoviedb.org/3";

function isStatus200(res) {
  console.log('checking the status...');

  if (res.status === 200) {
    return res;
  } else {
    var err = new Error(res.statusText);
    err.response = res;
    throw err;
  }
}

function getPostJson(res) {
  console.log('Getting Json..');
  return res.json();
}

function getTitle(post) {
  console.log('Getting Title..');
  return post.title;
}

function echoTitle(title) {
  console.log(title);
}