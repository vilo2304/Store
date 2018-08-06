/* form-modal-link.directive.js */

/**
 * @desc directiva que permite la creacion de un input de tipo boton con etiqueta <button> para realizar envio de formulario
 * @example <form-bbutton></form-bbutton>
 */
angular
    .module('app')
    .directive('formBbutton', formBbutton);

function formBbutton() {
    var directive = {
        restrict: 'E',
        transclude: false,
        scope: {
            buttonName: "@",
            buttonAction: "@"
        },
        compile: compileFunction
    };
    return directive;

    function compileFunction(element, attributes) {
        var template = '';
        template += '<b class="btn btn-primary" ng-click="' + attributes.buttonAction + '"><i class="icon fa fa-user-plus"></i> <span ng-bind="' + attributes.buttonName + '"></span></b>';
        element.html(template);
    }
}
