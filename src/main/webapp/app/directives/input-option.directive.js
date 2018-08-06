/* input-option.directive.js */

/**
 * @desc directiva que permite la creacion de un input select utilizando estilos prederminados de validacion y utilizando opciones basicas
 * @example <input-option></input-option>
 */
angular
        .module('app')
        .directive('inputOption', inputOption);

function inputOption() {
    var directive = {
        restrict: 'E',
        transclude: true,
        scope: {
            inputModel: "@",
            inputForm: "@",
            inputName: "@",
            inputLabel: "@",
            inputRequired: "@",
            messageRequired: "@"
        },
        compile: compileFunction
    };
    return directive;

    function compileFunction(element, attributes) {
        var inputRequired = "";
        if (attributes.inputRequired) {
            inputRequired = 'required';
        }

        var template = '';
        template += '<div class="form-group" ng-class="{ \'has-error\' : ' + attributes.inputForm + '.' + attributes.inputName + '.$invalid && !' + attributes.inputForm + '.' + attributes.inputName + '.$pristine }">\n';
        template += '\t<label>' + attributes.inputLabel + '</label>\n';
        template += '\t<select name="' + attributes.inputName + '" class="form-control" ng-model="' + attributes.inputModel + '" '+ inputRequired +' ng-transclude></select>\n';
        if(attributes.inputRequired) {
            template += '\t<p ng-show="' + attributes.inputForm + '.' + attributes.inputName + '.$error.required && !' + attributes.inputForm + '.' + attributes.inputName + '.$pristine" class="help-block">' + attributes.messageRequired + '</p>\n';
        }
        template += '</div>\n';
        element.html(template);
    }
}