(function() {
    var app = angular.module('myStore', []);

    app.controller('ProductsSectionController', function($scope, $http) {

        var getProductsPromise = $http.get('http://localhost:8080/data/products.json');
        
        var getProductsObserver = function(response){
            if(response.status == 200){
                alert("Ura!");    
                $scope.products = response.data;
            }else{
                alert("Read products error");    
            }
        };
                
        getProductsPromise.then(getProductsObserver);
        
        //$http.get('data/products.json').then(function(res){
        //    $scope.products = res.data;
        //});
    });
})();
