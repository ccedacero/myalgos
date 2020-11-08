// Complete the gameOfThrones function below to determine whether a given string can be rearranged into a palindrome. If it is possible, return YES, otherwise return NO.

// gameOfThrones has the following parameter(s):

// s: a string to analyze

// Complete the gameOfThrones function below.
function gameOfThrones(s) {
    //  cdcdcdcdeeeef
    function isPalindrome(s) {
        let h = {};
        for (let c of s) {
            h[c] ? delete h[c] : h[c] = true;
        }
        let hLength = Object.keys(h).length;
        let isEven = s.length % 2 === 0;
        if (isEven && hLength === 0 || !isEven && hLength === 1) {
            return 'YES';
        }
        return 'NO';
    }
    return isPalindrome(s);
}