"use strict";

const fs = require('fs');

function readFilePromise(filename, enc) {
    return new Promise(function (fulfill, reject) {
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

function async(makeGenerator) {
    return function () {
        var generator = makeGenerator.apply(this, arguments);

        function handle(result) {
            if (result.done) {
                return result.value;
            }
            if (result.value instanceof Promise) {
                return result.value.then(function (data) {
                    return handle(generator.next(data));
                }, function (err) {
                    return handle(generator.throw(err));
                });
            } else{
                return handle(generator.next(result.value));
            }
        }

        return handle(generator.next());
    };
}

const readJSONAsync = async(function* (filename) {
    try {
        let json = yield JSON.parse(yield readFilePromise(filename, 'utf8'));
        console.log(json);
    }catch (ex){
        console.log('We Got an Error ', ex);
    }
});

//Usage
readJSONAsync('file1.json');