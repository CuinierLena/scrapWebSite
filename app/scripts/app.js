'use strict';

/**
 * @ngdoc overview
 * @name scrapWebSiteApp
 * @description
 * # scrapWebSiteApp
 *
 * Main module of the application.
 */
angular
  .module('scrapWebSiteApp', [
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
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl'
      })
      .when('/albums', {
        templateUrl: 'views/albums.html',
        controller: 'AlbumsCtrl',
        controllerAs: 'albums'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
