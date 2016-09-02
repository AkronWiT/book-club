// Exercise 1: Mimic the Math.min function //

function findMin(a, b) {
  if (a > b) {
    return b;
  } else {
    return a;
  }
}

// Exercise 2: recursively evaluating even and odd numbers //

// basic case //

function isEven(num) {
  if (num == 0) {
    return true;
  } else if (num == 1) {
    return false;
  } else {
    return isEven(num - 2);
  }
}

// handling negatives //

function isEven(num) {
  if (num == 0) {
    return true;
  } else if (num == 1) {
    return false;
  } else {
    if (num > 0) {
      return isEven(num - 2);
    } else {
      return isEven(num + 2);
    }
  }
}

// Exercise 3: Counting "B"s in a string //

function countBs(string) {
  count = 0
  for(i = 0; i < string.length; i++) {
    if (string[i] == "B") {
      count += 1;
    }
  }
  return count
}

// counting given letter in a string //

function countChar(string, letter) {
  count = 0
  for(i = 0; i < string.length; i++) {
    if (string[i] == letter) {
      count += 1;
    }
  }
  return count
}
