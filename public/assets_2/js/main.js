/* full page carousel */
$(document).ready(function () {
    $('.owl-carousel-suppliers').owlCarousel({
      loop:true,
      center: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      margin:10,
      navText: ['<span class="fa-solid fa-angle-right" aria-hidden="true"></span>','<span class="fa-solid fa-angle-right" aria-hidden="true"></span>'],
      nav:false,
      dots: false,
      items:5,
      responsive:{
          0:{
              items:3,
              dots: false,
          },
          700:{
              items:3,
              dots: false,
              
          },
          768:{
              items:5
          }
      }
    })
  });


  function updateQuantity(inputId, operation) {
    const inputElement = document.getElementById(inputId);
    let currentValue = parseInt(inputElement.value);

    if (operation === 'plus' && currentValue < 10) {
        inputElement.value = currentValue + 1;
    } else if (operation === 'minus' && currentValue > 1) {
        inputElement.value = currentValue - 1;
    }
}