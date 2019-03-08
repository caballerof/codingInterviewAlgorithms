const { LinkedList } = require('../linkedList/linkList');

function stepBackFromTail(list, position) {
  let slow = list.getFirst();
  let fast = list.getAt(position);
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
} // End stepBackFromTail

const list = new LinkedList();
list.insertLast('A');
list.insertLast('B');
list.insertLast('C');
list.insertLast('D');
list.insertLast('F');
list.insertLast('G');
list.insertLast('H');

console.log(stepBackFromTail(list, 0));
