$('#name').focus()
$('#other-title').hide()

//Job role Section$

$('#title').on('change',function() {                    //id of title 
    if ($(this).val()=== 'other') {
        $('#other-title').show();
     }else{
        $('#other-title').hide();
    }
});

//T-shirt Section
$('#color').placeholder ="Please select a T-shirt theme";
/***$('#color').on('change', function (e){

});*/
