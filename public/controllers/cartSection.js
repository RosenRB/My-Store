app.controller('CartSectionController', function($scope, $http) {
    $http.get('http://localhost:8080/rest/cart/list').then(function(response){
        if(response.status == 200){  
            $scope.cart = response.data;
        }else{
            alert("Read products error");
        }
    });
});