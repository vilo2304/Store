/* input-text-area.directive.js */

/**
 * @desc directiva que permite la creacion de un div que contiene una imagen a mostrar
 * @example <image-content></image-content>
 */
angular
    .module('app')
    .directive('imageContent', imageContent);

function imageContent() {
    var directive = {
        restrict: 'E',
        scope: {
            urlImageContent: "@"
        },
        compile: compileFunction
    };
    return directive;

    function compileFunction(element, attributes) {        
        var template = '';        
        template += '<img ng-src="' + attributes.urlImageContent + '" width="101" height="110" class="img-thumbnail">';        
        element.html(template);
    }
}
