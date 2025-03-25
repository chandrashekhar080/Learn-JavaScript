var createCounter = function (init) {
  let out = [];
  increment = function() {
    return out.push((init + 1));
  }
 decrement = function() {
    return out.push((init - 1));
  }
  reset = function() {
    return out.push(init);
  }
  return out;
};

const counter = createCounter(5);
console.log(counter); // [5]
console.log(increment()); // 6
console.log(reset()); // 5
console.log(decrement()); // 4
