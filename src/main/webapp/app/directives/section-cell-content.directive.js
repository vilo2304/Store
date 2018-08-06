/* section-row.directive.js */

/**
 * @desc directiva que permite la creacion de un input select utilizando estilos prederminados de validacion y utilizando opciones basicas
 * @example <section-row></section-row>
 */
angular
    .module('app')
    .directive('sectioncellContent', sectioncellContent);

function sectioncellContent() {
    var directive = {
        restrict: 'E',
        scope: {
            title: "@",
            contentText: "@"
        },
        compile: compileFunction
    };
    return directive;

    function compileFunction(element, attributes) {
        var template = '';
        template += '<div class="form-group">';
        template += '<label>' + attributes.titleText + '</label>';
        template += '<h5 ng-bind="' + attributes.contentText + '"></h5>';
        template += '</div>';
        element.html(template);
    }
}
