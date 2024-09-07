function isPalindrome(str) {
    const normalizedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = normalizedStr.length - 1;
    while (left < right) {
      if (normalizedStr[left] !== normalizedStr[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
  const testString = "A man, a plan, a canal, Panama";
  console.log(isPalindrome(testString));
  