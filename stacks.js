// // A stack is a structure where the last in is the first out
// // Array implementation is below
// var stack = [];

// stack.push("google");
// stack.push("insta");
// stack.push("youtube");

// console.log(stack)

// Linked list Stack implementation below

// class Node {
//      constructor(value) {
//          this.value = value;
//          this.next = null;
//      }
//  }

//  class Stack {
//      constructor() {
//          this.first = null;
//          this.last = null;
//          this.size = 0;
//      }

//   push(val) {
//       var newNode = new Node(val);
//       if(!this.first) {
//           this.first = newNode;
//           this.last = newNode;
//       } else {
//           var temp = this.first;
//           this.first = newNode;
//           this.first.next = temp;
//       }
//       return ++this.size;
//   }

//   pop(val) {

//       if(!this.first) {
//           return null;
//       }
//       let temp = this.first;
//       if(this.first === this.last) {
//           this.last = null;
//       }
//       this.first = this.first.next;
//       this.size--;
//       return temp.value;
//   }
//  }

//   stack.push('first2')

// Ques linked list implementation

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    //   add to end of linked list
    let newNode = new Node(val);
    if (!this.first) {
      //     edge case for empty queue
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    //  remove from beginning
    if (!this.first) return null;
    let temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
