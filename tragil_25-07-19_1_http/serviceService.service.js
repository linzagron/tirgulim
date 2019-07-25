module.service("serviceService", function(constService, valueService, $http) {
  this.getTodos = function() {
    let p = $http.get(constService.url.main);
    p.then(
      resp => {
        //console.log(resp.data);
        valueService.allData = resp.data;
      },
      err => {
        valueService.httpErrorMsg = err;
        console.log(`ERROR === ${err}`);
      }
    );
  };

  this.getTodoById = function(demandedId) {
    let p = $http.get(`${constService.url.main}/${demandedId}`);
    p.then(
      resp => {
        console.log(resp.data);
        valueService.dataById = resp.data;
      },
      err => {
        valueService.httpErrorMsg = err;
        console.log(`ERROR === ${err}`);
      }
    );
  };
});
