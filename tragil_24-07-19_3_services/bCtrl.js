module.controller("bCtrl", BCtrl);

function BCtrl($scope, constService, valueService, serviceService) {
  $scope.data = valueService.data;
  $scope.msg = constService.msg;
  $scope.printB = function() {
    $scope.bArr = serviceService.printBto1($scope.data.bNum);
  };
}
