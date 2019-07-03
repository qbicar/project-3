$('#name').focus();                                                  //focus used to set to first field when webpage loads
$('#other-title').hide();
document.getElementById('mail').placeholder = "Please Insert Email"; //placeholder text set into email
document.getElementById('name').placeholder = "Please Insert Name";  // placeholder text set into name
const paypalP = $("body > div > form > fieldset:nth-child(4) > div:nth-child(5) > p") ; //set js path to a variable
const bitcoinP = $("body > div > form > fieldset:nth-child(4) > div:nth-child(6) > p"); //set js path to a variable
$(paypalP).hide();
$(bitcoinP).hide();
const activities_error_message = ("<label>'Please check at least one activity</label>"); // error message for activities section

//Job role Section$


$('#title').on('change',function() {                //on change of title , when other is selected , other title input will display and hide when another selection is made
if ($(this).val()=== 'other') {
    $('#other-title').show();
    }else{
    $('#other-title').hide();
}
});

//T-shirt section

$('#colors-js-puns').hide();        //hide color section


$('#design').on('change', function(){ //when design theme is selceted on js puns it will display from html 3 options
if ($(this).val() ==="js puns") {
$('#colors-js-puns').show();
$('#color').html(`<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
    <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> 
    <option value="gold">Gold (JS Puns shirt only)</option>`);
}else if(                           // else heart js them is selected , the three options from html will display for that theme in color
$(this).val() ==="heart js"){
$('#colors-js-puns').show();
$('#color').html (`<option value="tomato">Tomato (I &#9829; JS shirt only)</option>
    <option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> 
    <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option> `); 
}else{
$('#colors-js-puns').hide();    //anything else will hide the color section completely 
}
});

//activity section

let $totalActivityCost= 0;              //set the intial total cost amount to 0
let actLabel = $('<label>Total Cost: $0 </label>'); // created label for totalcost and set to a variable
$('.activities').append(actLabel);                  //append label message to activity section of html
actLabel.hide();                                    // hide act label (message)

$('.activities').on('click', statCheck)             //statchek defined as function statcheck which includes all my checkboxes value

let check1= $("input[name='all']")
let check2= $("input[name='js-frameworks']")
let check3= $("input[name='js-libs']")
let check4= $("input[name='express']")
let check5= $("input[name='node']")
let check6= $("input[name='build-tools']")
let check7= $("input[name='npm']")

function statCheck(){                   //StatCheck checks if a box if clicked/unclicked what will occur 
$totalActivityCost = 0   
if (check1.is(':checked')){                // If check 1 (all) is checked 
    $totalActivityCost += 200;              //Will add or equal to 200 
    actLabel.show();                        //ActLabel (label for Total Cost) will be displayed
    } else {
    actLabel.hide();                        //Act label will hide if nothing is clicked
    }
if (check2.is(':checked')){                 //if check 2 is checked , check 4 will be disabled
    $totalActivityCost += 100 ;             // will add or equal 100
    check4.prop('disabled', true);   
    actLabel.show();                        //total cost will display
    }   else {
    check4.prop('disabled',false)
    }
if (check3.is(':checked')){                 //if check 3 is checked , check 5 will be disabled 
    $totalActivityCost += 100 ;             // will add or equal 100 when clicked
    check5.prop('disabled', true);  
    actLabel.show();
    }   else {
    check5.prop('disabled',false) 
    }
if (check4.is(':checked')){                 //if check 4 is checked check 2 will be disabled
    $totalActivityCost += 100 ;             // will add or equal 100
    check2.prop('disabled', true);  
    actLabel.show();
    }   else {
    check2.prop('disabled',false)
    }
if (check5.is(':checked')){                 // if check 5 is checked check 3 will be disabled
    $totalActivityCost += 100 ;             // will add or equal 100
    actLabel.show();
    check3.prop('disabled', true);   
    }   else {
    check3.prop('disabled',false)
    }    
if (check6.is(':checked')){                 //if 6 is checked 
    $totalActivityCost += 100;              // will add or equal 100
    actLabel.show();                        // display total cost 
    }   
if (check7.is(':checked')){                 // if check 7 is clicked 
    $totalActivityCost += 100;              // add or equal 100
    actLabel.show();
} 
$('.activities label').last().text('Total Cost : $'+$totalActivityCost); //Total Cost string is adding the value of what is clicked to this bottom text in activites
}



// payment section


$('#payment').on('change',function() {                          //When payment is changed to value 
            
if ($(this).val()=== 'credit card') {                           // on credit card value
    $('.credit-card').show();                                   // credit card input will display and hide paypal & bitcoin paragraph text
    $(paypalP).hide();
    $(bitcoinP).hide();
}else if (
$(this).val()=== 'paypal') {                                    // if paypal value is clicked
    $('#credit-card').hide();                                   // credit card input field will hide
    $(paypalP).show();                                          // paypal text will display that is defined from my global
    $(bitcoinP).hide();                                         // bitcoin text will hide
}else if (
$(this).val()=== 'bitcoin') {                                   // if bitcoin text is clicked
    $('#credit-card').hide();                                   //credit card input field will hide
    $(paypalP).hide();                                          //paypal text will hide
    $(bitcoinP).show();                                         //bitcoin text will show
}else {
    $('#credit-card').hide();                                   //if anything else is clicked Everything else will hide
    $(paypalP).hide();
    $(bitcoinP).hide();
}
});

// Form Validation 

    function check_name(){                              // Created the check name function
        let pattern = /^[a-zA-Z]/;                      // will check regex 
        let name = $("#name").val();
        let errorLabel = $("#name").siblings().eq(1);           // target the name label field
        if (!pattern.test(name)) {                              // if pattern text does not match name
            errorLabel.text("Name must contain Characters!!").css("color","red"); //error message will display in original name field and set color to error
            return true;
        }
        else {
        errorLabel.text("Name:").css("color","black");              //if it is false (text is correct) name will go back to original Name: 
        return false;
    }
}
    $("#name").focusout(function () {
        check_name();
    });

    function check_mail() {                                     //check mail will check the text input in email field
        let pattern = /^[^@]+@[^@.]+\.[a-z]+$/;                 //Regex pattern 
        let email = $('#mail').val();
        let errorEmailLabel = $("#mail").siblings().eq(3)       //will target the email name label field in html
        if (!pattern.test(email)){                              // will test pattern if it doesnt match pattern
            errorEmailLabel.text("Email must contain an @ and a .").css("color","red");
            return true;
        }
        else{
            errorEmailLabel.text("Email:").css("color","black");    //will set text to original Email: if text is correct
            return false;
            }  
    }      
    $("#mail").focusout(function(){     
        check_mail();                                               //calls function check_mail
    });
    const check_activities = () => {                                //check_activities function 
    
        if ($('.activities input:checked').length > 0){             //if the length of input's in activities is greater than 0
            $(".activities legend").text("Register for Activities").css("color","black"); //text will remain the same or if it is unclicked 
            return false;
        }else {
            $(".activities legend").text("Please select at least one Activity").css("color", "red"); //if no activities are clicked error message will display
            return true;
        }
    }
    $(".activities").on('change', function(){
        check_activities();                                         //calls function check_activities
    });

    function check_credit(){                                        //Check Credit will check the input for regex
        let pattern = /^\d{13,16}$/
        let credit = $("#cc-num").val();
        let errorCreditLabel = $("#cc-num").siblings().eq(0)        //Will target the cc-num label 
        if (!pattern.test(credit)){                                 // if pattern does not match regex in pattern
            errorCreditLabel.text("Card # must contain 13 - 16 numbers").css("color","red") //error message will display in original field of Card number and turn message red
            return true;
    } else {
        errorCreditLabel.text("Card Number:").css("color","black");     //error message will return to original when it is false (correct text)
        return false;
        }  
};  $("#cc-num").focusout(function(){
    check_credit();
});
    function check_zip(){                                          //Check Zip function to check input to match with regex format
    let pattern = /^\d{5}$/;
    let zip = $("#zip").val();
    let errorZipLabel = $("#zip").siblings().eq(0)                  // targets original Zip name id in html 
    if (!pattern.test(zip)){                                           // If Regex pattern is not matching 
        errorZipLabel.text("Zip must have 5 #'s").css("color","red");   //Error message will be displayed in Original Field of Zip:
        return true;
    }else { 
        errorZipLabel.text("Zip Code:").css("color","black");   //Text returns back to original when pattern is correct
        return false;
    }            
}
    $("#zip").focusout(function(){
        check_zip();
});
    function check_cvv(){                                           //Function to check Cvv and text input written inside
    let pattern = /^\d{3}$/;
    let cvv = $("#cvv").val();
    let errorCvvLabel = $("#cvv").siblings().eq(0);                 //errorCvvLabel refers to original CVV name input id in html 
    if (!pattern.test(cvv)){
        errorCvvLabel.text("CVV must be 3 #'s").css("color","red"); //Text changes of Cvv name into a error message displayed in red
        return true;
    }else { 
    errorCvvLabel.text("CVV:").css("color","black");                //Text changes back to original CVV
    return false;
    }
}    
    $("#cvv").focusout(function(){
        check_cvv();
});
 
$('form').submit(function(e){                                           //submit eventlistener for form
    if (check_name() == true && check_mail() == true                    // if all check functions are true (not correct to regex) 
        && check_activities() == true && check_credit()                 //
        == true && check_zip() == true && check_cvv() == true){
          alert ("Please fill form correctly") ;                        //alert box will display to tell user to fill out the form and the red fields correctly
           e.preventDefault();                                          // preventDefault prevents the form from submitting
            return false;                                               
        } 
    else {                                                              //else if form is filled correctly to alert Registration Successful
    alert("Registration Successful!")
      return true; 
        
    }

})
