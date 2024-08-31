function findDuplicates(arr) {
    const seen = {};
    const duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]]) {
            if (seen[arr[i]] === 1) {
                duplicates.push(arr[i]);
            }
            seen[arr[i]]++;
        } else {
            seen[arr[i]] = 1;
        }
    }

    return duplicates;
}

const array = [1, 2, 3, 4, 2, 5, 6, 3];
console.log(findDuplicates(array)); 
