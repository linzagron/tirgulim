module.controller("parentCtrl", ParentCtrl);

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {
  this.myP = "hello from parentCtrl";
}
