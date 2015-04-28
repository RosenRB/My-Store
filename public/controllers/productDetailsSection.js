app.controller('ProductDetailsSectionController', function($scope, $routeParams, $http) {
    var alias = $routeParams.alias;
    
    $http.get('http://localhost:8080/data/' + alias + '.json').then(function(response){
        if(response.status == 200){
            $scope.details = response.data;
        }else{
            alert('Showing details error');
        }
    });
    
    $scope.onAddToCartButtonClick = function (){
        var productData = {
            id: $scope.details.id,
            title: $scope.details.title,
            price: $scope.details.price
        };

    	$http.post('http://localhost:8080/rest/cart/add', productData).then(function(response){
	        if(response.status == 200){
	            //$scope.details = response.data
	            //alert(response.data);
	        }else{
                alert('Add to cart error');
	        }
    	});
    }
});