/* section-row.directive.js */

/**
 * @desc directiva que permite la creacion de un input select utilizando estilos prederminados de validacion y utilizando opciones basicas
 * @example <section-row></section-row>
 */
angular
        .module('app')
        .directive('sectionRow', sectionRow);

function sectionRow() {
    var directive = {
        restrict: 'E',
        transclude: true,
        compile: compileFunction
    };
    return directive;

    function compileFunction(element, attributes) {
        var template = '';
        template += '<div class="row" ng-transclude>\n';
        template += '</div>';
        element.html(template);
    }
}