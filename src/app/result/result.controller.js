'use strict';

angular.module('drivekpi')
  .controller('ResultCtrl',['$scope', '$rootScope','$location', function($scope, $rootScope, $location){
    $scope.results = $rootScope.answers;
    $scope.retakeTest = function(){
        $scope.results = [];
        $location.path("/test/1");
    };
  }]);