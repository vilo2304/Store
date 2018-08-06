/* form-modal-button.directive.js */

/**
 * @desc directiva que permite la creacion de un input select utilizando estilos prederminados de validacion y utilizando opciones basicas
 * @example <form-modal-button></form-modal-button>
 */
angular
        .module('app')
        .directive('formModalButton', formModalButton);

function formModalButton() {
    var directive = {
        restrict: 'E',
        transclude: false,
        scope: {
            formName: "@",
            labelSubmit: "@",
            labelReset: "@",
            resetAction: "@"
        },
        compile: compileFunction
    };
    return directive;

    function compileFunction(element, attributes) {
        var template = '';
        template += '<div class="form-group">\n';
        template += '\t<button type="submit" class="btn btn-primary" ng-disabled="'+ attributes.formName +'.$invalid">' + attributes.labelSubmit + '</button>\n';
        template += '\t<button type="reset" class="btn btn-info" ng-click="' + attributes.resetAction + '">' + attributes.labelReset + '</button>\n';
        template += '</div>';
        element.html(template);
    }
}