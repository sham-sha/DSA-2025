function   palandrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // Check if the string is equal to its reverse
    return str === str.split('').reverse().join('');
}

// Example usage:
console.log(palandrome("Was it a car or a cat I saw?")); // true
console.log(palandrome("Hello, World!")); // false
console.log(palandrome("Madam, in Eden, I'm Adam.")); // true
console.log(palandrome("12321")); // true