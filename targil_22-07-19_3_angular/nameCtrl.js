module.controller("nameCtrl", NameCtrl);

function NameCtrl($scope) {
  $scope.name = "lin";
  $scope.reverseName = function() {
    $scope.name = $scope.name
      .split("")
      .reverse()
      .join("");
  };
}
