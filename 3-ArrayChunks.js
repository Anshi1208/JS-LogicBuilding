function chunkArray(arr, size) {
    const result = [];
    let chunk = [];
    for (let i = 0; i < arr.length; i++) {
        chunk.push(arr[i]);
        if (chunk.length === size) {
            result.push(chunk);
            chunk = [];
        }
    }
    if (chunk.length > 0) {
        result.push(chunk);
    }
    return result;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
