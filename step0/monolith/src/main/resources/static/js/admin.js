//const baseurl = 'http://localhost:8080/watto/api';
const baseurl = '/watto/api';
//TODO - Enable this variable only if your are in develop mode, please remove it before deploy to prod.
//const baseurl = 'http://localhost:3000'; 
const urlinv = '/items';
const urlcart = '/orders';
const urlusers = '/users';
const urlcategory = '/categories';

let users = '';
let products = '';
let categories = '';
let schema= '';

function openTab(tagName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = $(".tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = $(".tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  $("#" + tagName).toggle();
  $("#" + tagName + "Tab").addClass(" active");
}

// Function capitalize the first letter
function jsUcfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function that make a random id
function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// Function that build a dinamic form
function showAddingForm(type){
  $('form').empty();
  $.getJSON(`../interfaces/${type}.json`, function(data){
    schema = data;
    let title = '';
    let icon = '';
    let formFields = '';
    let buttonForm = '';
    if (type === 'user'){ 
      icon='<i class="fas fa-user-astronaut"></i>'; 
      title='Alta Usuario';
      buttonForm = `<button class="w3-button w3-block w3-padding-large w3-red w3-margin-bottom" type="submit" onclick="addElement('user')"><strong>Añadir</strong></button>`;
    }
    if (type === 'product'){ 
      icon='<i class="fas fa-jedi"></i>'; 
      title='Alta Producto';
      buttonForm = `<button class="w3-button w3-block w3-padding-large w3-red w3-margin-bottom" type="submit" onclick="addElement('product')"><strong>Añadir</strong></button>`;
    }
    if (type === 'category'){ 
      icon='<i class="fas fa-cube"></i>'; 
      title='Alta Categoria';
      buttonForm = `<button class="w3-button w3-block w3-padding-large w3-red w3-margin-bottom" type="submit" onclick="addElement('category')"><strong>Añadir</strong></button>`;
    }
    if (data !== undefined){
      for (var key in data) {
        let elemType = (key === 'password') ? 'password' : 'text';
        if ((type === 'product') && (key === 'status')){
          formFields =  formFields + `<label for="${key}"><strong>${jsUcfirst(key)}</strong></label>
              <select id="${key}" class="select" name="select">
                <option value="AVAILABLE">Disponible</option>
                <option value="PENDING" >Pediente</option>
                <option value="NO_STOCK">Sin Stock</option>
              </select>`;
        }
        else{
          formFields =  formFields + `<label for="${key}"><strong>${jsUcfirst(key)}</strong></label><input id="${key}" type="${elemType}" placeholder="Enter ${jsUcfirst(key)}" name="${key}" required>`;
        }
      }
      $('form').append(
        `<span class="w3-button para-black w3-large w3-display-topright" style="position:absolute" onclick="closeAddingForm()">×</span>
        <h1 class="w3-display-container w3-xxxlarge para-text-blue para-min-container">
          <b>${icon}${title}</b><b class="para-text-red"> - </b><b class="para-manda-font para-manda-size">${title}</b><b class="para-text-red">.</b>
        </h1>
        <hr style="width:50px;border:5px solid #FF4543" class="w3-round">
        <div class="formcontainer">
          <div class="container">
            ${formFields}
          </div>
          ${buttonForm}
        </div>`
      );
    }
	}).fail(function(e){
		alert(`${e}.Error en la carga del modelo ${type}.`);
    return;
	});
  $('.veilBox').slideDown('slow', function(){
    $('html').css('overflow','hidden');
  });
}

// Function that close the form
function closeAddingForm(){
  $('.veilBox').slideUp('slow', function(){
    $('html').css('overflow','visible');
  });
}

// Function that add a user card
function addUserCard(users){
  let check = '<i class="fas fa-times" style="color:red"></i>';
  if (users.userStatus){
    check = '<i class="fas fa-check" style="color:yellowgreen"></i>';
  }
  $('#userlist').append(
  `<li id="${users.id}" class="sgLiCat">
    <div class="box">
      <div class="deleteWrapper" onclick="deleteUser('${users.id}')">
        <span class="w3-button w3-xxlarge w3-display-topright deleteButton"><i class="far fa-trash-alt deleteIcon"></i></span>
      </div>
      <h3><i class="fas fa-user-astronaut"></i>${users.username}</h3>
      <ul>
        <li><i class="fas fa-journal-whills"></i>${users.firstName}</li>
        <li><i class="fas fa-signature"></i>${users.lastName}</li>
        <li><i class="far fa-envelope"></i>${users.email}</li>
        <li><i class="fas fa-mobile"></i>${users.phone}</li>
        <li><i class="fab fa-galactic-republic"></i>${check}</li>
      </ul> 
    </div>
  </li>`);
  return;
}

// Function that add a product card
function addProductCard(products) {
  let check = '<i class="fas fa-times" style="color:red"></i>';
  if ((products.status !== null) && (products.status.toUpperCase() === 'AVAILABLE')){
    check = '<i class="fas fa-check" style="color:yellowgreen"></i>';
  }
  if ((products.status !== null) && (products.status.toUpperCase() === 'PENDING')){
    check = '<i class="fas fa-clock" style="color:orange"></i>';
  }
  let producttags = '';
  if ((products.tags !== undefined) && (products.tags.length > 0)){
    for (let tag in products.tags){
      producttags = producttags + `<li class="listInline"><i class="fas fa-tag"></i>${products.tags[tag].name}</li>`;
    }
  }
  $('#productlist').append(
  `<li id="${products.id}" class="sgLi sgLiFullWidth">
    <div class="box boxCat">
      <div class="deleteWrapper" onclick="deleteItem('${products.id}')">
        <span class="w3-button w3-xxlarge w3-display-topright deleteButton"><i class="far fa-trash-alt deleteIcon"></i></span>
      </div>
      <h3><i class="fas fa-jedi"></i>${products.name}<b class="para-text-red"> - </b><b class="para-manda-font para-manda-size-cat">${products.name}</b><b class="para-text-red">.</b></h3>
      <div class="productPhoto">
        <img src='${products.img}' class='para-cart-img' alt='${products.alttext}'/>
      </div>
      <div class="productInfo">
        <ul>
          <li class="licat"><i class="fas fa-info"></i>${products.description}</li>
          <li class="listInline"><i class="fas fa-cubes"></i>${(products.category !== null) ? products.category.name : 'Sin Categoría' }</li>
          ${producttags}
          <li class="listInline"><i class="fas fa-dollar-sign"></i>${parseFloat(products.price).toFixed(2)} €</li>
          <li class="listInline"><i class="fas fa-layer-group"></i>${check}</li>
        </ul>
      </div>
    </div>
  </li>`);
}

// Function add a category card
function addCategoryCard(categories){
  $('#categorylist').append(
    `<li id="${categories.id}" class="sgLi sgLiFullWidth">
      <div class="box boxCat">
        <div class="deleteWrapper" onclick="deleteCategory('${categories.id}')">
          <span class="w3-button w3-xxlarge w3-display-topright deleteButton"><i class="far fa-trash-alt deleteIcon"></i></span>
        </div>
        <h3><i class="fas fa-cubes"></i>${categories.name}<b class="para-text-red"> - </b><b class="para-manda-font para-manda-size-cat">${categories.name}</b><b class="para-text-red">.</b></h3>
        <ul>
          <li class="licat"><i class="fas fa-info"></i>${categories.description}</li>
        </ul> 
      </div>
    </li>`);
}

//Add functions service call
async function addElement(type){
  for (var key in schema) {
    schema[key] = $('#'+key).val();
    if ((type === 'product') && (key === 'status')){
      schema[key] = $('#'+key).children("option:selected").val();
    }
    else{
      if ($('#'+key).val().replace(/\s/g,'') === ''){
        return;
      }
    }
  }
  if (baseurl !== 'http://localhost:3000'){
    schema.id = makeid(24); 
    if (type === 'user'){ 
      schema.orders = []; 
      schema = await add(baseurl+urlusers, JSON.stringify(schema)); 
      addUserCard(schema);
    }
    if (type === 'product'){  
      schema.category = null;
      schema = await add(baseurl+urlinv, JSON.stringify(schema));
      addProductCard(schema);
    }
    if (type === 'category'){ 
      schema = await add(baseurl+urlcategory, JSON.stringify(schema));
      addCategoryCard(schema);
    }
  }
  else{
    if (type === 'user'){
      schema.id = makeid(24);
      schema.userStatus = false;
      addUserCard(schema);
    }
    if (type === 'product'){
      schema.id = makeid(24);
      schema.category = {"name": schema.category};
      schema.tags = [];
      addProductCard(schema);
    }
    if (type === 'category'){
      schema.id = makeid(24);
      addCategoryCard(schema);
    }
  }
  closeAddingForm();
}

// Delete functions services call
async function deleteUser(id){
  users = await del(baseurl+urlusers+'/'+id);
  $('#'+id).hide('slow', function(){  $('#'+id).remove(); });
}

async function deleteItem(id){
  users = await del(baseurl+urlinv+'/'+id);
  $('#'+id).hide('slow', function(){  $('#'+id).remove(); });
}

async function deleteCategory(id){
  users = await del(baseurl+urlcategory+'/'+id);
  $('#'+id).hide('slow', function(){  $('#'+id).remove(); });
}

//Get data functions services call
async function getUsers(){
  users = await get(baseurl+urlusers);
  isLogged();
  $("#user-spinner").toggle();
  if (users.error !== undefined){
    $('#errorUserText').text('Vaya, parece que no podemos mostrarte nuestros usuarios en este momento');
		$('#errorUserMessage').text(users.error);
		$('#showcaseUserError').css('display','block');
    return;
  }
  users = users._embedded.users;
  if (users.length === 0){
    $('#errorUserText').text('Esto esta muy solo por aqui, todo el mundo ha debido mudarse de galaxia');
    $('#errorUserMessage').text('El servicio no ha devuelto resultados');
		$('#showcaseUserError').css('display','block');
    return;
  }
  for (let elem in users){
    addUserCard(users[elem]);
  }
  return;
}

async function getProducts(){
  products = await get(baseurl+urlinv);
  $("#product-spinner").toggle();
  if (products.error !== undefined){
    $('#errorProductText').text('Vaya, parece que no se han podido obtener los productos, reintentelo más tarde');
		$('#errorProductMessage').text(products.error);
		$('#showcaseProductError').css('display','block');
    return;
  }
  products = products._embedded.items ;
  for (let elem in products){
    addProductCard(products[elem]);
  }
  return;
}

async function getCategories(){
  categories = await get(baseurl+urlcategory);
  $("#category-spinner").toggle();
  if (categories.error !== undefined){
    $('#errorCategoryText').text('Vaya, parece que no se han podido obtener las categorías, reintentelo más tarde');
		$('#errorCategoryMessage').text(categories.error);
		$('#showcaseCategoryError').css('display','block');
    return;
  }
  categories = categories._embedded.categories ;
  for (let elem in categories){
    addCategoryCard(categories[elem]);
  }
  return;
}

function isLogged(){
  let sesionUser = sessionStorage.getItem('username');
  let sesionPassword = sessionStorage.getItem('password');
  for (let elem in users._embedded.users){
    if ((users._embedded.users[elem].username === sesionUser) && (users._embedded.users[elem].password === sesionPassword)){
      return true;
    }
  }
  window.location.href = "/admin/login.html";
}

$(document).ready(function() {
  getUsers();
  $("#UsersTab").click();
	getProducts();
  getCategories();
  $("form").submit(function(e) {
    e.preventDefault();
  });
	return;
});