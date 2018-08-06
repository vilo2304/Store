/* section-row.directive.js */

/**
 * @desc directiva que permite la creacion de un input select utilizando estilos prederminados de validacion y utilizando opciones basicas
 * @example <section-row></section-row>
 */
angular
    .module('app')
    .directive('inputDate', inputDate);

function inputDate() {
    var directive = {
        restrict: 'E',
        transclude: true,
        scope: {
            inputLabel: "@",
            inputModel: "@",
            inputName: "@",
            inputRequired: "@",
            messageRequired: "@"
        },
        compile: compileFunction
    };
    return directive;

    function compileFunction(element, attributes) {
        var template = '';
        var inputRequired = "";
        if (attributes.inputRequired) {
            inputRequired = 'required';
        }
        template += '\t<label>' + attributes.inputLabel + '</label>\n';
        template += '\t<div class="input-group date" class="datetimepicker">\n';
        template += '\t<div class="input-group-addon">\n';
        template += '\t\t<div ng-transclude>\n';
        template += '\t\t<div>\n';
        template += '\t\t<span class="glyphicon glyphicon-calendar datetimepicker"></span>\n';
        template += '\t</div>';
        template += '\t</div>';

        if (attributes.inputRequired) {
            template += '\t<p ng-show="' + attributes.inputForm + '.' + attributes.inputName + '.$error.required && !' + attributes.inputForm + '.' + attributes.inputName + '.$pristine" class="help-block">' + attributes.messageRequired + '</p>\n';
        }
        element.html(template);
    }
}
