// services-slider
$('.owl-services').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    navText: ["<img src='img/arrow-slider.svg'>","<img src='img/arrow-slider-next.svg'>"],
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
    navText: ["<img src='img/arrow-slider.svg'>","<img src='img/arrow-slider-next.svg'>"],
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

const phoneInputField1 = document.querySelector("#phone1");
const phoneInput1 = window.intlTelInput(phoneInputField1, {
    initialCountry: "ru",
    utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

document.querySelector('#phone1').addEventListener('input', 
    function(e){
      this.value = this.value.replace(/[^\d.]/g, '');
    }
)

const phoneInputField2 = document.querySelector("#phone2");
const phoneInput2 = window.intlTelInput(phoneInputField2, {
    initialCountry: "ru",
    utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

document.querySelector('#phone2').addEventListener('input', 
    function(e){
      this.value = this.value.replace(/[^\d.]/g, '');
    }
)

const phoneInputField3 = document.querySelector("#phone3");
const phoneInput3 = window.intlTelInput(phoneInputField3, {
    initialCountry: "ru",
    utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

document.querySelector('#phone3').addEventListener('input', 
    function(e){
      this.value = this.value.replace(/[^\d.]/g, '');
    }
)

// slider-result

$('.owl-result').owlCarousel({
    loop:true,
    margin:40,
    responsiveClass:true,
    navText: ["<img src='img/arrow-slider.svg'>","<img src='img/arrow-slider-next.svg'>"],
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

// slider-reviews

$('.owl-reviews').owlCarousel({
    loop:true,
    margin:40,
    responsiveClass:true,
    navText: ["<img src='img/arrow-slider.svg'>","<img src='img/arrow-slider-next.svg'>"],
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
            items:2,
            nav:true,
            loop:true
        }
    }
})

//nav-drop
$('.nav__elem_drop').click(function(){
    $(this).toggleClass("active");
    $($(this).data("target")).toggleClass("active");
});

//burger
$('.burger').click(function(){
    $(this).toggleClass("active");
    $('.header__nav').toggleClass("active");
    $('body').toggleClass("hidden");
});