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

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(newIteration) {
    this.iteration = newIteration;
    this.index = 0;
  }

  next() {
    if(this.index >= this.iteration.obj.length) {
      return {done: true};
    }

    else {
      let newIteration = {
        value: this.iteration.obj[this.index], done: false
      };
    this.index++;
    return newIteration;
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}