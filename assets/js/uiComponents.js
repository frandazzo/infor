//componente sommatore
(function(){

	var ns = window.infor || {};
	window.infor = ns;


	ns.uiComponents = window.infor.uiComponents  || {};

	ns.uiComponents.sommatore = {};

	ns.uiComponents.sommatore.init = function(resultLabelSelector, addendo1InputSelector, addendo2InputSelector){
		

		$(addendo1InputSelector ).keydown(function(){

			$(resultLabelSelector).html(
					window.infor.myMath.somma($(addendo1InputSelector).val(), $(addendo2InputSelector).val())
				);
			
		});

		$(addendo2InputSelector ).keydown(function(){

			$(resultLabelSelector).html(
					window.infor.myMath.somma($(addendo1InputSelector).val(), $(addendo2InputSelector).val())
				);
			
		});
	}

	
	


})();

