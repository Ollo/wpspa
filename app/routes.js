define([
    'angular',
],
function(angular){

    'use strict';

    return function($stateProvider, $urlRouterProvider, $locationProvider, VIEWS){

        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise("/homeState");

        $stateProvider

        .state('homeState', {
            url: "/home",
            templateUrl: VIEWS + "home.html"
        })
        .state('aboutState', {
            url: "/about",
            templateUrl: VIEWS + "about.html"
        })
    };
});
