/**
 * Created by wanderley_panosso on 26/11/2015.
 */
"use strict";

const fs = require('fs');

function readJSONCallback(filename, callback){
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err)
            callback(err);
        let success = false;
        try{
            data = JSON.parse(data);
            success = true;
        }catch (e){
            callback(e);
        }
        if (success)
            callback(null, data);
    });
}


//Usage
readJSONCallback('file1.json', (err, data) => {
    if (err)
        console.log('We Got an Error', err);
    else
        console.log(data);
});
