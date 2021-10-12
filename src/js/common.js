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