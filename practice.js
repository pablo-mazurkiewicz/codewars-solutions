function isPalindrome(n) {
    const normalized = n.toLowerCase();
    const reversed = normalized.split('').reverse().join('')
    return normalized ===reversed;
} 


function countBits(n) {
    return n.toString(2).split('').filter(bit => bit === '1').length
}