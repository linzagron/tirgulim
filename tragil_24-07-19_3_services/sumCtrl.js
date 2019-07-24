module.controller("sumCtrl", SumCtrl);

function SumCtrl($scope, valueService) {
  $scope.data = valueService.data;
  $scope.color = valueService.color;

  $scope.getClass = function() {
    if ($scope.data.aNum + $scope.data.bNum > 0) {
      switch ($scope.color.name) {
        case "dark":
          return "darkPossitive";
        case "clear":
          return "clearPossitive";
      }
    } else if ($scope.data.aNum + $scope.data.bNum < 0) {
      switch ($scope.color.name) {
        case "dark":
          return "darkNegative";
        case "clear":
          return "clearNegative";
      }
    }
    return "";
  };
}
