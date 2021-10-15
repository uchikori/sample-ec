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
 * サブメニューのアコーディオン
 * 
 */
  let accordion = jQuery('.js-accordion');
  let siteMap = jQuery('.js-sitemap');
  accordion.click(function(){
      if(accordion.hasClass('open')){
          accordion.removeClass('open');
          siteMap.slideUp();
      } else {
          accordion.addClass('open');
          siteMap.slideDown();
      }
  });