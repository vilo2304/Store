/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module('userApp', []);
var baseAddress = '/saveOrder';
var url = "";

app.controller('userController', function ($scope, $http, $timeout) {
    $scope.items = [];
    $scope.item = null;
    $scope.order = null;
    $scope.client = null;
   
   
    //get all Users    //get all Users

    /*$scope.getAll = function () {
     $http.get(baseAddress).success(function (data) {
     $scope.users = data.user;
     }).error(function (data) {
     $scope.error = "An Error has occured while Loading users! " + data.ExceptionMessage;
     });
     $timeout($scope.getAll, 10000);
     };*/
    // add User
    $scope.add = function () {
        var currentItem = this.item;
        if (currentItem !== null && currentItem.cant !== null) {
            $scope.items.push(currentItem);
            this.item = null;
            $('#userModel').modal('hide');
        }

    };
    
    
    $scope.createOrder = function () {
        var currentOrder = this.order;
        if (currentOrder !== null ) {
            $http.post(baseAddress, currentOrder).success(function (data) {
                $scope.addMode = false;
                currentOrder.id = data;
                $scope.users.push(currentOrder);
                //reset form
                $scope.order = null;               
            }).error(function (data) {
                $scope.error = "An Error has occured while Adding user! " + data.ExceptionMessage;
            });
        }
    };


    // delete User
    $scope.delete = function () {
         var currentItem = this.item;
       var index = this.items.indexOf(currentItem);
        $scope.items.splice(index, 1);  
         $('#confirmModal').modal('hide');
    };
    //Model popup events
    $scope.showadd = function () {
        $scope.item = null;
        $('#userModel').modal('show');
    };
    
    $scope.showconfirm = function (data) {
        $scope.item = data;
        $('#confirmModal').modal('show');
    };
    $scope.cancel = function () {
        $scope.item = null;
        $('#userModel').modal('hide');
    };
    // initialize your users data
    //$scope.getAll();
});