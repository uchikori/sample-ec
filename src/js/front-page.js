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