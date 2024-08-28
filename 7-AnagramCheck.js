function areAnagrams(str1, str2) {
    const normalize = (str) => {
        return str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    };
    const normalizedStr1 = normalize(str1);
    const normalizedStr2 = normalize(str2);
    if (normalizedStr1.length !== normalizedStr2.length) {
        return false;
    }
    const charCount = {};
    for (let char of normalizedStr1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of normalizedStr2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }
    return true;
}
console.log(areAnagrams("listen", "silent")); 
console.log(areAnagrams("rail safety", "fairy tales")); 
console.log(areAnagrams("hello", "world")); 
