module.controller("timeCtrl", TimeCtrl);

function TimeCtrl($scope) {
  $scope.time = new Date();
  $scope.getTime = function() {
    $scope.time = new Date();
  };
}
