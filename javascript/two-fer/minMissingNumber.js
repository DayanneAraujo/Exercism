const getValuesObject = (A) => {
    return A.reduce((result, item) => {
        result[item] = true;
        return result;
    }, {});
}

function Solution(A) {
    const hash = getValuesObject(A);
    for (let i = 1; i <= 1000000; i++) {
        if (!hash[i]) {
            return i;
        }
    }
}
axios
console.log(solution([1,2,3,4])); // 5
console.log(solution([- 1, -2,3,4]));  // 1
console.log(solution([1,2,4]));  // 3
console.log(solution([1])); // 2