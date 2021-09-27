// Function that make a get to the related serviceUrl
function get(serviceUrl){
    return new Promise(resolve => {
        $.ajax({
            type: 'GET',
            url: serviceUrl,
        }).then(function(data) {
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

// Function that make a get to the related serviceUrl
function del(serviceUrl){
    return new Promise(resolve => {
        $.ajax({
            type: 'DELETE',
            url: serviceUrl,
        }).then(function(data) {
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

//Function that make a post to add new element into BD
function add(serviceURL, item){
    return new Promise(resolve => {
        $.ajax({
            type: 'POST',
            url: serviceURL,
            data: item,
            contentType: 'application/json',
            dataType: 'json'
        }).then(function(data) {
            try{
                console.log('POST OK');
                resolve(data);
            } catch (e){
                console.log('POST KO');
                resolve({error: e});
            }
        })
        .fail( function( jqXHR, textStatus, errorThrown ) {
            resolve({error: jqXHR.status + ' ' + textStatus});
        });
    });
}