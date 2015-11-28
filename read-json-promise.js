/**
 * Created by wanderley_panosso on 26/11/2015.
 */
"use strict";

const fs = require('fs');

function readFilePromise(filename, enc){
    return new Promise(function(fulfill, reject){
        fs.readFile(filename, enc, (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                fulfill(data);
            }
        });
    });
}

function readJSONPromise(filename){
    return readFilePromise(filename, 'utf8').then(JSON.parse);
}

let x = readJSONPromise('file1.json').then((data) => {
    console.log(data);
    return data;
}, (err) => {
    console.log('We Got an Error ', err);
});

setTimeout(() => {
   console.log(x);
}, 1000);
