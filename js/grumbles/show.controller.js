angular
.module("grumblr")
.controller("GrumbleShowController", [
  "$stateParams",
  GrumbleShowControllerFunction
]);

function GrumbleShowControllerFunction($stateParams){
  console.log("I'm in the Show controller")
  this.grumble = grumbles[$stateParams.id];
  console.log(this.grumble)
}
