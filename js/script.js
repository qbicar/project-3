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
//document.getElementById('mail').placeholder = "Please Insert Email";

//T-shirt section
$('#colors-js-puns').hide();

$('#design').on('change', function(){
    if ($(this).val() ==="") {
    $('#colors-js-puns').hide();
}else {
    $('#colors-js-puns').show();
    }
});
