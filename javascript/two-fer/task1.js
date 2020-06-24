// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    if (A.length === 0) {
        return 0;
    }

    let counter = 1;
    let value = A[0];

    while (value !== -1){
        counter++;
        value = A[value];
    }
    return counter;
}
