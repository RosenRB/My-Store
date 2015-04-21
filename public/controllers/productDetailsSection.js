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
    	$http.post('http://localhost:8080/rest/cart/add', $scope.details).then(function(response){
	        if(response.status == 200){
	            //$scope.details = response.data;
	            alert(response.data);
	        }else{
	            alert('Showing cart error');
	        }
    	});
    }
});