module.controller("myCtrl", MyCtrl);

//let value1

// DI dependency injection - IOC
function MyCtrl($scope, $rootScope) {
  // This is one way to do the filter - by value and watch
  // There is another way to do the filter without watch: to do it by object.
  // $scope.$watch("fltrModel", function(newX) {
  //   $scope.fltrObj = { model: newX };
  // });
  // $scope.$watch("fltrColor", function(newX) {
  //   $scope.fltrObj = { color: newX };
  // });
  // $scope.$watch("fltrPrice", function(newX) {
  //   $scope.fltrObj = { price: newX };
  // });

  $scope.devices = [
    new Mobile({ model: "IPhone X", color: "black", price: 3500 }),
    new Mobile({ model: "Xiaomi", color: "green", price: 1000 }),
    new Mobile({ model: "Samsung Galaxy 11+", color: "black", price: 5500 }),
    new Mobile({ model: "LG V60", color: "White", price: 7500 })
  ];

  $rootScope.devices = $scope.devices;

  $scope.sortBy = function(propertyName) {
    $scope.reverse =
      $scope.propertyName === propertyName ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };

  $scope.addDevice = function() {
    $scope.devices.push(
      new Mobile({
        model: $scope.model,
        color: $scope.color,
        price: $scope.price
      })
    );
  };

  $scope.updateDevice = function() {
    if ($scope.id >= 0 && $scope.id < $scope.devices.length) {
      $scope.devices[$scope.id].model = $scope.model;
      $scope.devices[$scope.id].color = $scope.color;
      $scope.devices[$scope.id].price = $scope.price;
    } else {
      console.log("Update Error: index excceeded max value");
    }
  };

  $scope.removeDevice = function(idx) {
    $scope.devices.splice(idx, 1);
  };

  $scope.openInputs = function(idx) {
    $scope.idx = idx;
  };

  // This is one way to sort the array
  // $scope.sortBy = function(col) {
  //   $scope.devices.sort((a, b) =>
  //     a[col] > b[col] ? 1 : b[col] > a[col] ? -1 : 0
  //   );
  // };

  $scope.reverse = true;

  $scope.sort = function(col) {
    $scope.reverse = $scope.col === col ? !$scope.reverse : false;
    $scope.col = col;
  };
}
