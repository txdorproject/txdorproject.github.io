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
 * Dropdown menu services
 */

const services = document.getElementById('services')
const section_drop_services = document.getElementById('section_drop_services')
const section_header = document.getElementById('section_header')
const close_menu_desktop = document.getElementById('close_menu_desktop');
const dark_mode_menu_active = document.getElementById('dark_mode_menu_active')

services.addEventListener('click', () => {
  setTimeout(() => {
    section_drop_services.classList.add('active');
    dark_mode_menu_active.classList.add('active');
  },0)
})

dark_mode_menu_active.addEventListener('click', () => {
  section_drop_services.classList.remove('active');
  dark_mode_menu_active.classList.remove('active');
})

close_menu_desktop.addEventListener('click', () => {
  section_drop_services.classList.remove('active');
  dark_mode_menu_active.classList.remove('active');
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


/**
 * Form validation
 */




/**
 * Scroll to section
 */




/**
 * Potentiel entreprise
 * 
 * [] Secteur d'activité
 * [] dropwdon metier
 * [] Types de clients
 * [] Localisation (france ou belgique)
 * [] As deja un site
 * [] Si oui : est-ce qu'il est mis a jour / responsive 
 * [] etes vous present sur les reseaux sociaux
 * [] resultats fictifs
 * [] bar de progression
 */

