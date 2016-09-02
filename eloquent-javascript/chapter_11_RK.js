// Exercise 1
// Add support for arrays to Egg by adding the following three functions to the top scope:
// array(...) to construct an array containing the argument values
// length(array) to get an array’s length
// element(array, n) to fetch the nth element from an array.

topEnv["array"] = function() {
  Array.prototype.slice.call(arguments, 0);
};

topEnv["length"] = function(array) {
  return array.length;
};

topEnv["element"] = function(array, n) {
  return array[n];
};


// Exercise 2
// function f returns a function that adds its argument to f's argument,
// meaning that it needs access to the local scope inside f to be able to use variable a.
// Go back to the definition of the fun form and explain which mechanism causes this to work.

/*
'var localEnv' creates a new 'env' Object to house local variables. The 'fun' construct, through the
'return function()' takes the arguments of the function's arguments -- a and fun(b) -- and assigns them
to this new object, which is accessible outside of itself as it is an object known to the larger function
being returned.
*/

// Exercise 3
// change skipSpace to also skip the # symbol so we can use comments

function skipSpace(string) {
  var skipChar = string.match(/^(\s|#.*)*/);
  return string.slice(skipChar[0].length);
}

// Exercise 4
// Add a special form set, similar to define, which gives a variable a new value,
// updating the variable in an outer scope if it doesn’t already exist in the inner scope.

specialForms["set"] = function(args, env) {
  if (args.length != 2 || args[0].type != "word")
    throw new SyntaxError("Bad use of set");
  var varName = args[0].name;
  var value = evaluate(args[1], env);

  for (var scope = env; scope; scope = Object.getPrototypeOf(scope)) {
    if (Object.prototype.hasOwnProperty.call(scope, varName)) {
      scope[varName] = value;
      return value;
    }
  }
  throw new ReferenceError("Setting undefined variable " + varName);
};
