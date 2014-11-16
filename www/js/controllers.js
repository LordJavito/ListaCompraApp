angular.module('app.controllers', [])

.controller('HomeCtrl', ['$scope', function($scope) {
}])

.controller('ListaCtrl', ['$scope', 'Data', function($scope, Data) {
	$scope.nuevoProducto = {};
	$scope.productos = [];

	$scope.addProducto = function(){
		$scope.productos.push(
			{name: $scope.nuevoProducto.name, done: "false"}
		);
		console.log($scope.productos);
	};

	$scope.moveToCart = function(){
		/*console.log($scope.nuevoProducto.name);*/
		Data.add($scope.nuevoProducto.name);
	}

}])

.controller('CestaCtrl', ['$scope', 'Data', function($scope, Data) {
	$scope.cart = [];

	$scope.getProductsFromCart = function(){
		$scope.cart = Data.get();
		/*console.log($scope.cart);*/
	}

	$scope.getProductsFromCart();
}]);