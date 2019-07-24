const secondModule = angular.module("myModule", []);

secondModule.controller("myModuleCtrl", MyModuleCtrl);

function MyModuleCtrl() {
  this.myP = "hello from myModuleCtrl";
}
