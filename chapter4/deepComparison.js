function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (obj1 == null || typeof obj1 != "object" || 
      obj2 == null || typeof obj2 != "object") {
    return false;
  }

  let key1Length = Object.keys(obj1).length;
  let key2Length = Object.keys(obj2).length;
  if(key1Length != key2Length) {
    return false;
  }
}
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));