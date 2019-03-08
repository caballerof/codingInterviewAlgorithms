const { LinkedList, Node } = require('../linkedList/linkList');

function isCircularList(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
} // End isCircularList

const list = new LinkedList();
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');

list.head = a;
a.next = b;
b.next = c;
c.next = null;

console.log(isCircularList(list));
