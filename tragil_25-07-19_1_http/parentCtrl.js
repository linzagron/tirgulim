module.controller("parentCtrl", ParentCtrl);

// DI dependency injection - IOC
function ParentCtrl($scope, valueService, serviceService) {
  $scope.todos = valueService;
  serviceService.getTodos();
  $scope.getById = function(demandedId) {
    serviceService.getTodoById(demandedId);
  };
}
