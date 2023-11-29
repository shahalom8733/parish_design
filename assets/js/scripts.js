$('document').ready(function(){

    $('.nav__show').click(function(){
        $('.menu').addClass('menu__active');
        $('.nav__close').show();
    })
    $('.nav__close').click(function(){
        $('.menu').removeClass('menu__active');
        $('.nav__close').hide();
    })


	$('.chilly__carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1
});

$('.testimonial').owlCarousel({
    loop:true,
    margin:60,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

});
