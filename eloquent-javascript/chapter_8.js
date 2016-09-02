// Exercise 1: Write a function that wraps this clunky function and just keeps trying until a call succeeds, after which it returns the result. //

// default code //

function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  // my code //
  for (;;) {
    try {
      return primitiveMultiply(a, b);
      break;
    } catch (e) {
      if (e instanceof MultiplicatorUnitFailure)
        console.log("Did not multiply; trying again");
      else
        throw e;
  	}
  }
  // end of my code //
  // without the 'break;' this is a neverending loop; however, this is returning 'undefined' rather than a numerical answer //
}

console.log(reliableMultiply(8, 8));
// → 64

/* Exercise 2: Write a function called withBoxUnlocked that takes a function value as argument,
unlocks the box, runs the function,  and then ensures that the box is locked again before returning,
regardless of whether the argument function returned normally or threw an exception. */

function withBoxUnlocked(body) {
  // Your code here.
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);
// → true
====
