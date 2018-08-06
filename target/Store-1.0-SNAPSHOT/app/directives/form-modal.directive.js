/* form-modal.directive.js */

/**
 * @desc directiva que permite la creacion de un input select utilizando estilos prederminados de validacion y utilizando opciones basicas
 * @example <form-modal></form-modal>
 */
angular
        .module('app')
        .directive('formModal', formModal);

function formModal() {
    var directive = {
        restrict: 'E',
        transclude: true,
        scope: {
            formTitle: "@",
            formName: "@",
            formSubmitAction: "@"
        },
        compile: compileFunction
    };
    return directive;

    function compileFunction(element, attributes) {
        var template = '';
        template += '<div class="modal-header">\n';
        template += '\t<h3 class="modal-title">' + attributes.formTitle + '</h3>\n';
        template += '</div>\n';
        template += '<div class="modal-body">\n';
        template += '\t<form name="' + attributes.formName + '" ng-submit="' + attributes.formSubmitAction + '" novalidate ng-transclude>\n';
        template += '\t</form>\n';
        template += '</div>\n';
        element.html(template);
    }
}
