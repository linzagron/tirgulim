module.controller("myCtrl", MyCtrl);

// DI dependency injection - IOC
function MyCtrl($scope) {
  $scope.$watch("name", function(newX) {
    if (newX === "lin") {
      alert(`hello ${newX}!`);
    }
  });
}
