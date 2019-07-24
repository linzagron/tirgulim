module.controller("aCtrl", ACtrl);

function ACtrl($scope, constService, valueService, factoryService) {
  $scope.data = valueService.data;
  $scope.msg = constService.msg;

  $scope.printA = function() {
    return 0;
    // return factoryService.print1toA($scope.data.aNum);
  };
}
