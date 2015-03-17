app.controller('ProductsSectionController', function($scope, $http) {
    $http.get('http://localhost:8080/data/products.json').then(function(response){
        if(response.status == 200){  
            $scope.products = response.data;
        }else{
            alert("Read products error");    
        }
    });
    
// LONGER VERSION TO UNDERSTAND IT BETTER
//
//    var getProductsPromise = $http.get('http://localhost:8080/data/products.json');
//
//    var getProductsObserver = function(response){
//        if(response.status == 200){  
//            $scope.products = response.data;
//        }else{
//            alert("Read products error");    
//        }
//    };
//
//    getProductsPromise.then(getProductsObserver);
});