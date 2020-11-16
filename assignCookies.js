// Leetcode 455
// Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

// Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.
const findContentChildren = function (g, s) {
    let c = 0;
    g = g.sort((a, b) => a - b)
    s = s.sort((a, b) => a - b)
    let p1 = 0;
    let p2 = 0;

    while (p1 < g.length && p2 < s.length) {
        if (g[p1] <= s[p2]) {
            p1++
            p2++
            c++
        } else {
            p2++
        }
    }
    return c
