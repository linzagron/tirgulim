module.service("serviceService", function() {
  this.printBto1 = function(b) {
    let arr = [];
    for (let i = b; i > 0; i--) {
      arr.push(i);
    }
    return arr;
  };
});
