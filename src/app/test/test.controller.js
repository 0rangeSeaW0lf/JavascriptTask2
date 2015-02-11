'use strict';

angular.module('drivekpi')
  .controller('TestCtrl', ['$scope','$rootScope', '$stateParams', '$location', '$state',function ($scope, $rootScope, $stateParams, $location, $state) {
    var currentPage = $stateParams.step;
    $scope.date = new Date();
    var object = $rootScope.phrases[currentPage];
    $scope.responses = Object.keys(object);
    $scope.texts = [];
    for (var i = 0; i < $scope.responses.length; i++) {
      $scope.texts.push(object[$scope.responses[i]]);
    }
    $rootScope.answer = function(answer) {
      console.log(answer);
      $rootScope.answers.push(answer);
      if ($rootScope.answers.length < 3){
        $location.path("/test/"+(parseInt(currentPage, 10)+1));
      } else if ($rootScope.answers.length == 3) {
        $state.go("result");
      }
    };
  }]);
