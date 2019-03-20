function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list){
  let arrayList = [];

  for(let node = list; node; node = node.rest){
    arrayList.push(node.value);
  }
  return arrayList;
}

function prepend(num, list){
  list = {
    value: num,
    rest: list
  }
  return list;
}

function nth(list, index){

  if (index == 0) {
    return list.value;
  }
  else {
    return nth(list.rest, index - 1);
  }
}

console.log(arrayToList([1, 2, 3]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));

