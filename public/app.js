var app = angular.module('myStore', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: "/views/productsSection.html",
        controller: 'ProductsSectionController'
    })
    .when('/product/:alias', {
    	templateUrl: "/views/productDetailsSection.html",
    	controller: 'ProductDetailsSectionController'
    });
});
