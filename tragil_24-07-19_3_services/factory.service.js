module.factory("factoryService", function() {
  return {
    print1toA: function(a) {
      let arr = [];
      for (let i = 1; i <= a; i++) {
        arr.push(i);
      }
      return arr;
    }
  };
});
