/* input-text-area.directive.js */

/**
 * @desc directiva que permite la creacion de un input texto de tipo busqueda y deshabilitado
 * @example <input-text-search></input-text-search>
 */
angular
    .module('app')
    .directive('inputTextSearch', inputTextSearch);

function inputTextSearch() {
    var directive = {
        restrict: 'E',
        scope: {
            textPlaceholder: "@",
            action: "@",
            inputDisabled: "@",
            inputLabel: "@",
            inputRequired: "@",
            inputForm: "@",
            inputName: "@",
            inputModel: "@"
        },
        compile: compileFunction
    };
    return directive;

    function compileFunction(element, attributes) {
        var inputRequired = "";
        if (angular.isUndefined(attributes.inputDisabled)) {
            attributes.inputDisabled = "";
        } else if (attributes.inputDisabled) {
            attributes.inputDisabled = "disabled";
            attributes.action = "";
        }
        if (attributes.inputRequired) {
            inputRequired = 'required';
        }
        var template = '';
        /*template += '<div class="form-group">';*/
        template += '<div class="form-group" ng-class="{ \'has-error\' : ' + attributes.inputForm + '.' + attributes.inputName + '.$invalid && !' + attributes.inputForm + '.' + attributes.inputName + '.$pristine }">\n';
        template += '<label>' + attributes.inputLabel + '</label>';
        template += '<div class="input-group">';
        template += '<input ' + attributes.inputDisabled + ' type="text" class="form-control" name="' + attributes.inputName + '" ng-model="' + attributes.inputModel + '" placeholder="' + attributes.textPlaceholder + '" ng-click="' + attributes.action + '" ' + inputRequired + ' readonly>';
        if(attributes.inputRequired) {
            template += '\t<p ng-show="' + attributes.inputForm + '.' + attributes.inputName + '.$error.required && !' + attributes.inputForm + '.' + attributes.inputName + '.$pristine" class="help-block">' + attributes.messageRequired + '</p>\n';
        }
        template += '<span class="input-group-btn">';
        template += '<button class="btn btn-default" type="button" ng-click="' + attributes.action + '"><span class="glyphicon glyphicon-search"></span></button>';
        template += '</span>';
        template += '</div>';
        template += '</div>';
        element.html(template);
    }
}
