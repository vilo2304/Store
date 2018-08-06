/* input-text.directive.js */

/**
 * @desc directiva que permite la creacion de un input texto utilizando estilos prederminados de validacion
 * @example <input-text></input-text>
 */
angular
    .module('app')
    .directive('inputText', inputText);

function inputText() {
    var directive = {
        restrict: 'E',
        scope: {
            inputModel: "@",
            inputForm: "@",
            inputName: "@",
            inputLabel: "@",
            inputRequired: "@",
            messageRequired: "@",
            inputMinLength: "@",
            messageMinLength: "@",
            inputMaxLength: "@",
            messageMaxLength: "@",
            inputDisabled: "@"
        },
        compile: compileFunction
    };
    return directive;

    function compileFunction(element, attributes) {
        var inputRequired = "";
        var inputMinLength = "";
        var inputMaxLength = "";
        var inputMinLengthShow = false;
        var inputMaxLengthShow = false;
        if (attributes.inputRequired) {
            inputRequired = 'required';
        }
        if (attributes.inputMinLength !== "") {
            inputMinLength = 'ng-minlength="' + attributes.inputMinLength + '"';
            inputMinLengthShow = true;
        }
        if (attributes.inputMaxLength !== "") {
            inputMaxLength = 'ng-maxlength="' + attributes.inputMaxLength + '"';
            inputMaxLengthShow = true;
        }

        if (angular.isUndefined(attributes.inputDisabled)) {
            attributes.inputDisabled = "";
        } else if (attributes.inputDisabled) {
            attributes.inputDisabled = "disabled";
        }


        var template = '';
        template += '<div class="form-group" ng-class="{ \'has-error\' : ' + attributes.inputForm + '.' + attributes.inputName + '.$invalid && !' + attributes.inputForm + '.' + attributes.inputName + '.$pristine }">\n';
        template += '\t<label>' + attributes.inputLabel + '</label>\n';
        template += '\t<input ' + attributes.inputDisabled + ' type="text" name="' + attributes.inputName + '" class="form-control" ng-model="' + attributes.inputModel + '" ' + inputRequired + ' ' + inputMinLength + ' ' + inputMaxLength + ' />\n';
        if (attributes.inputRequired) {
            template += '\t<p ng-show="' + attributes.inputForm + '.' + attributes.inputName + '.$error.required && !' + attributes.inputForm + '.' + attributes.inputName + '.$pristine" class="help-block">' + attributes.messageRequired + '</p>\n';
        }
        if (inputMinLengthShow) {
            template += '\t<p ng-show="' + attributes.inputForm + '.' + attributes.inputName + '.$error.minlength && !' + attributes.inputForm + '.' + attributes.inputName + '.$pristine" class="help-block">' + attributes.messageMinLength + '</p>\n';
        }
        if (inputMaxLengthShow) {
            template += '\t<p ng-show="' + attributes.inputForm + '.' + attributes.inputName + '.$error.maxlength && !' + attributes.inputForm + '.' + attributes.inputName + '.$pristine" class="help-block">' + attributes.messageMaxLength + '</p>\n';
        }
        template += '</div>\n';
        element.html(template);
    }
}
