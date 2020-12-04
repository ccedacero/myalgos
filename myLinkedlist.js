class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    insertVal(val) {
        this.val = new Node
    }
    // Insert first node 
    insertFirst(data) {
        this.head = new Node(data, this.head)
        this.size++;
    }
    // Insert last node
    // insertLast(data) {
    //     let node = new Node(data);
    //     let current;

    //     // if empty, make head 
    //     if (!this.head) {
    //         this.head = node;
    //     } else {
    //         current = this.head;

    //         while (current.next) {
    //             current = current.next;
    //         }
    //         current.next = node;
    //     }
    //     this.size++;
    // }
    // Insert at index 
    // insertAt(data, index) {

    //     //if index out of range, return 
    //     if (index > 0 && index > this.size) {
    //         return;
    //     }
    //     // if first index
    //     if (index === 0) {
    //         this.head = new Node(data, this.head);
    //         return;
    //     }
    //     const node = new Node(data);
    //     let current, previous;
    //     current = this.head;
    //     let count = 0;

    //     while (count < index) {
    //         // node before index
    //         previous = current;
    //         count++;
    //         // node after index   
    //         current = current.next;
    //     }
    //     node.next = current;
    //     previous.next = node;
    //     this.size++;
    // }

    //Get at index 


    // remove at index 

    // clear list 

    // print list data 
    printListData(data) {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
const ll = new linkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
// ll.insertLast(400);
// ll.insertAt(500,10);
ll.printListData(ll)