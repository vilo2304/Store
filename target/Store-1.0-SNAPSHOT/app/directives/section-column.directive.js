/* section-column.directive.js */

/**
 * @desc directiva que permite la creacion de un input select utilizando estilos prederminados de validacion y utilizando opciones basicas
 * @example <section-column></section-column>
 */
angular
        .module('app')
        .directive('sectionColumn', sectionColumn);

function sectionColumn() {
    var directive = {
        require: '^^sectionRow',
        restrict: 'E',
        transclude: true,
        scope: {
            styleClass: "@"
        },
        compile: compileFunction
    };
    return directive;

    function compileFunction(element, attributes) {
        var template = '';
        template += '<div class="'+ attributes.styleClass +'" ng-transclude>\n';
        template += '</div>';
        element.html(template);
    }
}