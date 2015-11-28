/**
 * Created by wanderley_panosso on 26/11/2015.
 */
"use strict";

function* fibonacci() {
    let n1 = 0;
    let n2 = 1;

    yield n1;
    yield n2;

    while (true)
        yield (n2 = (n1 + (n1 = n2)));
}

function* take(iterator, n){
    let i = 0;
    for (let x of iterator){
        if (n === i++)
            return;
        yield x;
    }
}

let fib1 = fibonacci();
let fib2 = fibonacci();

for(let seq of take(fib1, 10))
    console.log(seq);

for(let seq of take(fib1, 10))
    console.log(seq);

for(let seq of take(fib2, 10))
    console.log(seq);

console.log(fib2.next().value);
console.log(fib2.next().value);
console.log(fib2.next().value);