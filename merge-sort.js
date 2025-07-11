function mergeSort(arr) {
  console.log("This was printed recursively");
  if (arr.length === 1) return arr;
  else {
    //split array in half
    let halfLength = Math.floor(arr.length / 2);
    console.log("halfLength is " + halfLength);
    let arrLeft = arr.slice(0, halfLength);
    // if (arrLeft.length > 1) mergeSort(arrLeft);
    console.log("Left array is " + arrLeft);

    let arrRight = arr.slice(halfLength);
    // if (arrRight.length > 1) mergeSort(arrRight);
    console.log("Right array is " + arrRight);
    //sort left half of numbers
    //sort right half of numbers
    //merge sorted halves
    let merged = [];

    // while (Number.isInteger(arrLeft[0]) || Number.isInteger(arrRight[0])) {
    if (arrLeft[0] < arrRight[0]) {
      merged.push(arrLeft[0]);
      merged.push(arrRight[0]);
      // arrLeft.splice(0, 1);
      console.log("left");
    } else {
      merged.push(arrRight[0]);
      merged.push(arrLeft[0]);
      // arrRight.splice(0, 1);
      console.log("right");
    }
    // }

    console.log("Merged array is " + merged);
    return merged;
  }
}

console.log(mergeSort([105, 79]));
