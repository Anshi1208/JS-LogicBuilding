function flattenArray(arr) {
    return arr.reduce((acc, val) => 
        Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}
const nestedArray = [1, [2, [3, [4, 5]]]];
const flatArray = flattenArray(nestedArray);
console.log(flatArray); 
