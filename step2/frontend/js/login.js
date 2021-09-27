let schema = {
	username:'',
	password:'',
};

let services;

jQuery.fn.shake = function(interval,distance,times){
	interval = typeof interval == "undefined" ? 100 : interval;
	distance = typeof distance == "undefined" ? 10 : distance;
	times = typeof times == "undefined" ? 3 : times;
	var jTarget = $(this);
	jTarget.css('position','relative');
	for(var iter=0;iter<(times+1);iter++){
	   jTarget.animate({ left: ((iter%2==0 ? distance : distance*-1))}, interval);
	}
	return jTarget.animate({ left: 0},interval);
};


function makeLogin(){
	if(($("#username").val().trim(username).length > 0) && ($("#password").val().trim(password).length > 0))
	{
		let data;
		schema.username=$("#username").val();
		schema.password=$("#password").val();
		data = JSON.stringify(schema);
		$.ajax({
			type: "POST",
			url: services.origin.prourl + services.branches.baseurl + services.branches.login,
			data: data,
			contentType: 'application/json',
			dataType: 'json',
			cache: false,
			beforeSend: function(){ $("#login").val('Connecting...');},
		}).then(function(data) {
				if(data){
					sessionStorage.setItem('username', data.username);
					sessionStorage.setItem('password', data.password);
					window.location.href = "/admin/admin.html";
				}
				else{
					//Shake animation effect.
					$('#box').shake();
					$("#username").val('');
					$("#password").val('');
					$('#errorUserText').text('Alguno de los datos introducidos no es correcto.');
    				$('#errorUserMessage').text('Error en alguno de los campos enviados al servicio.');
					$('#showcaseUserError').css('display','block');
				}
		}).fail( function( jqXHR, textStatus, errorThrown ) {
			$('#errorUserText').text('Vaya parece nuestro androide de conexión esta pasando a traves de un campo de asteroides, por favor intentalo más tarde.');
    		$('#errorUserMessage').text(`${jqXHR.status} ${textStatus}`);
			$('#showcaseUserError').css('display','block');
		});
	}
	$('#box').shake();
	return false;
}

async function startShop(){
	services = await getServicesUrls();
	return;
}

$(document).ready(function() {
	startShop();
	sessionStorage.setItem('username', '');
	sessionStorage.setItem('password', '');
	$("form").submit(function(e) {
	  e.preventDefault();
	});
	return;
});