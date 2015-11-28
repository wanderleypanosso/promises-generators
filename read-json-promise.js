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

readJSONPromise('file1.json').then((data) => {
    console.log(data);
}, (err) => {
    console.log('We Got an Error ', err);
});