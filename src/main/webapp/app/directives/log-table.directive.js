/* log-table.directive.js */

/**
 * @desc directiva que permite la creacion de un input select utilizando estilos prederminados de validacion y utilizando opciones basicas
 * @example <log-table></log-table>
 */
angular
    .module('app')
    .directive('logTable', logTable);

function logTable() {
    var directive = {
        restrict: 'E',
        transclude: false,
        scope: {
            headerExp: "@",
            headerItem: "@",
            itemExp: "@",
            valueItem: "@",
            bodyExp: "@",
            index: "@",
            nameAction: "@",
            nameActionPrimary: "@",
            nameActionPlus:"@",
            buttonDetail: "@",
            buttonDelete: "@"
        },
        compile: compileFunction
    };
    return directive;

    function compileFunction(element, attributes) {
        var template = '';
        var swDelete = false;
        var swDetail = false;
        var swSelect = false;
        if (angular.isDefined(attributes.nameActionPrimary))
            swDetail = true;

        if (angular.isDefined(attributes.nameAction))
            swDelete = true;

        if (angular.isDefined(attributes.nameActionPlus))
            swSelect = true;

        template += '<table class="table table-striped">\n';
        template += '\t<thead>\n';
        template += '\t\t<th ng-repeat="' + attributes.headerExp + '">{{' + attributes.headerItem + '}}</th>\n';
        template += '\t</thead>\n';
        template += '\t<tbody>\n';
        template += '\t\t<tr ng-repeat="' + attributes.bodyExp + '">\n';
        template += '\t\t\t<td ng-hide="$last" ng-repeat="' + attributes.itemExp + '">{{' + attributes.valueItem + '}}</td>\n';
        template += '\t\t\t<td ng-show="' + swDetail + '"><a class="btn btn-primary" ng-click="' + attributes.nameActionPrimary + '(' + attributes.index + ');"><i class="fa fa-edit"></i></a></td>';
        template += '\t\t\t<td ng-show="' + swDelete + '"><a class="btn btn-danger" ng-click="' + attributes.nameAction + '(' + attributes.index + ');"><i class="fa fa-trash-o"></i></a></td>';
        template += '\t\t\t<td ng-show="' + swSelect + '"><a class="btn btn-primary" ng-click="' + attributes.nameActionPlus + '(' + attributes.index + ');"><i class="fa fa-check"></i></a></td>';
        template += '\t\t</tr>\n';
        template += '\t</tbody>\n';
        template += '</table>\n';
        element.html(template);
    }
}
