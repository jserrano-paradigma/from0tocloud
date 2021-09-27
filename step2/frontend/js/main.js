let cart = [];
let totalCard = 0;
let result = '';
let mockResult = '';
let services;
const mockData = false; 

// Backend Model Elements
let user = '';
let order = '';
let orders = [];
let offerApplied = '';
let orderLines = '';
let servicesdata = '';

// Script to open and close sidebar
function w3_open() {
	document.getElementById("mySidebar").style.display = "block";
	document.getElementById("myOverlay").style.display = "block";
}
	
function w3_close() {
	document.getElementById("mySidebar").style.display = "none";
	document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element,id) {
	document.getElementById("img01").src = element.src;
	document.getElementById("modal01").style.display = "block";
	let captionText = document.getElementById("caption");
	let descriptionText = document.getElementById("description");
	captionText.innerHTML = element.alt;
	descriptionText.innerHTML = searchItem(id).description;
}

// Show the Component Decomposition
function showComponents(){
	$('.para-comp-hl').slideToggle("slow");
}

function checkCart(id){
	for (let i = 0; i < cart.length; i++){
		if (cart[i].id === id){
			return i;
		}
	}
	return false;
}

//Search and return the item into the dataset if the id exist
function searchItem(id){
	for (let i = 0; i < result.length; i++){
		if (result[i].id === id){
			return result[i];
		}
	}
	return false;
}

// Add or update the visual shopping cart
function refreshCartView(item,update){
	let data = '';
	$('#totalCart').text(parseFloat(totalCard).toFixed(2) + ' €');
	if (!update){
		data = searchItem(item);
		$('#cartContainer').append("<li id='" + data.id + "' class='w3-padding-16' style='height: 160px;position: relative;'><div class='w3-half'><img src='" + data.img + "' class='para-cart-img para-shop-item' alt='" + data.alttext + "'></div><div class='w3-half'><p>" + data.name + "</p><span>" + parseFloat(data.price).toFixed(2) + "</span><br/><span>Cantidad: 1</span></div><span class='w3-button para-black w3-large w3-display-topright' style='position:absolute' onclick='removeItemFromCart(\"" + data.id + "\")'>×</span></li>");
		return;
	}
	data = searchItem(cart[item].id);
	$('#' + cart[item].id).remove();
	$('#cartContainer').append("<li id='" + data.id + "' class='w3-padding-16' style='height: 160px;position: relative;'><div class='w3-half'><img src='" + data.img + "' class='para-cart-img para-shop-item' alt='" + data.alttext + "'></div><div class='w3-half'><p>" + data.name + "</p><span>" + parseFloat(data.price).toFixed(2) + "</span><br/><span>Cantidad: " + cart[item].amount +"</span></div><span class='w3-button para-black w3-large w3-display-topright' style='position:absolute' onclick='removeItemFromCart(\"" + data.id + "\")'>×</span></li>");
	return;
}

//Add item to backend cart
function updateCart(item, isOrdered){
	let data;
	if (!mockData){
		if (isOrdered === false){
			item.quantity = 1;
			order.id = makeid(24);
			order.orderLines.push(item);
			order.user = user;
			console.log(order);
			data = JSON.stringify(order);
			$.ajax({
				type: 'POST',
				url: services.origin.prourl + services.branches.baseurl + services.branches.orders,
				data: data,
				dataType: 'json',
				contentType: 'application/json',
				success: function (result) {
					console.log('POST OK');
					orders.push(result);
					console.log(result);
				}
			});
		}
		else{
			item.quantity = cart[isOrdered].amount + 1;
			data = JSON.stringify(order);
			$.ajax({
				type: 'PUT',
				url: services.origin.prourl + services.branches.baseurl + services.branches.orders + '/' + order.id,
				data: data,
				dataType: 'json',
				contentType: 'application/json',
				success: function (result) {
					console.log('PUT OK');
					console.log(result);
				}
			});
		}	
	}
	return;
}

//Remove item to backend cart
function deleteFromCart(item){
	console.log(item);
	if (!mockData){
		$.ajax({
			type: 'DELETE',
			url: services.origin.prourl + services.branches.baseurl + services.branches.orders + '/' + item.id,
			data: item,
			dataType: 'json',
			success: function (result) {
				console.log(result);
			}
		});
	}
	return;
}

//Add element to the basket case for internal use
function addToCard(id, price){
	let elem = {
		id: '',
		price: 0,
		amount: 1
	};

	totalCard = totalCard + price;
	let pos = checkCart(id);
	updateCart(searchItem(id), pos);
	if (pos !== false){
		cart[pos].amount++;
		cart[pos].price = price;
		refreshCartView(pos, true);
		return;
	}
	elem.id = id;
	elem.price = price;
	cart.push(elem);	
	refreshCartView(id, false);
}

function toggleSideShoppingCart(){
	$('#shoppingSideBar').hasClass( "para-sideopen") ? $('#shoppingSideBar').removeClass("para-sideopen") : $('#shoppingSideBar').addClass("para-sideopen");
}

//Finalize the buy and clean the internal and visual cart
function getCartItems(){
	if (totalCard > 0){
		console.log('Se ha comprado los items y se resetea la compra.');
		totalCard = 0;
		card = [];
		$('#cartContainer').empty();
		$('#totalCart').text(parseFloat(0).toFixed(2) + ' €');
		return;
	}
	console.log('El carrito está vacio');
	return;
}

//Remove an item from cart
function removeItemFromCart(id){
	let ele = checkCart(id);
	deleteFromCart(searchItem(id));
	totalCard = totalCard - (cart[ele].price * cart[ele].amount);
	$('#totalCart').text(Math.floor(parseFloat(totalCard).toFixed(2)) + ' €');
	$('#' + cart[ele].id).remove();
	cart.splice(ele, 1);
}

// Mock function to get a random user to simulate an order
function getUsers(){
	$.ajax({
		type: 'GET',
		url: services.origin.prourl + services.branches.baseurl + services.branches.users,
	}).then(function(data) {
		try{
			user = data._embedded.users[Math.floor(Math.random() * data._embedded.users.length)];
			console.log('El usuario con el que va a trabajar es:');
			console.log(user);
		} catch (e){
			console.log(e,' Error obteniendo los usuarios');
		}
	})
	.fail( function( jqXHR, textStatus, errorThrown ) {
		console.log(jqXHR.status + ' ' + textStatus);
	});
}

// Load the model schema for OrderLines
function getOrderLinesModel(){
	$.getJSON("/interfaces/orderLines.json", function(data){
		orderLines = data;
	}).fail(function(e){
		console.log(e, " Error en la carga del modelo OrderLines.");
	});
}

// Load the model schema for Offers Applied
function getOrderModel(){
	$.getJSON("/interfaces/order.json", function(data){
		order = data;
	}).fail(function(e){
		console.log(e," Error en la carga del modelo Order.");
	});
}

// Load the model schema for Offers Applied
function getOffersAppliedModel(){
	$.getJSON("/interfaces/offerApplied.json", function(data){
		offerApplied = data;
	}).fail(function(e){
		console.log(e," Error en la carga del modelo OfferApplied.");
	});
}

// Function that get all items that we have in the BD
function getItems(){
	$.ajax({
		type: 'GET',
		url: services.origin.prourl + services.branches.baseurl + services.branches.items,
	}).then(function(data) {
		try{
			result = data._embedded.items;
			console.log(result);
			if (result.length === 0){
				throw('El servicio no ha devuelto ningun resultado.');
			}
			for (let elem in result){
				if ((result[elem].img === undefined) || (result[elem].alttext === undefined)){
					throw('Error no los datos no tienen el formato correcto');
				}
				$("#item-spinner").toggle();
				$('#showcaseContainer').append("<div class='para-half'><img src=" + result[elem].img + " class='para-shop-item' onclick='onClick(this,\"" + result[elem].id + "\")' alt='" + result[elem].alttext + "'><div class='w3-row-padding w3-margin-top'><div class='w3-half'><h3 class='para-h3-font'>" + parseFloat(result[elem].price).toFixed(2) + "€</h3></div><div class='w3-half' style='padding:8px'><button type='button' onclick='addToCard(\"" + result[elem].id + "\"," +  result[elem].price + ")' class='w3-button w3-block w3-padding-small para-blue w3-margin-bottom'>Añadir</button></div></div></div>");
			}
		} catch (e){
			$("#item-spinner").toggle();
			$('#errorMessage').text(e);
			$('#showcaseError').css('display','block');
		}
	})
	.fail( function( jqXHR, textStatus, errorThrown ) {
		$("#item-spinner").toggle();
		$('#errorMessage').text(jqXHR.status + ' ' + textStatus);
		$('#showcaseError').css('display','block');
	});
}

// Load mock data for demo pourposes
function loadMockData(){
	$.getJSON("/mock/mockStock.json", function(data){
		mockResult = data;
		for (let elem in mockResult){
			if ((mockResult[elem].img === undefined) || (mockResult[elem].alttext === undefined)){
				throw('Error no los datos no tienen el formato correcto');
			}
			$('#showcaseContainer').append("<div class='para-half'><img src=" + mockResult[elem].img + " class='para-shop-item' onclick='onClick(this,\"" + mockResult[elem].id + "\")' alt='" + mockResult[elem].alttext + "'><div class='w3-row-padding w3-margin-top'><div class='w3-half'><h3 class='para-h3-font'>" + parseFloat(mockResult[elem].price).toFixed(2) + "€</h3></div><div class='w3-half' style='padding:8px'><button type='button' onclick='addToCard(\"" + mockResult[elem].id + "\"," +  mockResult[elem].price + ")' class='w3-button w3-block w3-padding-small para-blue w3-margin-bottom'>Añadir</button></div></div></div>");
		}
	}).fail(function(e){
		console.log(e);
		console.log("An error has occurred.");
	});
}

// Function that get all services that we have in the BD
function getServices(){
	$.ajax({
		type: 'GET',
		url: services.origin.prourl + services.branches.baseurl + services.branches.services,
	}).then(function(data) {
		try{
			servicesdata = data._embedded.services;
			if (servicesdata.length === 0){
				throw('El servicio no ha devuelto ningun resultado.');
			}
		} catch (e){
			console.log(e,' Error obteniendo los servicios');
		}
	})
	.fail( function( jqXHR, textStatus, errorThrown ) {
		console.log(jqXHR.status + ' ' + textStatus);
	});
}

async function startShop(){
	services = await getServicesUrls();
	getUsers();
	getOrderModel();
	getOrderLinesModel();
	getOffersAppliedModel();
	getItems();
	getServices();
	return;
}

$(document).ready(function() {
	$('#showcaseError').css('display','none');
	if (!mockData){
		startShop();
		return;
	}
	loadMockData();
	return;
});