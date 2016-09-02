// Alter the animated world to make the ecosystem remain balanced for longer //

function SmartPlantEater() {
  this.energy = 20;
  this.direction = randomElement(directionNames);
}
SmartPlantEater.prototype.act = function(view) {
  var space = view.find(" ");
  if (this.energy > 70 && space)
    return {type: "reproduce", direction: space};
  var plant = view.find("*");
  if (plant && this.energy < 60)
    return {type: "eat", direction: plant};
  if (view.look(this.direction) != " ")
    this.direction = view.find(" ") || "s";
    return {type: "move", direction: this.direction};
};

animateWorld(new LifelikeWorld(
  ["############################",
   "#####                 ######",
   "##   ***                **##",
   "#   *##**         **  O  *##",
   "#    ***     O    ##**    *#",
   "#       O         ##***    #",
   "#                 ##**     #",
   "#   O       #*             #",
   "#*          #**       O    #",
   "#***        ##**    O    **#",
   "##****     ###***       *###",
   "############################"],
  {"#": Wall,
   "O": SmartPlantEater,
   "*": Plant}
));
