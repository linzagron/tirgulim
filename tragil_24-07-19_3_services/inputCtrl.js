module.controller("inputCtrl", InputCtrl);

function InputCtrl($scope, valueService) {
  $scope.data = valueService.data;
  $scope.color = valueService.color;
  // valueService.data = $scope.data; // why this doesnt work?
}
