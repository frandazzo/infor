app.controller('utentiController',function($scope){

	$scope.persone = [];

	$scope.nome = '';

	$scope.addPerson = function (){
			$scope.persone.push($scope.nome);
			$scope.nome = '';
	}

	$scope.sendToServer = function(){
		alert($scope.persone.join(','));
	}



});

app.controller('prestazioniController',function($scope){

	$scope.persone = [];

	$scope.persona = {};
	 $scope.persona.modifica = false;
	
	 $scope.copy={};
	$scope.addPerson = function (){
			$scope.persone.push($scope.persona);
			$scope.persona= {};
			
	}

	$scope.modifica = function(item){
		item.modifica=true;
		$scope.copy=angular.copy(item);
	}

	$scope.annulla = function(item){
		
		item.modifica=false;

	}

	$scope.salva = function(item){
		
		
		
		// item.cognome =$scope.copy.cognome;
		// item.nome =$scope.copy.nome;

		for (property in $scope.copy) {
			item[property] = $scope.copy[property];
		}
		item.modifica= false;

		
		$scope.copy = {};
	}




});

