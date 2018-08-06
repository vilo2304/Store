/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular
        .module('app')
        .controller('EquiposController', EquiposController);

EquiposController.$inject = ['EquiposService', 'DTOptionsBuilder', '$rootScope', 'DTColumnBuilder', '$uibModal', '$compile', '$scope', 'sweet'];

function EquiposController(EquiposService, DTOptionsBuilder, $rootScope, DTColumnBuilder, $uibModal, $compile, $scope, sweet) {
    var vm = this;
    var objectName = "Equipos";

     

    //Funcion para generar la peticion para la consulta paginada
    function serverData(sSource, aoData, fnCallback, oSettings) {
        //All the parameters you need is in the aoData variable
        // aoData contiene la configuracion generada por defecto por el datatable
        // Y se construye el JSON con los parametros para la consulta.
        // los parametros son
        // draw: contador con el numero de veces que se ha dado clic en las paginas
        // start: OFFSET o inicio de la pagina a consultar
        // length: tamaño de pagina
        // order: objeto que indica por cual columna se va a order la consulta y en que direccion (asc o desc).
        // search: objeto que contiene el texto a buscar por el filtro (caja de texto de buscar).
        // columns: array con objetos que describen las columnas del datatable con sus propiedades.
        var dataResult = {
            'draw': aoData[0].value,
            'start': aoData[3].value,
            'length': aoData[4].value,
            'order': aoData[2].value,
            'search': aoData[5].value,
            'columns': aoData[1].value
        };

        //Se consume el servicio con los parametros para el paginado
       /* EquiposService.getByCriteria(dataResult).then(function (result) {
            //Se envia el resultado al datatable para que lo renderice
            $rootScope.idEquipo = "";
            $rootScope.tipoEquipo = "";
            $rootScope.claseEquipo = "";
            this.indice = -1;
            fnCallback(result);
        });*/
    }


    //Funcion que renderiza el boton de editar en la tabla
    function editHtml(data, type, full, meta) {
        //data, recibe los datos que se cargan en la tabla, para rendirizado en la columna
        //Para enviar el json completo utilizar, un objeto vm.indicators[data.id] = data; y para llamarlo utilizar => indicators[' + data.codigo + '] 
        return '<a class="btn btn-primary" ng-click="Ctrl.openEditModal(\'' + data.emerEqpsProtcContrIncndPK.idEquipo + '\', \'' + data.emerEqpsProtcContrIncndPK.tipoEquipo + '\', \'' + data.emerEqpsProtcContrIncndPK.claseEquipo + '\')"><i class="fa fa-edit"></i></a> <a class="btn btn-danger" ng-click="Ctrl.deleteDataById(\'' + data.emerEqpsProtcContrIncndPK.idEquipo + '\', \'' + data.emerEqpsProtcContrIncndPK.tipoEquipo + '\', \'' + data.emerEqpsProtcContrIncndPK.claseEquipo + '\')"><i class="fa fa-trash-o"></i></a>';
    }

    function createdRow(row, data, dataIndex) {
        // La compilación para que podamos unir Directiva angular de la datatable
        //Esto permitirá que las columnas HTML creadas con javascript permitan el compilado y sintaxis de Angular
        $compile(angular.element(row).contents())($scope);
    }

    function configDataTable() {
        vm.angularDataTable = DTOptionsBuilder.newOptions()//Nombre para inicializar la tabla con Angular
                .withOption('createdRow', createdRow)
                .withOption('stateSave', true)
                .withOption('bLengthChange', false) //Para mostrar la cantidad de datos a mostrar por pagina
                .withFnServerData(serverData)
                .withDataProp('data')
                .withOption('processing', true)
                .withOption('serverSide', true)
                .withOption('paging', true)
                .withLanguage($rootScope.langData)
                .withDisplayLength(10);//Cantidad de datos a mostrar en la tabla
        vm.angularDataTableColumns = [
            DTColumnBuilder.newColumn('emerEqpsProtcContrIncndPK.idEquipo').withTitle("ID Equipo").withClass('all'),
            DTColumnBuilder.newColumn('emerTipoEqpsTbl.descr').withTitle("Tipo de Equipo"),
            DTColumnBuilder.newColumn('emerClaseEqpsTbl.descr').withTitle("Clase"),
            // la opcion searchable permite que la columna sea incluida a la barra de busqeuda si es true, y que la busqueda lo ignere si es false.
            DTColumnBuilder.newColumn(null).withTitle("Acciones").notSortable().renderWith(editHtml).withClass('all').withOption('searchable', false)
        ];
        vm.angularDataTableInstance = {};
    }
    configDataTable();//Llamado de la configuracion de la tabla
}