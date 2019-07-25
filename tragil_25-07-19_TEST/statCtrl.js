module.controller("statCtrl", StatCtrl);

function StatCtrl($scope, statService) {
  $scope.statData = statService;
}
