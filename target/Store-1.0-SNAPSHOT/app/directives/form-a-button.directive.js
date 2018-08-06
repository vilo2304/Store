/* form-modal-link.directive.js */

/**
 * @desc directiva que permite la creacion de un input de tipo boton con etiqueta <a> para que no realize el envío de formulario
 * @example <form-abutton></form-abutton>
 */
angular
    .module('app')
    .directive('formAbutton', formAbutton);

function formAbutton() {
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
        template += '<a class="btn btn-primary" ng-click="' + attributes.linkAction + '"><i class="icon fa fa-user-plus"></i> <span ng-bind="' + attributes.linkName + '"></span></a>';
        element.html(template);
    }
}
