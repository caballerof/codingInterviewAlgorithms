const { LinkedList } = require('../linkedList/linkList');

function midPoint(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

const list = new LinkedList();
list.insertLast('A');
list.insertLast('B');
list.insertLast('C');
//list.insertLast('D');
//list.insertLast('F');
//list.insertLast('G');
//list.insertLast('H');

console.log(midPoint(list));
