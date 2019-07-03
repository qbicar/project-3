$('#name').focus();

$("#name").keyup(function () {
    let name = $("#name").val()
    let pattern = /^[a-zA-Z]*$/;
    const name_error_message = ("<label id = name_Error 'Name field cannot be empty'></label>");
    if (!pattern.test(name)) {
        $("#name").append(name_error_message);
    }
});