// You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.

// Implement the BrowserHistory class:

// BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
// void visit(string url) Visits url from the current page. It clears up all the forward history.
// string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.
// string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.


// Example:

// Input:
// ["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back","back"]
// [["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]]
// Output:
// [null,null,null,null,"facebook.com","google.com","facebook.com",null,"linkedin.com","google.com","leetcode.com"]

// leetcode 1472
var BrowserHistory = function (homepage) {
    this.history = [homepage];
    this.location = 0;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
    if (this.location < this.history.length - 1) {
        this.history.splice(this.location + 1);
    }
    this.history.push(url);
    this.location = this.location + 1;
    return this.history[this.location];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
    if (this.location <= steps) {
        this.location = 0;
    } else {
        this.location = this.location - steps;
    }
    return this.history[this.location];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
    if (this.location + steps > this.history.length - 1) {
        this.location = this.history.length - 1;
    } else {
        this.location = this.location + steps;
    }
    return this.history[this.location];
};