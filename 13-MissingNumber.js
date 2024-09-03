function findMissingNumbers(arr, N) {
    let missingNumbers = [];
    let numberSet = new Set(arr); 
    for (let i = 1; i <= N; i++) {
        if (!numberSet.has(i)) {
            missingNumbers.push(i);
        }
    }
    return missingNumbers;
}
console.log(findMissingNumbers([1, 2, 4, 6, 7, 9], 9)); 
console.log(findMissingNumbers([2, 3, 7, 4, 9], 10));   
