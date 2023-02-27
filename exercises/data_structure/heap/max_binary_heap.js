class MaxBinaryHeap {
  constructor(values = []) {
    this.values = values;
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let newIdx = this.values.length - 1;
    const newValue = this.values[newIdx];

    while (newIdx > 0) {
      let parentIdx = Math.floor((newIdx - 1) / 2);
      let parentValue = this.values[parentIdx];

      if (newValue <= parentValue) {
        break;
      }

      this.values[parentIdx] = newValue;
      this.values[newIdx] = parentValue;
      newIdx = parentIdx;
    }
  }

  removeMaX() {
    if (this.values.length === 0) return null;

    let idx = 0;
    const maxValue = this.values[idx];
    const length = this.values.length - 1;

    this.values[0] = this.values[length];
    this.values.pop();

    do {
      const leftIndex = idx * 2 + 1;
      const rightIndex = idx * 2 + 2;

      if (leftIndex > length && rightIndex > length) break;

      const leftDiff = this.values[leftIndex] - this.values[idx] || 0;
      const rightDiff = this.values[rightIndex] - this.values[idx] || 0;

      if (leftDiff < 1 && rightDiff < 1) break;

      if (leftDiff > rightDiff) {
        // swap current with leftIndex
        const tempValue = this.values[idx];
        this.values[idx] = this.values[leftIndex];
        this.values[leftIndex] = tempValue;
        idx = leftIndex;
      } else if (rightDiff > leftDiff) {
        // swap current with rightIndex
        const tempValue = this.values[idx];
        this.values[idx] = this.values[rightIndex];
        this.values[rightIndex] = tempValue;
        idx = rightIndex;
      } else {
        break;
      }
    } while (true);

    return maxValue;
  }
}

const heap = new MaxBinaryHeap([41, 39, 33, 18, 27, 12]);

console.log(heap.values);
heap.insert(55);

console.log('🚀 ~ file: max_binary_heap.js ~ line 76 ~ removeMaX');
console.log(heap.removeMaX());
console.log(heap.values);
console.log('======================');
console.log(heap.removeMaX());
console.log(heap.values);
console.log('======================');
console.log(heap.removeMaX());
console.log(heap.values);
console.log('======================');
console.log(heap.removeMaX());
console.log(heap.values);
console.log('======================');
console.log(heap.removeMaX());
console.log(heap.values);
console.log('======================');
console.log(heap.removeMaX());
console.log(heap.values);
console.log('======================');
console.log(heap.removeMaX());
console.log(heap.values);
console.log('======================');
console.log(heap.removeMaX());
console.log(heap.values);
