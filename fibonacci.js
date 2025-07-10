function fibs(num) {
  let array = [];

  for (let index = 0; index < num; index++) {
    if (index < 2) array.push(index);
    else {
      let first = array[index - 1];
      let second = array[index - 2];
      let total = first + second;
      array.push(total);
    }
  }
  return array;
}

function fibsRec(num) {
  console.log("This was printed recursively");
  if (num <= 0) return [];
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  let array = fibsRec(num - 1);
  let total = array.at(-1) + array.at(-2);
  return [...array, total];
}

console.log("Iterative solution: ");
console.log(fibs(8));
console.log("Recursive solution: ");
console.log(fibsRec(8));
