const thirddModule = angular.module("myModule", []);

thirddModule.controller("myModuleCtrlB", MyModuleCtrlB);

function MyModuleCtrlB() {
  this.myP = "hello from myModuleCtrlB";
}
