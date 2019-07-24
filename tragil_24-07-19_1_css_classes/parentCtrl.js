module.controller("parentCtrl", ParentCtrl);

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {
  $scope.name = "";
  $scope.email = "";
  $scope.age = "";
  $scope.getClass = function() {
    if ($scope.name === "" && $scope.email === "" && $scope.age === "")
      return "allEmpty";
    if ($scope.name === "" || $scope.email === "" || $scope.age === "")
      return "partialEmpty";
    if ($scope.age < 18) return "invalidAge";
    return "ok";
  };
}
