class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getParent(idx) {
    return Math.floor(idx /2);
  }

  getLeftChild(idx) {
    return idx * 2;
  }

  getRightChild(idx) {
    return idx * 2 + 1;
  }

  siftUp(idx) {
    if (idx === 1 )return;
    let parentIdx = this.getParent(idx);
    if (this.array[parentIdx] < this.array[idx]){
   [this.array[parentIdx], this.array[idx]] = // [9,90] = [90,9]
   [this.array[idx], this.array[parentIdx]];
   this.siftUp(parentIdx);
  }


}
  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length -1);
  }

  siftDown(idx) {
    let array = this.array;
    let leftIdx = this.getLeftChild(idx);
    let rightIdx = this.getRightChild(idx);
    let leftVal = array[leftIdx];
    let rightVal = array[rightIdx];


    if (leftVal === undefined) {
      leftVal = -Infinity;
    }
    if (rightVal === undefined) {
      rightVal = -Infinity;
    }
    if (array[idx] > rightVal && array[idx] > leftVal) return;

      if (leftVal < rightVal) {
        var swap = rightIdx;
      } else{
        var swap = leftIdx;
      }
      [array[idx], array[swap]] = [array[swap],array[idx]];
      this.siftDown(swap);
    }
 // our heap: [null, 7  , 32, 24, 30,  9, 20, 18,  2,  7]
//   indices: [   0,  1,  2,  3,  4,  5,  6,  7,  8,  9]
deleteMax() {
  if (this.array.length === 1) return null;
  if (this.array.length === 2) return this.array.pop();

  let max = this.array[1];
  this.array[1] = this.array.pop();

    this.siftDown(1);
    return max;
    }

}

module.exports = {
  MaxHeap
};
