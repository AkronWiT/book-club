// Looping a triangle //

var string = "#";
while(string.length < 8) {
  console.log(string);
  string = string + "#";
}

for(var string = "#"; string.length < 8; string += "#") {
  console.log(string);
}

var string = "#";
do {
  console.log(string);
  string += "#";
}
while(string.length < 8);

// FizzBuzz //
for (i = 1; i < 101; i++) {
  if (i % 3 === 0) {
    if (i % 5 === 0) {
      console.log("FizzBuzz");
    } else {
    console.log("Fizz");
    }
  } else if(i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// refactor slimming //

for(i = 1; i < 101; i++) {
  var result = "";
  if (i % 3 === 0)
    result += "Fizz";
  if (i % 5 === 0)
    result += "Buzz";
  if (!result)
    result = i;
  console.log(result);
}

// Chess Board //

// easy way //
var size = 8;
for (i = 0; i < size; i++) {
  if (i % 2 === 0) {
    console.log(" # # # #");
  } else {
    console.log("# # # # ");
  }
}

// function that takes inputs //
function chessBoard(size) {
  space = " ";
  hash = "#";
  for (i = 0; i < size; i++) {
    if (i % 2 === 0) {
	    string = "";
      for (j = 0; j < size; j++) {
        if (j % 2 === 0) {
      	  string += space;
      } else {
          string += hash;
    	  }
      }
      console.log(string);
    } else {
	    string = "";
      for (j = 0; j < size; j++) {
        if (j % 2 === 0) {
		      string += hash;
      } else {
          string += space;
    	  }
      }
      console.log(string);
  	}
  }
}
