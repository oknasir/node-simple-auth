jQuery(document).ready(function ($) {
    $("#validate-form").validate({
        submitHandler: function (form) {
            form.submit();
        }
    });
});
