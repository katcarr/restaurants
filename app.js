var restaurantList = angular.module('restaurantList', []);


restaurantList.controller("checkBoxController", function($scope){
  $scope.types = [{name: "Chinese"}, {name: "Japanese"}];
  $scope.selects=[];

  $scope.toggleSelection = function toggleSelction(types){
    var idx = $scope.selects.indexOf(types);

    if(idx > -1){
      $scope.selects.splice(idx, 1);
      console.log($scope.selects);
    } else {
      $scope.selects.push(types);
      console.log($scope.selects);
    }

  };

});
