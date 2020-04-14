// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array) {
  let noComplete = isComplete(array);
   if (!noComplete) return false;
   let idx = 1;
    while(idx < array.length){
       let leftVal = array[2 * idx];
       let rightVal = array[2 * idx +1];
       if (leftVal === undefined) leftVal = -Infinity;
       if (rightVal === undefined) rightVal = -Infinity;
       if (array[idx] < leftVal || array[idx] < rightVal ){
          return false;
         }
        idx++;
  }
    return true;
}
function isComplete(array){
  let isComplete  = array.every(ele => ele !== undefined);
  return isComplete; // returns true or false
}

  // our heap: [null, 40, 32, 24, 30,  9, 20, 18,  2,  7]
  //  indices: [   0,  1,  2,  3,  4,  5,  6,  7,  8,  9]
module.exports = {
  isMaxHeap
};
