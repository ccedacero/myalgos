// Given a sorted linked list, delete all duplicates such that each element appear only once.

// Example 1:

// Input: 1->1->2
// Output: 1->2
// Example 2:

// Input: 1->1->2->3->3
// Output: 1->2->3
var deleteDuplicates = function (head) {
    1 > 2 > 1 > 4 > 6
    if (!head) return head;
    let h = { [head.val]: true }
    let prev = head;
    let current = head.next;
    while (current) {
        if (h[current.val]) {
            prev.next = current.next;
            // current.next = null; 
        } else {
            h[current.val] = true
            prev = current;
        }

        current = current.next;
    }
    return head;
};