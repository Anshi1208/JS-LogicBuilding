function isPalindrome(str) {
    let normalizedStr = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            normalizedStr += char;
        }
    }
    let reversedStr = '';
    for (let j = normalizedStr.length - 1; j >= 0; j--) {
        reversedStr += normalizedStr[j];
    }
    return normalizedStr === reversedStr;
}
console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello")); 
