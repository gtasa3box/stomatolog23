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

// dropdown-two-click
$(".nav__elem_drop").one("click", false);

// input-tel

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
            nav:false,
            dots: true
        },
        321:{
            items:2,
            nav:false,
            dots: true
        },
        769:{
            items:3,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
})

// services-slider
$('.owl-services').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    navText: ["<img src='img/arrow-slider.svg'>","<img src='img/arrow-slider-next.svg'>"],
    responsive:{
        0:{
            items:2,
            nav:true
        },
        481:{
            items:3,
            nav:false
        },
        768:{
            items:3,
            nav:true,
            loop:true
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
            items:3,
            nav:true,
            dots:false
        },
        321:{
            items:4,
            nav:true,
            dots:false
        },
        1000:{
            items:4,
            nav:true,
            dots:false,
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
            nav:false,
            dots: true
        },
        481:{
            items:2,
            nav:false,
            dots: true
        },
        769:{
            items:2,
            nav:true
        },
        1000:{
            items:2,
            nav:true,
            loop:true
        }
    }
})

//input-tel-banner
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