// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]

var addTwoNumbers = function (l1, l2) {
    let carry = 0;
    let head = null;
    let linkedList = null;
    while (l1 || l2) {
        let sum = 0 + carry;
        if (l1) sum += l1.val
        if (l2) sum += l2.val
        carry = 0;
        if (sum > 9) {
            sum = sum % 10;
            carry = 1;
        }
        if (linkedList === null) {
            linkedList = new ListNode(sum);
            head = linkedList;
        } else {
            linkedList.next = new ListNode(sum);
        }

        linkedList = linkedList.next ? linkedList.next : linkedList
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    if (carry) linkedList.next = new ListNode(carry);
    return head;
};
