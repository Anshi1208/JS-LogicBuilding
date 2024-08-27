function maxSubArray(nums) {
    let maxSum = -Infinity; 
    let currentSum = 0;     
    for (let num of nums) {
        currentSum += num; 
        if (currentSum > maxSum) {
            maxSum = currentSum; 
        }
        if (currentSum < 0) {
            currentSum = 0; 
        }
    }
    return maxSum;
}
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
