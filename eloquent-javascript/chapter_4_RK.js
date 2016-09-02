// Exercise 1: ranges //

// basic range //
function range(first, second) {
  array = [];
  for (i = first; i <= second; i++) {
    array.push(i);
  }
  return array;
}

// sum the range //

function sum(range) {
  var sum = 0;
  for (i = 0; i < range.length; i++) {
    sum += range[i];
  }
  return sum;
}

// range with a 3rd argument for step size //

function range(first, second, step) {
  array = [];
  if (step > 0) {
  	for (i = first; i <= second; i += step) {
    	array.push(i);
  	}
  } else if (step < 0) {
  	for (i = first; i >= second; i += step) {
    	array.push(i);
    }
  } else {
  	array = "Please enter a non-zero integer for 'step'";
  }
  return array;
}

// Exercise 2: reversing an array by creating a new array //

function reverseArray(array) {
  newArray = [];
  for (i = array.length - 1; i >= 0; i--) {
  	newArray.push(array[i]);
  }
  return newArray;
}

// reverse the current array //

function reverseArrayInPlace(array) {
  arrayLength = array.length;
  for (i = arrayLength - 1; i >= 0; i--) {
  	array.push(array[i]);
  }
  array.splice(0,arrayLength);
  return array;
}


// refactor of reverse the current array based on hint included in the book //

function reverseArrayInPlace(array) {
  arrayHalfLength = Math.floor(array.length / 2);
  for (i = 0; i < arrayHalfLength; i++) {
  	holdVariable = array[i];
    array[i] = array[array.length - 1 - i];
	array[array.length - 1 - i] = holdVariable;
  }
  return array;
}

// Exercise 3: moving arrays to lists and lists to arrays //

// converting an array of numbers to a nested object //

function arrayToList(array) {
  var list = {};
  if (array.length > 0) {
    list.value = array[0];
    array.shift(0);
    if (array.length > 0) {
  		list.rest = arrayToList(array);
    } else {
      list.rest = null;
    }
  }
  return list;
}

// converting a nested object back to an array //

function listToArray(list) {
  var newList = [];
  for (var oldList = list; oldList; oldList = oldList.rest) {
    newList.push(oldList.value);
  }
  return newList;
}

// helper function Prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list //

function prepend(item, list) {
  var newList = {};
  newList.value = item;
  newList.rest = list;
  return newList;
}

// helper function nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element. //


// Exercise 4 //
