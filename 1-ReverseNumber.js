function reverseNumber(num) {
    let reversed = 0;
    
    while (num > 0) {
        const lastDigit = num % 10;   
        reversed = reversed * 10 + lastDigit; 
        num = Math.floor(num / 10);
    }
    
    return reversed;
}

console.log(reverseNumber(123)); 
