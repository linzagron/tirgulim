module.controller("aCtrl", ACtrl);

function ACtrl($scope, constService, valueService, factoryService) {
  $scope.data = valueService.data;
  $scope.msg = constService.msg;

  $scope.printA = function() {
    $scope.aArr = factoryService.print1toA($scope.data.aNum);
  };
}
