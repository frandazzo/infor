angular.module('inforMiddleware',[])
	.service('mathService', function(){

		this.gotResults = [];
		this.executedAlmostOneTime = 'no';

		var somma = function(a1, a2){
			this.executedAlmostOneTime = 'si';
			var result = parseFloat(a1) + parseFloat(a2);
			this.gotResults.push('in data ' + formatDate(new Date()) + ' è stato aggiunto il risultato: ' + result);
			return result;
		}

		function formatDate(date) {
			  var hours = date.getHours();
			  var minutes = date.getMinutes();
			  var ampm = hours >= 12 ? 'pm' : 'am';
			  hours = hours % 12;
			  hours = hours ? hours : 12; // the hour '0' should be '12'
			  minutes = minutes < 10 ? '0'+minutes : minutes;
			  var strTime = hours + ':' + minutes + ' ' + ampm;
			  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
			}






		this.somma = somma;

	}).factory('mathService1', function(){

		var gotResults = [];
		var executedAlmostOneTime = 'no';


		function formatDate(date) {
			  var hours = date.getHours();
			  var minutes = date.getMinutes();
			  var ampm = hours >= 12 ? 'pm' : 'am';
			  hours = hours % 12;
			  hours = hours ? hours : 12; // the hour '0' should be '12'
			  minutes = minutes < 10 ? '0'+minutes : minutes;
			  var strTime = hours + ':' + minutes + ' ' + ampm;
			  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
			}

		var somma = function(a1, a2){
			executedAlmostOneTime = 'si';
			var result = parseFloat(a1) + parseFloat(a2);
			gotResults.push('in data ' + formatDate(new Date()) + ' è stato aggiunto il risultato: ' + result);
			return result;
		}

		
		return {
			somma:somma,
			gotResults: gotResults,
			executedAlmostOneTime: executedAlmostOneTime
		};

	});