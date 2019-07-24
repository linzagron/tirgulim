module.controller("divCtrl", DivCtrl);

function DivCtrl($scope, constService, valueService) {
  $scope.data = valueService.data;
  $scope.msg = constService.msg;
}
