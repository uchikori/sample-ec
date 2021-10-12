 /**
 * 
 * Swiperの設定
 * 
 */

  let mySwiper = new Swiper('.swiper-container',{
    loop:true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    initialSlide: 1,
    slidesPerView: 'auto',
    speed:1000,
    pagination:{
        el:'.swiper-pagination',
        type:'bullets',
        clickable: true
    },
});



/**
 * 
 * ボタンホバー
 * 
 */
const mailBtn = document.querySelector('.js-mail');
const mainIcon = document.querySelector('.js-mailIcon');
mailBtn.addEventListener('mouseover', function(){
    mainIcon.classList.add('hover');
});
mailBtn.addEventListener('mouseout', function(){
    mainIcon.classList.remove('hover');
});