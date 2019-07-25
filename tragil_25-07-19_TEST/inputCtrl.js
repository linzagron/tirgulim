module.controller("inputCtrl", InputCtrl);

function InputCtrl($scope, statService) {
  $scope.memorySet = generateRandom(); // [1, 8, 1, 3, 5, 8, 5, 3];
  $scope.numbers = [];
  $scope.statData = statService;

  function generateRandom() {
    // geneate couples
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      ranNums = [],
      i = nums.length,
      j = 0,
      temp;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      for (let d = 0; d < 2; d++) {
        ranNums.push(nums[j]);
      }
      nums.splice(j, 1);
    }

    // shuffle
    i = ranNums.length;
    j = 0;
    while (i--) {
      j = Math.floor(Math.random() * (i + 1));

      // swap randomly chosen element with current element
      temp = ranNums[i];
      ranNums[i] = ranNums[j];
      ranNums[j] = temp;
    }

    return ranNums;
  }

  $scope.getNumber = function(idx) {
    if ($scope.numbers.length < 2) {
      let isDuplicate = $scope.numbers.find(function(element) {
        return element === idx;
      });

      if (!isDuplicate) {
        // pushing the index so we know what button to disable
        $scope.numbers.push(idx);
      }

      if ($scope.numbers.length === 2) {
        if (
          $scope.memorySet[$scope.numbers[0]] ===
          $scope.memorySet[$scope.numbers[1]]
        ) {
          $scope.statData.stat.corrected++; // update corrected
          console.log("e");
        } else {
          console.log("not e");
        }
        $scope.statData.stat.guesses++; // update gusses
      }
    }
  };

  $scope.isIdxInNumbers = function(idx) {
    for (let i = 0; i < $scope.numbers.length; i++) {
      if (idx == $scope.numbers[i]) return true;
    }
    return false;
  };

  $scope.closeCrads = function() {
    $scope.numbers = [];
  };

  $scope.isAble = function() {
    return $scope.numbers.length === 2;
  };
}
