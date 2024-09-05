function maxSum(arr, k) {
    let maxSum = 0;
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum); 
    }
    return maxSum;
}
const arr = [1, 8, 30, -5, 20, 7];
const k = 3;
console.log("Maximum sum of", k, "consecutive elements is:", maxSum(arr, k)); 
