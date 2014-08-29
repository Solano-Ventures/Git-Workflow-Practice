'use strict';

/**
 * @ngdoc overview
 * @name gitWorkflowPracticeApp
 * @description
 * # gitWorkflowPracticeApp
 *
 * Main module of the application.
 */
angular
  .module('gitWorkflowPracticeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: ''
      })
  })
  .config(function($httpProvider){
    


