// remove kth nocde form linked list 

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;

    // Move the second pointer n+1 steps ahead
    for (let i = 1; i <= n + 1; i++) {
        second = second.next;
    }

    // Move both pointers until the second pointer reaches the end
    while (second !== null) {
        first = first.next;
        second = second.next;
    }

    // Remove the k-th node and return it
    let removedNode = first.next;
    first.next = first.next.next;

    return removedNode;
}

// Example usage:
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

let k = 2;
let removedNode = removeNthFromEnd(head, k);

console.log("Removed node:", removedNode.val);

let current = head;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}
