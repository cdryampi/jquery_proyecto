$(document).ready(function() {
    console.log("Contact ready!")
        //Validador
    if (window.location.href.indexOf('contact') > -1) {
        $.validate({
            lang: 'es',
            errMessagePosition: 'top',
            scrollToTopOnError: true
        })
    }


})