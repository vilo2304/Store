/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular
        .module('app')
        .controller('IndexController', IndexController);

IndexController.$inject = ['$rootScope', 'IndexService', 'APP_CONST', '$window'];

function IndexController($rootScope, IndexService, APP_CONST) {
    $rootScope.userSispremConected = "";

    $rootScope.isEmpty = function (obj) {
        var eval = obj === null || obj === {} || typeof obj === "undefined";
        return eval;
    };



   
}