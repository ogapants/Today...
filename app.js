angular.module('myApp', [])
  .controller('AppController', function($scope) {
    $scope.input = '';
    $scope.images = [];

    $scope.submit = function() {
      if (!$scope.input) return;
      arr = $scope.input.split(/\r\n|\r|\n/);
　　	for (i = 0; i < arr.length; i++) {
      $scope.images.push({
        url: arr[i],
      });
　　	}
      $scope.input =  '';
    };
    $scope.deleteImage = function(index) {
      $scope.images.splice(index, 1);
    };
  });
