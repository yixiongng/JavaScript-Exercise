function reverseArray(list) {
  let reversedList = [];
  for(let i = list.length - 1; i >= 0; i--) {
    reversedList.push(list[i]);
  }
  return reversedList;
}

function reverseArrayInPlace(list) {
  let mid = Math.floor(list.length / 2);

  for(let i = 0; i < mid; i++) {
    let temp;
    temp = list[i];
    list[i] = list[list.length - i - 1];
    list[list.length - i  - 1] = temp;
  }
  return list;
}
console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArrayInPlace(["A", "B", "C"]));