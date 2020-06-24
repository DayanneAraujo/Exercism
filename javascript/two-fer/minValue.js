// Return min missing element
// [] --> 1
// [1] --> 2
// [1, 2, 3] --> 4
// [1, 2, 4] --> 3


const solution = function(A){
    if (A.length === 0) {
        return 1;
    }
    for (let i=1; i < 1000; i++){
        if (!A.includes(i)){
            return i;
        }
    }
}

console.log("=========")
console.log(solution([]));
console.log(solution([0]));
console.log(solution([1]));
console.log(solution([1,2,4]));
