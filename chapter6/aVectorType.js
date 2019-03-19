class Vec {
  constructor (x, y) {
    this.x = x;
    this.y = y;  
  }
  plus(obj) {
    let vec = Object.create(Vec);
    vec.x = this.x + obj.x;
    vec.y = this.y + obj.y;
    return vec;
  }
  minus(obj) {
    let vec = Object.create(Vec);
    vec.x = this.x - obj.x;
    vec.y = this.y - obj.y;
    return vec;
  }
  get length() {
    let len = 0;
    len = Math.sqrt(this.x * this.x + this.y * this.y);
    return len;
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5