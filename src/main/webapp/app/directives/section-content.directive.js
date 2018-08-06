/* section-content.directive.js */

/**
 * @desc directiva que permite la creacion de un input select utilizando estilos prederminados de validacion y utilizando opciones basicas
 * @example <section-content></section-content>
 */
angular
        .module('app')
        .directive('sectionContent', sectionContent);

function sectionContent() {
    var directive = {
        restrict: 'E',
        transclude: true,
        scope: {
            sectionTitle: "@"
        },
        compile: compileFunction
    };
    return directive;

    function compileFunction(element, attributes) {       
        var template = '';
        template += '<section class="content">\n';
        template += '\t<div class="box box-primary">\n';
        template += '\t\t<div class="box-header with-border">\n';
        template += '\t\t\t<h3 class="box-title">' + attributes.sectionTitle + '</h3>\n';
        template += '\t\t</div>\n';
        template += '\t\t<div class="box-body" ng-transclude>\n';
        template += '\t\t</div>\n';
        template += '\t</div>\n';
        template += '</section>\n';
        element.html(template);
    }
}
