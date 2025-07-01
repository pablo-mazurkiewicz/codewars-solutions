function isPalindrome(str) {
const normalized = str.toLowerCase();
  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
}
