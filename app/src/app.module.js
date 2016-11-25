(function () {
    'use strict';
    angular
        .module('angularisidad',['ngRoute'])
        .config(appRoutes);

    appRoutes.$inject = ['$routeProvider'];

    function appRoutes ($routeProvider) {
        $routeProvider.when('/',{
            controller: 'homeController',
            controllerAs: 'ctrl',
            templateUrl: 'views/home.tpl.html',
        })
    }

})();
