/**
 * Created by wanderley_panosso on 26/11/2015.
 */
"use strict";

const fs = require('fs');

function readJSONSync(filename){
    return JSON.parse(fs.readFileSync(filename, 'utf-8'));
}


//Usage
try{
    console.log(readJSONSync('file1.json'));
}catch(err){
    console.log('We Got an Error', err);
}