// Exercise 1: Write a simple module that can convert month numbers
// (zero-based, as in the Date type) to names and can convert names back to numbers
var month = function() {
  var names = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];
  return {
    name: function(number) { return names[number - 1]; },
    number: function(name) { return names.indexOf(name) + 1; }
  };
}();

// Exercise 2: come up with a way to separate the chapter 7 code into modules

/* Module "characters"
    BouncingCritter
    Plant
    PlantEater
    SmartPlantEater
    Tiger

  Module "movements"
    directionNames
    directions
    dirPlus
    WallFollower

  Module "world"
    World
    Wall
    charFromElement
    elementFromChar
    Grid
    LifelikeWorld

  Module "actions"
    randomElement
    Vector
    View
*/

/* Exercise 3: dependency management & circular dependencies,
where module A depends on B, and B also depends on A.
CommonJS modules allow a limited form: it works as long as the modules do not replace their default
exports object with another value and start accessing each other’s interface only after they finish loading.
Think of a way in which support for this feature could be implemented.
*/

// base _require_ function
function require(name) {
  if (name in require.cache)
    return require.cache[name];

  var code = new Function("exports, module", readFile(name));
  var exports = {}, module = {exports: exports};
  code(exports, module);

  require.cache[name] = module.exports;
  return module.exports;
}

/*
  Need to put limiters on both _exports_ and load timing. How?
  - Wrap the loader in a function ensuring all modules and dependencies are loaded
    before calling any functions
    - would the _define_ function work to accomplish this?
    - on second thought, I see _define_ is not part of CommonJS
  - Ensure _exports_ values aren't being replaced by the co-dependent modules
    - I don't fully *get* how exports operate.
    - I know there is an order here that needs to be changed up, to make sure loading happens before
      exports are written/over-written. But I'm not sure how it would be implemented.
*/
