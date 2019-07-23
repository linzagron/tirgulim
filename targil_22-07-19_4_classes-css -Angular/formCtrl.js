module.controller("formCtrl", FormCtrl);

// DI dependency injection - IOC
function FormCtrl($scope) {
  $scope.person = new Person("");
  // $scope.isBike = false;
  $scope.resetAll = function() {
    $scope.person.name = "";
    $scope.person.age = "";
    $scope.person.password = "";
    $scope.person.gender = "";
    $scope.person.carType = "";
    $scope.person.isBike = "";
  };
}
