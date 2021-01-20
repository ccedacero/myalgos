// lt 49
var groupAnagrams = function (strs) {
    let h = {};
    for (let word of strs) {
        let temp = word.split('').sort().join('');
        if (h[temp]) {
            h[temp].push(word);
        } else {
            h[temp] = [word]
        }
    }
    return Object.values(h)
};

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
