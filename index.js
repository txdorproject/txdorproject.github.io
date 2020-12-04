/**
 * Menu mobile
 */

const menu_mobile = document.getElementById('menu_mobile')
const section_hamburger = document.getElementById('section_hamburger')
const closeMenu = document.getElementById('closeMenu')

section_hamburger.addEventListener('click', () => {
  menu_mobile.classList.add('active')
})

closeMenu.addEventListener('click', () => {
  menu_mobile.classList.remove('active')
})



/**
 * Scroll to top
 */


var mybutton = document.getElementById("scrollToTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.classList.add('active')
  } else {
    mybutton.classList.remove('active');
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}