/* input-text-area.directive.js */

/**
 * @desc directiva que permite la creacion de un input texto utilizando estilos prederminados de validacion
 * @example <input-text-area></input-text-area>
 */
angular
        .module('app')
        .directive('inputTextArea', inputTextArea);

function inputTextArea() {
    var directive = {
        restrict: 'E',
        scope: {
            inputModel: "@",
            inputForm: "@",
            inputName: "@",
            inputLabel: "@",
            inputRows: "@",
            inputCols: "@",
            inputRequired: "@",
            messageRequired: "@",
            inputMinLength: "@",
            messageMinLength: "@",
            inputMaxLength: "@",
            messageMaxLength: "@"
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
        var inputRows = "";
        var inputCols = "";
        if (attributes.inputRequired) {
            inputRequired = 'required';
        }
        if (attributes.inputRows !== "") {
            inputRows = 'rows="' + attributes.inputRows + '"';
        }
        if (attributes.inputCols !== "") {
            inputCols = 'cols="' + attributes.inputCols + '"';
        }
        if (attributes.inputMinLength !== "") {
            inputMinLength = 'ng-minlength="' + attributes.inputMinLength + '"';
            inputMinLengthShow = true;
        }
        if (attributes.inputMaxLength !== "") {
            inputMaxLength = 'ng-maxlength="' + attributes.inputMaxLength + '"';
            inputMaxLengthShow = true;
        }

        var template = '';
        template += '<div class="form-group" ng-class="{ \'has-error\' : ' + attributes.inputForm + '.' + attributes.inputName + '.$invalid && !' + attributes.inputForm + '.' + attributes.inputName + '.$pristine }">\n';
        template += '\t<label>' + attributes.inputLabel + '</label>\n';
        template += '\t<textarea name="' + attributes.inputName + '" '+ inputRows +' '+ inputCols +' class="form-control" ng-model="' + attributes.inputModel + '" '+ inputRequired +' '+ inputMinLength +' '+ inputMaxLength +' />\n';
        if(attributes.inputRequired) {
            template += '\t<p ng-show="' + attributes.inputForm + '.' + attributes.inputName + '.$error.required && !' + attributes.inputForm + '.' + attributes.inputName + '.$pristine" class="help-block">' + attributes.messageRequired + '</p>\n';
        }
        if(inputMinLengthShow) {
            template += '\t<p ng-show="' + attributes.inputForm + '.' + attributes.inputName + '.$error.minlength && !' + attributes.inputForm + '.' + attributes.inputName + '.$pristine" class="help-block">' + attributes.messageMinLength + '</p>\n';
        }
        if(inputMaxLengthShow) {
            template += '\t<p ng-show="' + attributes.inputForm + '.' + attributes.inputName + '.$error.maxlength && !' + attributes.inputForm + '.' + attributes.inputName + '.$pristine" class="help-block">' + attributes.messageMaxLength + '</p>\n';
        }
        template += '</div>\n';
        element.html(template);
    }
}