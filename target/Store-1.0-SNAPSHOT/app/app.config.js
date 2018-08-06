/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular
    .module('app')
    .config(configure);

configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function configure($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/layout/main.html',
            controller: 'IndexController as Idx'
        })
        .state('404', {
            templateUrl: 'app/layout/404.html'
        })
        .state('500', {
            templateUrl: 'app/layout/500.html'
        })
        .state('equipos', {
            templateUrl: 'app/equipos/main.html',
            controller: 'EquiposController as Ctrl'
        });

    $locationProvider.html5Mode(true);
}
