app.controller('bodyController',function($scope){

	$scope.utente = 'ciccillo';

	


});



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

app.controller('prestazioniController',function($scope, $timeout){


	$scope.showConfirm = false;
	$scope.persone = [];

	$scope.persona = {};
	$scope.persona.modifica = false;
	
	$scope.copy={};
	$scope.itemToDelete={};

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

		// for (property in $scope.copy) {
		// 	item[property] = $scope.copy[property];
		// }
		// item.modifica= false;

		var indexOfItem = $scope.persone.findIndex(i => i.nome === item.nome && i.cognome === item.cognome);
		$scope.persone[indexOfItem]=angular.copy($scope.copy);
		$scope.persone[indexOfItem].modifica = false;

		$scope.copy = {};
	}

	$scope.cancella = function(){
		$timeout(function() {
			var indexOfItem = $scope.persone.findIndex(i => i.nome === $scope.itemToDelete.nome && i.cognome === $scope.itemToDelete.cognome);
			$scope.persone.splice(indexOfItem, 1);
			$scope.showConfirm = false;
			$scope.itemToDelete = {};
		}, 3000);
	}

	$scope.showdialog = function(item){
		$scope.showConfirm = true;
		$scope.itemToDelete = item;
	}

	$scope.hidedialog = function(){
		$scope.showConfirm = false;
		$scope.itemToDelete = {};
	}



});

