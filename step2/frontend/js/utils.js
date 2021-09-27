function getServicesUrls(){
    return new Promise(resolve => {
        $.getJSON("/env/properties.json").then(function(data) {
            try{
                resolve(data);
            } catch (e){
                resolve({error: e});
            }
        })
        .fail( function( jqXHR, textStatus, errorThrown ) {
            resolve({error: jqXHR.status + ' ' + textStatus});
        });
    });
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

// Function capitalize the first letter
function jsUcfirst(string) 
{
  return string.charAt(0).toUpperCase() + string.slice(1);
}