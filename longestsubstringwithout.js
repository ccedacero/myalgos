//lt 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.



// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
function lengthOfLongestSubstring(s) {
    const seen = [];

    let maxLen = 0,
        start = 0,
        charCode,
        lastIdx;

    for (let i = 0; i < s.length; i++) {
        charCode = s[i].charCodeAt();
        lastIdx = seen[charCode];
        console.log(start)
        if (lastIdx !== undefined && start <= lastIdx) {
            start = lastIdx + 1;
        } else {
            maxLen = Math.max(maxLen, i - start + 1);
        }
        seen[charCode] = i;
    }
    return maxLen;
}