angular
.module("grumblr")
.controller("GrumbleIndexController", [
  GrumbleIndexControllerFunction
]);

function GrumbleIndexControllerFunction(){
  console.log("I'm in the controller")
  this.grumbles = grumbles;
  console.log(this.grumbles)
}
