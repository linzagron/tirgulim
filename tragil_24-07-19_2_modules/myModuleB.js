const thirdModule = angular.module("myModuleB", []);

thirdModule.controller("myModuleCtrlB", MyModuleCtrlB);

function MyModuleCtrlB() {
  this.myP = "hello from myModuleCtrlB";
}
