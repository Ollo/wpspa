require.config({
  "baseUrl": "wp-content/themes/wpspa/",
  "paths": {

    "routes": "app/routes",

    "angular": "bower_components/angular/angular",
    "angular-ui-router": "bower_components/angular-ui-router/release/angular-ui-router.min",
    "angular-resource": "bower_components/angular-resource/angular-resource.min",

  },

  "shim": {
    "angular": { exports: "angular"},
    "angular-ui-router": { deps: ['angular'] },
    "angular-resource": { deps: ['angular']},
    "routes": { deps: ['angular', 'angular-ui-router']}
  }
});

require([
  'angular',
  'routes',
  'angular-resource'
],

function(angular, routes, ngResource) {

  'use strict';

  var app = angular.module('app', [
    'ui.router',
    'ngResource'
  ])

  .run(function($rootScope, $state){

    $rootScope.$state = $state;

    $state.transitionTo('homeState');

    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {
      $state.previous = fromState;
    });

  })

  // let api html content render
  .config(function($sceDelegateProvider){
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        '/wp-json/*'
    ]);
  })

  .config(routes)
  .constant('VIEWS', 'wp-content/themes/wpspa/app/views/')
  .constant('API', '/wp-json/');

  var $html = angular.element(document.getElementsByTagName('html')[0]);

  angular.element(document).ready(function(){
      $html.addClass('ng-app');
      angular.bootstrap($html, [app.name]);
  });


  // home

  app.controller('homeController', ['$scope', '$sce', '$resource', 'API', function ($scope, $sce, $resource, API) {

    var posts = $resource(API + 'posts');


    $scope.getPosts = function() {

      $scope.posts = [];

      posts.query().$promise

        .then(function (data){

          $scope.posts = data;

        });
    };

    $scope.renderHtml = function(html_code) {
       return $sce.trustAsHtml(html_code);
    }

    $scope.getPosts();


  }]);


});
