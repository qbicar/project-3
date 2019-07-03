$('#name').focus();
$('#other-title').hide();
document.getElementById('mail').placeholder = "Please Insert Email";
document.getElementById('name').placeholder = "Please Insert Name";
const paypalP = $("body > div > form > fieldset:nth-child(4) > div:nth-child(5) > p") ;
const bitcoinP = $("body > div > form > fieldset:nth-child(4) > div:nth-child(6) > p");
$(paypalP).hide();
$(bitcoinP).hide();


//Job role Section$


$('#title').on('change',function() {                    //id of title 
if ($(this).val()=== 'other') {
    $('#other-title').show();
    }else{
    $('#other-title').hide();
}
});

//T-shirt section

$('#colors-js-puns').hide();


$('#design').on('change', function(){
if ($(this).val() ==="js puns") {
$('#colors-js-puns').show();
$('#color').html(`<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
    <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> 
    <option value="gold">Gold (JS Puns shirt only)</option>`);
}else if(
$(this).val() ==="heart js"){
$('#colors-js-puns').show();
$('#color').html (`<option value="tomato">Tomato (I &#9829; JS shirt only)</option>
    <option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> 
    <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option> `); 
}else{
$('#colors-js-puns').hide();
}
});

//activity section

let $totalActivityCost= 0; 
let actLabel = $('<label>Total Cost: $0 </label>');
$('.activities').append(actLabel);
actLabel.hide();
$('.activities').on('click', statCheck)

let check1= $("input[name='all']")
let check2= $("input[name='js-frameworks']")
let check3= $("input[name='js-libs']")
let check4= $("input[name='express']")
let check5= $("input[name='node']")
let check6= $("input[name='build-tools']")
let check7= $("input[name='npm']")

function statCheck(){
$totalActivityCost = 0   
if (check1.is(':checked')){
    $totalActivityCost += 200;
    actLabel.show();
    } else {
    actLabel.hide();
    }
if (check2.is(':checked')){
    $totalActivityCost += 100 ;
    check4.prop('disabled', true);   
    actLabel.show();
    }   else {
    check4.prop('disabled',false)
    }
if (check3.is(':checked')){
    $totalActivityCost += 100 ;
    check5.prop('disabled', true);  
    actLabel.show();
    }   else {
    check5.prop('disabled',false) 
    }
if (check4.is(':checked')){
    $totalActivityCost += 100 ;
    check2.prop('disabled', true);  
    actLabel.show();
    }   else {
    check2.prop('disabled',false)
    }
if (check5.is(':checked')){
    $totalActivityCost += 100 ;
    actLabel.show();
    check3.prop('disabled', true);   
    }   else {
    check3.prop('disabled',false)
    }    
if (check6.is(':checked')){
    $totalActivityCost += 100;  
    actLabel.show();
    }   
if (check7.is(':checked')){
    $totalActivityCost += 100;  
    actLabel.show();
} 
$('.activities label').last().text('Total Cost : $'+$totalActivityCost);
}



// payment section


$('#payment').on('change',function() {    
            
if ($(this).val()=== 'credit card') {
    $('.credit-card').show();
    $(paypalP).hide();
    $(bitcoinP).hide();
}else if (
$(this).val()=== 'paypal') {
    $('#credit-card').hide();
    $(paypalP).show();
    $(bitcoinP).hide();
}else if (
$(this).val()=== 'bitcoin') {   
    $('#credit-card').hide();
    $(paypalP).hide();
    $(bitcoinP).show();
}else {
    $('#credit-card').hide();
    $(paypalP).hide();
    $(bitcoinP).hide();
}
});
/*** */
// Form Validation 


const activities_error_message = ("<label>'Please check at least one activity</label>");



    function check_name(){
        let pattern = /[a-zA-Z]/;
        let name = $("#name").val()
        let errorLabel = $("#name").siblings().eq(1);
        if (!pattern.test(name)) {
            errorLabel.text("Name must contain Characters!!").css("color","red");
            return false;
        }
        else {
        errorLabel.text("Name:").css("color","black");
        return true;
    }}
    $("#name").focusout(function () {
        check_name ();
    })

    function check_mail() {
        let pattern = /^[^@]+@[^@.]+\.[a-z]+$/;
        let email = $('#mail').val();
        let errorEmailLabel = $("#mail").siblings().eq(3)
        if (!pattern.test(email)){
            errorEmailLabel.text("Email must contain an @ and a .").css("color","red");
            return false;
        }
        else{
            errorEmailLabel.text("Email:").css("color","black");
            return true;
            }  
    }      
    $("#mail").focusout(function(){
        check_mail();
    });
    const check_activities = () => {
        if ($('.activities input:checked').length > 0){
            $(".activities legend").text("Register for Activities").css("color","black");
            return true;
        }else {
            $(".activities legend").text("Please select at least one Activity").css("color", "red");
            return false;
        }
    }
    $(".activities").on('change', function(){
        check_activities();
    });

    function check_credit(){
        let pattern = /^\d{13,16}$/
        let credit = $("#cc-num").val();
        let errorCreditLabel = $("#cc-num").siblings().eq(0)
        if (!pattern.test(credit)){
            errorCreditLabel.text("Card # must contain 13 - 16 numbers").css("color","red")
            return false;
    } else {
        errorCreditLabel.text("Card Number:").css("color","black");
        return true;
        }  
};  $("#cc-num").focusout(function(){
    check_credit();
});
    function check_zip(){
    let pattern = /^\d{5}$/;
    let zip = $("#zip").val();
    let errorZipLabel = $("#zip").siblings().eq(0)
    if (!pattern.test(zip)){
        errorZipLabel.text("Zip must have 5 #'s").css("color","red");
        return false;
    }else { 
        errorZipLabel.text("Zip Code:").css("color","black");
        return true;
    }            
}
    $("#zip").focusout(function(){
        check_zip();
});
    function check_cvv(){
    let pattern = /^\d{3}$/;
    let cvv = $("#cvv").val();
    let errorCvvLabel = $("#cvv").siblings().eq(0);
    if (!pattern.test(cvv)){
        errorCvvLabel.text("CVV must be 3 #'s").css("color","red");
        return false;
    }else { 
    errorCvvLabel.text("CVV:").css("color","black");
    return true;
    }
}    
    $("#cvv").focusout(function(){
        check_cvv();
});
    //function check_activities(){
        
$('form').submit(function(e){
    if( check_name()){
        return true 
    } e.preventDefault()
    if (check_mail()){
        return true
    }e.preventDefault()
    if (check_activities()){
        return true
    }e.preventDefault()
    if (check_credit()){
        return true
    }e.preventDefault()
    if (check_zip()){
        return true
    }e.preventDefault()
    if (check_cvv()){
        return true;
    }e.preventDefault()
    alert ("Please fill form correctly")  
    });
