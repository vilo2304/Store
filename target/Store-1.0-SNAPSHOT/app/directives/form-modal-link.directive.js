/* form-modal-link.directive.js */

/**
 * @desc directiva que permite la creacion de un input select utilizando estilos prederminados de validacion y utilizando opciones basicas
 * @example <form-modal-link></form-modal-link>
 */
angular
        .module('app')
        .directive('formModalLink', formModalButton);

function formModalButton() {
    var directive = {
        restrict: 'E',
        transclude: false,
        scope: {
            linkName: "@",
            linkAction: "@"
        },
        compile: compileFunction
    };
    return directive;

    function compileFunction(element, attributes) {
        var template = '';
        template += '<button type="submit" class="btn btn-primary" ng-click="' + attributes.linkAction + '">' + attributes.linkName + '</button>';
        element.html(template);
    }
}
