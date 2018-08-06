/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular
        .module('app')
        .service('EquiposService', EquiposService);

EquiposService.$inject = ['$http', '$q'];

function EquiposService($http, $q) {

    var objectClass = "equipos";

    /*var service = {
        getAll: getAll,
        getById: getById,
        getByCriteria: getByCriteria,
        create: create,
        edit: edit,
        remove: remove
    };

    return service;

    function getAll() {
        return $http.get('api/' + objectClass + '/')
                .then(
                        function (response) {
                            return response.data;
                        },
                        function (errResponse) {
                            return $q.reject(errResponse);
                        }
                );
    }

    function getById(idEquipo, tipoEquipo, claseEquipo) {
        return $http.get('api/' + objectClass + '/id/' + idEquipo + '/' + tipoEquipo + '/' + claseEquipo)
                .then(
                        function (response) {
                            return response.data;
                        },
                        function (errResponse) {
                            return $q.reject(errResponse);
                        }
                );
    }

    function getByCriteria(data) {
        return $http.post('api/' + objectClass + '/findByCriteria', data)
                .then(
                        function (response) {
                            return response.data;
                        },
                        function (errResponse) {
                            return $q.reject(errResponse);
                        }
                );
    }

    function create(data) {
        return $http.post('api/' + objectClass + '/', data)
                .then(
                        function (response) {
                            return response.data;
                        },
                        function (errResponse) {
                            return $q.reject(errResponse);
                        }
                );
    }

    function edit(data) {
        return $http.put('api/' + objectClass + '/', data)
                .then(
                        function (response) {
                            return response.data;
                        },
                        function (errResponse) {
                            return $q.reject(errResponse);
                        }
                );
    }

    function remove(idEquipo, tipoEquipo, claseEquipo) {
        return $http.delete('api/' + objectClass + '/' + idEquipo + '/' + tipoEquipo + '/' + claseEquipo)
                .then(
                        function (response) {
                            return response.data;
                        },
                        function (errResponse) {
                            return $q.reject(errResponse);
                        }
                );
    }*/
}
