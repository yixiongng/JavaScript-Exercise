function loop(start, cond, reduce, action) {
  let current = start;
  for(current; cond(current); current = reduce(current)) {
        action(current);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1