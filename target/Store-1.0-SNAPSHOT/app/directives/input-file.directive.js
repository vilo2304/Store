angular
        .module('app')
        .directive('inputFile', inputFile);

function inputFile() {
    var directive = {
        restrict: 'E',
        scope: {
            inputModel: "@",
            inputType: "@",
            inputForm: "@",
            inputName: "@",
            inputLabel: "@",
            inputBrowse: "@",
            inputRequired: "@",
            messageRequired: "@",
            inputNew: "@"
        },
        compile: compileFunction
    };
    return directive;

    function compileFunction(element, attributes) {
        var inputRequired = "";        
        if (attributes.inputRequired=="true") {
            inputRequired = 'required';
        }

        var template = ''; 
        template += '<div class="form-group" ng-class="{ \'has-error\' : ' + attributes.inputForm + '.' + attributes.inputName + '.$invalid && !' + attributes.inputForm + '.' + attributes.inputName + '.$pristine }">\n';
        template += '<label>' + attributes.inputLabel + '</label><br>\n';
        template += '\t<label class="btn btn-default btn-file">' + attributes.inputBrowse + '\n';
        template += '\t<input type="file" name="' + attributes.inputName + '" style="display: none;" class="form-control" ng-model="' + attributes.inputModel + '" '+ inputRequired +' onchange="angular.element(this).scope().uploadFile(this)" />\n';
        template += '\t</label>\n';
        
        if(attributes.inputRequired) {
            template += '\t<p ng-show="' + attributes.inputForm + '.' + attributes.inputName + '.$error.required && !' + attributes.inputForm + '.' + attributes.inputName + '.$pristine" class="help-block">' + attributes.messageRequired + '</p>\n';
        }
        
        template += '</div>\n';
        template += '<div class="form-group">\n';
        template += '<a href="#" class="thumbnail" style="width: 161px; height: 170px; display: block;">\n';
        
        scope = angular.element(element).scope();        
        
        if(attributes.inputNew=="true"){
            template += '<img id="photo-id" style="width: 151px; height: 160px; display: block;" src="img/thumbnail.svg" >\n';
        }else{
            //Mostrar SVG
            //Mostrar Otras imagenes
            template += '<img id="photo-id" style="width: 151px; height: 160px; display: block;" ng-src="data:{{'+ attributes.inputType +'}};base64,{{'+ attributes.inputModel +'}}" >\n';
        }
        
        template += '</a></div>\n';
        element.html(template);
    }
}