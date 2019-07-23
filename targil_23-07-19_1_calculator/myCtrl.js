module.controller("myCtrl", MyCtrl);

// DI dependency injection - IOC
function MyCtrl($scope, $rootScope) {
  $scope.operation = "+";
  $scope.ans = "XXX";
  $rootScope.ans = $scope.ans; // TODO: not write it twice

  $scope.updateOperation = function(element) {
    $scope.operation = element.currentTarget.value;
  };
  $scope.doCalc = function() {
    switch ($scope.operation) {
      case "+":
        $scope.ans = parseInt($scope.firstNum) + parseInt($scope.secondNum);
        break;
      case "-":
        $scope.ans = $scope.firstNum - $scope.secondNum;
        break;
      case "*":
        $scope.ans = $scope.firstNum * $scope.secondNum;
        break;
      case "/":
        $scope.ans = $scope.firstNum / $scope.secondNum;
        break;
      default:
        $scope.ans = "undefined answer";
    }
    $rootScope.ans = $scope.ans; // TODO: not write it twice
  };
}
