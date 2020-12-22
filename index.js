/**
 * Menu mobile
 */

const menu_mobile = document.getElementById('menu_mobile')
const section_hamburger = document.getElementById('section_hamburger')
const closeMenu = document.getElementById('closeMenu')

section_hamburger.addEventListener('click', () => {
  menu_mobile.classList.add('active')
  document.body.style.overflow = "hidden";
})

closeMenu.addEventListener('click', () => {
  menu_mobile.classList.remove('active')
  document.body.style.overflow = "auto";
})


/**
 * Popup contact
 */


const closeMenuContact = document.getElementById('closeMenuContact')
const closeMenuContactDesktop = document.getElementById('closeMenuContactDesktop')
const contactUsMobile = document.getElementById('contactUsMobile')
const section_contact_mobile = document.getElementById('section_contact_mobile')
const section_contact_desktop = document.getElementById('section_contact_desktop')

contactUsMobile.addEventListener('click', () => {
  section_contact_mobile.classList.add('open')
  menu_mobile.classList.remove('active')
  dark_mode_menu_active.classList.add('active');
  document.body.style.overflow = "hidden";
})

closeMenuContact.addEventListener('click', () => {
  section_contact_mobile.classList.remove('open')
  dark_mode_menu_active.classList.remove('active');
  document.body.style.overflow = "auto";
})

// Et mode desktop

const contactEventDesktop = document.getElementsByClassName("contactEventDesktop")
Array.from(contactEventDesktop).forEach(function(element) {
      element.addEventListener('click', () => {
		  section_contact_desktop.classList.add('open')
		  dark_mode_menu_active.classList.add('active');
		document.body.style.overflow = "hidden";
	  });
	});

closeMenuContactDesktop.addEventListener('click', () => {
	section_contact_desktop.classList.remove('open')
	dark_mode_menu_active.classList.remove('active');
	document.body.style.overflow = "auto";
	})



/**
 * Form validation
 */

const form = document.getElementById('form');
const nameContactForm = document.getElementById('nameContactForm');
const emailContactForm = document.getElementById('emailContactForm');
const selectContactForm = document.getElementById('selectContactForm');
const messageContactForm = document.getElementById('messageContactForm');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	const nameValue = nameContactForm.value.trim();
	const emailValue = emailContactForm.value.trim();
	const selectValue = selectContactForm.value;
	const messageValue = messageContactForm.value.trim();
	
	if(nameValue === '') {
		setErrorFor(nameContactForm, 'Username cannot be blank');
	} else {
		setSuccessFor(nameContactForm);
	}
	
	if(emailValue === '') {
		setErrorFor(emailContactForm, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(emailContactForm, 'Not a valid email');
	} else {
		setSuccessFor(emailContactForm);
	}
  
  
	if(selectValue === '') {
		setErrorFor(selectContactForm, 'Password cannot be blank');
	} else {
		setSuccessFor(selectContactForm);
  }
  
  
	if(messageValue === '') {
		setErrorFor(messageContactForm, 'Password2 cannot be blank');
	} else{
		setSuccessFor(messageContactForm);
  }

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form_control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form_control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



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

