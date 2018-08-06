/* input-options.directive.js */

/**
 * @desc directiva que permite la creacion de un input select utilizando estilos prederminados de validacion y utilizando opciones basicas
 * @example <input-options></input-options>
 */
angular
        .module('app')
        .directive('inputOptions', inputOptions);

function inputOptions() {
    var directive = {
        restrict: 'E',
        transclude: true,
        scope: {
            inputModel: "@",
            inputForm: "@",
            inputName: "@",
            inputLabel: "@",
            inputRequired: "@",
            expressionOptions: "@",
            changeMethod: "@",
            messageRequired: "@"
        },
        compile: compileFunction
    };
    return directive;

    function compileFunction(element, attributes) {
        var inputRequired = "";
        var ngChangeMethod = "";
        if (attributes.inputRequired) {
            inputRequired = 'required';
        }
        if (attributes.changeMethod !== "") {
            ngChangeMethod = 'ng-change="'+ attributes.changeMethod +'"';
        }
        var template = '';
        template += '<div class="form-group" ng-class="{ \'has-error\' : ' + attributes.inputForm + '.' + attributes.inputName + '.$invalid && !' + attributes.inputForm + '.' + attributes.inputName + '.$pristine }">\n';
        template += '\t<label>' + attributes.inputLabel + '</label>\n';
        template += '\t<select name="' + attributes.inputName + '" class="form-control" '+ ngChangeMethod +' ng-model="' + attributes.inputModel + '" ng-options="' + attributes.expressionOptions + '" '+ inputRequired +' ng-transclude></select>\n';
        if(attributes.inputRequired) {
            template += '\t<p ng-show="' + attributes.inputForm + '.' + attributes.inputName + '.$error.required && !' + attributes.inputForm + '.' + attributes.inputName + '.$pristine" class="help-block">' + attributes.messageRequired + '</p>\n';
        }
        template += '</div>\n';
        element.html(template);
    }
}