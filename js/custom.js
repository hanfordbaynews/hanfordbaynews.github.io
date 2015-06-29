// $('body').scrollspy({ target: '#navbar-example' })
$('#nav').affix({
    offset: {
        top: $('#nav').offset().top
    }
});