/* input-email.directive.js */

/**
 * @desc directiva que permite la creacion de un input email utilizando estilos prederminados de validacion
 * @example <input-email></input-email>
 */
angular
        .module('app')
        .directive('inputEmail', inputEmail);

function inputEmail() {
    var directive = {
        restrict: 'E',
        scope: {
            inputModel: "@",
            inputForm: "@",
            inputName: "@",
            inputLabel: "@",
            messageEmailInvalid: "@",
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

        var template = '';
        template += '<div class="form-group" ng-class="{ \'has-error\' : ' + attributes.inputForm + '.' + attributes.inputName + '.$invalid && !' + attributes.inputForm + '.' + attributes.inputName + '.$pristine }">\n';
        template += '\t<label>' + attributes.inputLabel + '</label>\n';
        template += '\t<input type="email" name="' + attributes.inputName + '" class="form-control" ng-model="' + attributes.inputModel + '" '+ inputRequired +' '+ inputMinLength +' '+ inputMaxLength +' />\n';
        template += '\t<p ng-show="' + attributes.inputForm + '.' + attributes.inputName + '.$invalid && !' + attributes.inputForm + '.' + attributes.inputName + '.$pristine" class="help-block">' + attributes.messageEmailInvalid + '</p>\n';
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