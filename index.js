/**
 * Menu mobile
 */

var menu_mobile = document.getElementById('menu_mobile')
var section_hamburger = document.getElementById('section_hamburger')
var closeMenu = document.getElementById('closeMenu')

section_hamburger.addEventListener('click', () => {
  menu_mobile.classList.add('active')
  document.body.style.overflow = "hidden";
})

closeMenu.addEventListener('click', () => {
  menu_mobile.classList.remove('active')
  document.body.style.overflow = "auto";
})

console.log('lol');


/**
 * Popup contact
 */


var closeMenuContact = document.getElementById('closeMenuContact')
var closeMenuContactDesktop = document.getElementById('closeMenuContactDesktop')
var contactUsMobile = document.getElementById('contactUsMobile')
var section_contact_mobile = document.getElementById('section_contact_mobile')
var section_contact_desktop = document.getElementById('section_contact_desktop')

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

var contactEventDesktop = document.getElementsByClassName("contactEventDesktop")
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

var form = document.getElementById('form');
var nameContactForm = document.getElementById('nameContactForm');
var emailContactForm = document.getElementById('emailContactForm');
var selectContactForm = document.getElementById('selectContactForm');
var messageContactForm = document.getElementById('messageContactForm');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	var nameValue = nameContactForm.value.trim();
	var emailValue = emailContactForm.value.trim();
	var selectValue = selectContactForm.value;
	var messageValue = messageContactForm.value.trim();
	
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
	var formControl = input.parentElement;
	var small = formControl.querySelector('small');
	formControl.className = 'form_control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	var formControl = input.parentElement;
	formControl.className = 'form_control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



/**
 * Dropdown menu services
 */

var services = document.getElementById('services')
var section_drop_services = document.getElementById('section_drop_services')
var section_header = document.getElementById('section_header')
var close_menu_desktop = document.getElementById('close_menu_desktop');
var dark_mode_menu_active = document.getElementById('dark_mode_menu_active')

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
 * Modal potentiel
 */

 /*
var btn_potentiel =  document.getElementById('btn_potentiel')
var container_bloc_potentiel = document.getElementById("container_bloc_potentiel");
var nextQuestion = document.getElementsByClassName("nextQuestion");
var img = document.querySelectorAll("#container_bloc_potentiel div");
var resultatRecherche = document.getElementById('resultatRecherche');
var modal_test_potentiel = document.getElementById('modal_test_potentiel');
var closeModalPotentiel = document.getElementById('closeModalPotentiel');

btn_potentiel.addEventListener('click', () => {
	modal_test_potentiel.classList.add('open')
})

closeModalPotentiel.addEventListener('click', () => {
	modal_test_potentiel.classList.remove('open')
	console.log("lol");
})

let index = 0;

function next() {
    var randomNum = Math.floor(Math.random() * 45000) + 10000;
    resultatRecherche.innerText = randomNum;
    Array.prototype.forEach.call(nextQuestion, function(el) {
        el.addEventListener('click', () => {
            index++;
            container_bloc_potentiel.style.transform = `translateX(${-index * 375}px)`;
        })
    });
}

next()

*/

/**
 * Scroll to section
 */




/**
 * Potentiel entreprise
 * [] bar de progression
 */

