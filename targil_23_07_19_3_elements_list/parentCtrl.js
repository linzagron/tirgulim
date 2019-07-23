module.controller("parentCtrl", ParentCtrl);

//let value1

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {
  $scope.devices = [
    new Mobile({ model: "IPhone X", color: "black", price: 3500 }),
    new Mobile({ model: "Xiaomi", color: "green", price: 1000 }),
    new Mobile({ model: "Samsung Galaxy 11+", color: "black", price: 5500 }),
    new Mobile({ model: "LG V60", color: "White", price: 7500 })
  ];

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
}
