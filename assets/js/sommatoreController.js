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


app.controller('formController', ['$scope', function($scope){

 $scope.submitForm = function (){
 	console.log($scope.user);
 };
	

}]);
app.controller('formAnagraficaClienteController',['$scope','$http',function($scope,$http){
	$scope.cliente={};
    $scope.submitForm = function (){
 	console.log($scope.user);
 	var promise= $http.post('http://10.0.0.196:9080/api/v1/DBFrezza/documento?utente=TeamSa&azienda=10&_op=search',
 		{
			items: [
				{
					comparer: 0,
					operator: 0,
					propertyName: "tipodoc",
					value: "22"
				}
			]
		},
		{
			headers:{
				Authorization:'Basic d2ViYXBpYWRtaW46ZGVmYXVsdA==',
				'Authorization-Scope':'DBFrezza'
				}
		}
 		);

 	promise.then(
 		function(response){
 			console.log(response);
 		}, 
 		function(errorresponse){
 			console.log(errorresponse.headers());
 		}
 	);

 	};
}]);
app.controller('registerController', ['$scope', function($scope){
	$scope.colorlist =
	[
		{
			id: "1",
			value :"Giallo",
			tipocolore :"sfumato"
		},
		{
			id :"2",
			value :"Verde",
			tipocolore :"vivido"
		},
		{
			id :"3",
			value :"Arancione",
			tipocolore :"vivido"
		},
		{
			id :"4",
			value :"Rosso",
			tipocolore :"perplesso"
		}
	];

	$scope.numbers = [5,6,3,7,9,4,5];

	$scope.user = {};
	$scope.user.colorePref=$scope.colorlist[1].id;

	$scope.user.sviluppatore="nope";
	$scope.user.tappezziere="sure";
	$scope.user.consulente="nope";
 $scope.submitForm = function (){
 	console.log($scope.user);
 };
	

}]);


app.directive('mail', function($q, $timeout) {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      var usernames = ['ciccio@ciccio.it', 'davide@infor.it'];

      ctrl.$asyncValidators.mail = function(modelValue, viewValue) {

        if (ctrl.$isEmpty(modelValue)) {
          // consider empty model valid
          return $q.resolve();
        }

        var def = $q.defer();

        $timeout(function() {
          // Mock a delayed response
          if (usernames.indexOf(modelValue) === -1) {
            // The username is available
            def.resolve();
          } else {
            def.reject();
          }

        }, 2000);

        return def.promise;
      };
    }
  };
});