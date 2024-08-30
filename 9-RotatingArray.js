function rotateArray(arr, k) {
    k = k % arr.length;
    reverseArray(arr, 0, arr.length - 1);
    reverseArray(arr, 0, k - 1);
    reverseArray(arr, k, arr.length - 1);
    return arr;
}
function reverseArray(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
const array = [1, 2, 3, 4, 5];
const rotations = 2;
const rotatedArray = rotateArray(array, rotations);
console.log(rotatedArray); 
