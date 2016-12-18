// components/animate.js
// components/waves.js
//= components/selectric.js
//= components/jquery.geocomplete.js

$(document).ready(function () {

    $('.selectDate').selectric();
    $("#geocomplete").geocomplete({
        details: "form"
    });
});
//END READY
