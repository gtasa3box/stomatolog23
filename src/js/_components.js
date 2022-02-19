// services-slider
$('.owl-services').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    navText: ["<img src='../img/arrow-slider.svg'>","<img src='../img/arrow-slider.svg'>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
})

$('.owl-specialists').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    navText: ["<img src='../img/arrow-slider.svg'>","<img src='../img/arrow-slider.svg'>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            dots:false,
            loop:true
        }
    }
})