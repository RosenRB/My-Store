var app = angular.module('myStore', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: "/views/productsSection.html",
        controller: 'ProductsSectionController'
    })
    .when('/product/:id', {
    	templateUrl: "/views/productDetailsSection.html",
    	controller: 'ProductDetailsSectionController'
    });
});
