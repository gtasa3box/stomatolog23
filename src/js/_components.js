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

//slider-spec

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

// input-tel

const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    initialCountry: "ru",
    utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

document.querySelector('#phone').addEventListener('input', 
    function(e){
      this.value = this.value.replace(/[^\d.]/g, '');
    }
)

// slider-result

$('.owl-result').owlCarousel({
    loop:true,
    margin:40,
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