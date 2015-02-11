'use strict';

angular.module('drivekpi', ['ngAnimate', 'ui.router'])
  .constant('API_REQUEST_FILE','/api/answers.json')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('test', {
        url: '/test/:step',
        templateUrl: 'app/test/test.html',
        controller: 'TestCtrl'
      })
      .state('result',{
        url:'/result',
        templateUrl: 'app/result/result.html',
        controller: 'ResultCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
  // .factory('requestInformation', ['$http', 'API_REQUEST_FILE',
  //   function($http, API_REQUEST_FILE){
  //     return {
  //       getInformation: function() {
  //         return $http.get(API_REQUEST_FILE).success(
  //           function(data){
  //             return data;
  //         });
  //       }
  //     };
  //   }
  // ])
  .run(function($rootScope, $state, $stateParams){
    $rootScope.phrases = [
      {
        "You Guys Rock!":"Today I felt one with my team, they are such great guys and I'm glad to work with them.",
        "It was OK-ISH":"Today I felt alone, isolated and no one even noticed",
        "Hello? Anybody There?":"I'm so angry with some of the guys, I'd rather work alone"
      },
      {
        "WOW, I GOT THE POWER!":"Today my tasks were interesting to solve, I felt competent and time flew by",
        "IT WAS OK-ISH":"Today I had to lots of things that I didn't know how to handle",
        "HEY, I'M NOT YOUR [...]":"I had to do rudimentary tasks that are totally below my capabilities"
      },
      {
        "YEAH, AUTONOMY!":"Today I was able to do it my way!",
        "IT WAS OK-ISH":"Today I had to do things that I was told to do, which didn't make sense to me",
        "THEY MADE ME DO ... THINGS":"I had to use tools/methods that I wouldn't choose myself"
      },
      {
        "YIPPEEEE!!!!":"Today was fun - I laughed a lot and enjoyed work in general",
        "IT WAS OK-ISH":"I had better days",
        "I HATE WORK":"Today was horrible!"
      }
    ];
    // $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    //     $state.go("home");
    // });
    $rootScope.answers = new Array($rootScope.phrases.length);
    $stateParams.step = 1;
  });
