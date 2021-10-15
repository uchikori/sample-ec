/**
 * 
 * ヘッダーページインジケーター
 * 
 */
jQuery('.global-navi__link').each(function(){
    if(this.href == location.href){
        jQuery(this).find('.global-navi__pager').addClass('current');
    }
});

/**
 * 
 * グローバルメニューの開閉
 * 
 */
 const humberger = jQuery('.humberger');
 const menuToggle = jQuery('.header__navi');
 const body = jQuery('body');
 humberger.on('click', function(){
     humberger.toggleClass('menu-active');
     if(humberger.hasClass('menu-active')){
         body.addClass('fixed');
         menuToggle.addClass('menu-open');
     } else {
         body.removeClass('fixed');
         menuToggle.removeClass('menu-open');
     }
 });



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