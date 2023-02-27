class Node {
  constructor({ value = '', priority = 10 } = {}) {
    this.value = value;
    this.priority = priority;
  }

  getInfo() {
    return `The ${this.value} has a priority ${this.priority}`;
  }
}

class PriorityQueue {
  constructor({ nodes = [] } = {}) {
    this.values = nodes;
  }

  insert(node) {
    this.values.push(node);
    this.bubbleUp();
  }

  bubbleUp() {
    let newIdx = this.values.length - 1;
    const newPriority = this.values[newIdx].priority;

    while (newIdx > 0) {
      let parentIdx = Math.floor((newIdx - 1) / 2);
      let parentPriority = this.values[parentIdx].priority;

      if (newPriority > parentPriority) {
        break;
      }

      [this.values[parentIdx], this.values[newIdx]] = [this.values[newIdx], this.values[parentIdx]];
      newIdx = parentIdx;
    }
  } // End bubbleUp

  removeRoot() {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) return this.values.pop();

    const maxValue = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values.pop();

    this.sinkRoot();

    return maxValue;
  }

  sinkRoot({ idx = 0 } = {}) {
    const length = this.values.length - 1;

    while (true) {
      const leftIndex = idx * 2 + 1;
      const rightIndex = idx * 2 + 2;

      if (leftIndex > length && rightIndex > length) break;

      const leftDiff = this.values[idx]?.priority - this.values[leftIndex]?.priority || 0;
      const rightDiff = this.values[idx]?.priority - this.values[rightIndex]?.priority || 0;

      if (leftDiff < 1 && rightDiff < 1) break;

      if (leftDiff > rightDiff) {
        // swap current with leftIndex
        [this.values[leftIndex], this.values[idx]] = [this.values[idx], this.values[leftIndex]];
        idx = leftIndex;
      } else if (rightDiff > leftDiff) {
        // swap current with rightIndex
        [this.values[rightIndex], this.values[idx]] = [this.values[idx], this.values[rightIndex]];
        idx = rightIndex;
      } else {
        break;
      }
    }
  } // End sinkRoot
} // End Class

const node1 = new Node({ value: 'Common cold', priority: 5 });
const node2 = new Node({ value: 'Gunshot wound', priority: 1 });
const node3 = new Node({ value: 'High fever', priority: 4 });
const node4 = new Node({ value: 'Broken arm', priority: 2 });
const node5 = new Node({ value: 'Glass in foot', priority: 3 });

const queue = new PriorityQueue([]);
queue.insert(node1);
queue.insert(node2);
queue.insert(node3);
console.log(queue);

console.log(queue.removeRoot());
console.log(queue.removeRoot());
console.log(queue.removeRoot());

/* /
const node1 = new Node();
node1.value = 'pay bill';
node1.priority = 2;

const queue = new PriorityQueue({ nodes: [node1] });
queue.insert(new Node({ value: 'Walk dog', priority: 6 }));
queue.insert(new Node({ value: 'See movies', priority: 8 }));
queue.insert(new Node({ value: 'pump water', priority: 3 }));
queue.insert(new Node({ value: 'Feed baby', priority: 1 }));
queue.insert(new Node({ value: 'Go out', priority: 5 }));
queue.insert(new Node({ value: 'Eat', priority: 0 }));
console.log(queue);

console.log(queue.removeRoot());
console.log(queue);

console.log(queue.removeRoot());
console.log(queue);

console.log(queue.removeRoot());
console.log(queue);
// */
