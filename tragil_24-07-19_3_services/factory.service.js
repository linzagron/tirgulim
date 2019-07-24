module.factory("factoryService", function(a) {
  const result = {};
  result.print1toA = function() {
    let arr = [];
    for (let i = 0; i < a; i++) {
      arr.push(i);
    }
    return arr;
  };
  return result;
});
