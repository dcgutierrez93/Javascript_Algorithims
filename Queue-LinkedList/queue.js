// Implement a queue using a linked list
// =============================================================================

// A queue is an abstract data structure where items can either be added to a
// collection or removed from a collection

// =============================================================================
// TODO: Example
// We want our queue to have two methods, enqueue X, which will add element X to
// the end of the queue, and a dequeue method which will remove the current first
// item from the queue. We don't need to specify what we want to dequeue because
// the method always returns the first element from the queue. Here is an example
// of a few operations we want our queue to be able to perform.
// =============================================================================

// queue is initially empty
var Queue = {
    front: null,
    back: null
};

// we will use a node to keep track of the elements
// in the queue which is represented by a linked list
function Node(data, next) {
    this.data = data;
    this.next = next;
}

// add elements to queue in O(1) time
function Enqueue(element) {
    var N = new Node(element, null);
    if (Queue.back == null) {
        Queue.front = N;
        Queue.back = N;
    } else {
        Queue.back.next = N;
        Queue.back = Queue.back.next;
    }
}

// remove first element from queue in O(1) time
function Dequeue() {
    if (Queue.front !== null) {
        var first = Queue.front;
        Queue.front = Queue.front.next;
        return first.data;
    } else {
        if (Queue.back !== null) {
            Queue.back = null;
        }
        return 'Cannot dequeue because queue is empty';
    }
}

Enqueue('a');
Enqueue('b');
Enqueue('c');
Dequeue();
console.log(Queue);
