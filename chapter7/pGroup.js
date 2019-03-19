class PGroup {
  constructor(num) {
    this.obj = num;
  }
  add(num) {
    if(!this.has(num)) {
      return new PGroup(this.obj.concat([num]));
    }
    else {
      return this;
    }
  }
  delete(num) {
    if(this.has(num)) {
      return new PGroup(this.obj.filter(x => x != num));
    }
    else {
      return this;
    }

  }

  has(num) {
    return this.obj.includes(num);
  }
  static from(list) {
    let newList = new Group();
    for(let element of list) {
      newList.add(element);
    }
    return newList;
  }
}

PGroup.empty = new PGroup([]);
let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false