/**
 * Created by Seth on 1/10/2018.
 */
angular.module('myApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '../views/home.html',
            controller: 'homeCtrl'
        });

});