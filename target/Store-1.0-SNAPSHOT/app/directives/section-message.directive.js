/* section-content.directive.js */

/**
 * @desc directiva que permite la creacion de un input select utilizando estilos prederminados de validacion y utilizando opciones basicas
 * @example <section-content></section-content>
 */
angular
        .module('app')
        .directive('sectionMessage', sectionMessage);

function sectionMessage() {
    var directive = {
        restrict: 'E',
        scope: {
            inputShow: "@",
            inputTest: "@",
            inputMessage: "@"
        },
        compile: compileFunction
    };
    return directive;

    function compileFunction(element, attributes) {
        var template = '';
        template += '<div class="box-error text-error animate-show animate-hide" ng-show="' + attributes.inputShow + '"><strong>' + attributes.inputMessage + '</strong></div>';
        element.html(template);
    }
}
