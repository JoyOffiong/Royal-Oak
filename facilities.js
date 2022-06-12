const swiper = new Swiper('.swiper', {

    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'card', 
  
    breakpoints: {  
      // when window width is <= 320px     
      320: {       
         slidesPerView: 1,
         spaceBetween: 10     
      },     
      // when window width is <= 480px     
      1000: {       
         slidesPerView: 5,       
         spaceBetween: 1     
      },
    },
    // If we need pagination
    pagination:{
      el: '.swiper-pagination',
      dynamicBullets: 'true',
    },
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });