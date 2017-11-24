var app = angular.module('sommatore', ['inforMiddleware']);
app.controller('sommatoreController', ['$scope', 'mathService',function($scope, mathService1){
	$scope.calcola = function(){
		$scope.result = mathService1.somma($scope.addendo1, $scope.addendo2); //parseFloat($scope.addendo1) + parseFloat($scope.addendo2);
		
		if ($scope.result > 25){
			$scope.coloredResult = null;
		}else{
			$scope.coloredResult = true;
		}
	}
}]);

app.controller('historyController', ['$scope','mathService', function($scope, mathService1){


	$scope.history = mathService1.gotResults;
	//$scope.executedAlmostOneTime = mathService1.executedAlmostOneTime;
	$scope.$watch(	function(){
						return mathService1.executedAlmostOneTime;
					},
					function(newValue, oldValue, scope){
						console.log('new val: ' +newValue);
						console.log('old val: ' +oldValue);

						console.log('scope: ' +scope);

						$scope.executedAlmostOneTime = newValue;
					}
	);

	




}]);