class Group {
  constructor() {
    this.obj = [];
  }
  add(num) {
    if(!this.has(num)) {
      this.obj.push(num);
    }
  }
  delete(num) {
    this.obj = this.obj.filter(x => x != num);
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

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30)); 
// → false 
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false