/**
 * Scroll to top
 */

var mybutton = document.getElementById("scrollToTop");
window.onscroll = function() {
	scrollFunction()
};

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
 * Animation apparition element
 */
const ratio = .1
const options = {
	root: null,
	footMargin: '0px',
	threshold: ratio
}

const handleIntersect = (entries, observer) => {
	entries.forEach(entry => {
		if(entry.intersectionRatio >= ratio) {
			entry.target.classList.add('reveal-visible')
			observer.unobserve(entry.target)
		}
	})
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('[class*="reveal-"]').forEach(r => {
	observer.observe(r)
})


/**
 * Scroll to section
 */

 var go_to_vitrine = document.querySelectorAll('.go_to_vitrine');
 var go_to_ecommerce = document.querySelectorAll('.go_to_ecommerce');
 var go_to_identite = document.querySelectorAll('.go_to_identite');
 var go_to_forfaits = document.querySelectorAll('.go_to_forfaits');
 var go_to_a_propros = document.querySelectorAll('.go_to_a_propros');
 var see_tarifs_service = document.querySelectorAll('.see_tarifs_service a')
 var tarif_btn = document.querySelectorAll('.tarif_btn')

function scrollToSection(section, offSetOfSection) {
	for(var v of section) {
		v.addEventListener('click', function(e) {
			e.preventDefault()
			const offsetTop = offSetOfSection
			menu_mobile.classList.remove('active')
			document.body.style.overflow = "auto";
			dark_mode_menu_active.classList.remove('active');
			scroll({
				top: offsetTop,
				behavior: "smooth"
			});
		})
	}
}

scrollToSection(go_to_vitrine, document.querySelector('.big_block_vitrine').offsetTop)
scrollToSection(go_to_ecommerce, document.querySelector('.big_block_ecommerce').offsetTop)
scrollToSection(go_to_identite, document.querySelector('.big_block_identite').offsetTop)
scrollToSection(go_to_forfaits, document.querySelector('.section_forfaits').offsetTop)
scrollToSection(go_to_a_propros, document.querySelector('.section_what_we_do').offsetTop)
scrollToSection(see_tarifs_service, document.querySelector('.section_forfaits').offsetTop)
scrollToSection(tarif_btn, document.querySelector('.section_forfaits').offsetTop)



/**
 * Menu mobile
 */

var menu_mobile = document.getElementById('menu_mobile')
var icon_menu = document.querySelector('.icon_menu')
var close_menu_mobile = document.querySelector('.close_menu_mobile')

icon_menu.addEventListener('click', () => {
  menu_mobile.classList.add('active')
  document.body.style.overflow = "hidden";
  dark_mode_menu_active.classList.add('active');
})

close_menu_mobile.addEventListener('click', () => {
  menu_mobile.classList.remove('active')
  document.body.style.overflow = "auto";
  dark_mode_menu_active.classList.remove('active');
})

/**
 * Services open
 */

 var services_click_dropdown = document.querySelector('.services_click_dropdown')
 var hover_menu_tablet = document.querySelector('.hover_menu_tablet')
 var arrow_top_header = document.querySelector('.arrow_top_header')
 services_click_dropdown.addEventListener('mouseover', function() {
	 hover_menu_tablet.classList.add('open')
		arrow_top_header.classList.add('return')
 })

 hover_menu_tablet.addEventListener('mouseleave', function() {
	hover_menu_tablet.classList.remove('open')
	arrow_top_header.classList.remove('return')
 })

 var explain = document.querySelector('.explain')
 	explain.addEventListener('click', function() {
	hover_menu_tablet.classList.remove('open')
	arrow_top_header.classList.remove('return')
 })

 var each_services_menu_tablet = document.querySelectorAll('.each_services_menu_tablet')
 each_services_menu_tablet.forEach(elementMenu => {
	 elementMenu.addEventListener('click', function() {
		hover_menu_tablet.classList.remove('open')
		arrow_top_header.classList.remove('return')
	 })
 })


var section_top_presentation = document.querySelector('.section_top_presentation .explain')
section_top_presentation.addEventListener('click', function() {
	if(hover_menu_tablet.contains = "open") {
		hover_menu_tablet.classList.remove("open");
	}
})
 
 
/**
 * Open contact popup
 */

 var dark_mode_menu_active = document.getElementById('dark_mode_menu_active')

 var contact_btn = document.querySelector('.contact_btn')
 contact_btn.addEventListener('click', function() {
     document.querySelector('.block_popup_contact_mobile').classList.add('open')
	 dark_mode_menu_active.classList.add('active');
	 document.body.style.overflow = "hidden";
 })

 var contact_header = document.querySelector('.contact_header')
 	contact_header.addEventListener('click', function() {
	document.querySelector('.block_popup_contact_mobile').classList.add('open')
	dark_mode_menu_active.classList.add('active');
	document.body.style.overflow = "hidden";
})

var close_popup_mobile = document.querySelector('.close_popup_mobile')
close_popup_mobile.addEventListener('click', function() {
	document.querySelector('.block_popup_contact_mobile').classList.remove('open')
	dark_mode_menu_active.classList.remove('active');
	document.body.style.overflow = "auto";
})

var btn_choose_f = document.querySelectorAll('.btn_choose_f')
btn_choose_f.forEach(btn_f => {
	btn_f.addEventListener('click', function() {
		document.querySelector('.block_popup_contact_mobile').classList.add('open')
		dark_mode_menu_active.classList.add('active');
		var data = btn_f.closest('.each_forfaits').getAttribute('data-forfait')
		if(data == "professionel") {
			document.getElementById('selectContactForm').selectedIndex = "0"
		} else if (data == "business") {
			document.getElementById('selectContactForm').selectedIndex = "1"
		} else {
			document.getElementById('selectContactForm').selectedIndex = "2"
		}
	})
})

var section_appel_contact = document.querySelector('.section_appel_contact .block_btn')
	section_appel_contact.addEventListener('click', function() {
	document.querySelector('.block_popup_contact_mobile').classList.add('open')
	dark_mode_menu_active.classList.add('active');
})

var contactUsMobile = document.getElementById('contactUsMobile')
contactUsMobile.addEventListener('click', function() {
	menu_mobile.classList.remove('active')
	document.body.style.overflow = "auto";
	document.querySelector('.block_popup_contact_mobile').classList.add('open')
	dark_mode_menu_active.classList.add('active');
})


/**
 * Modal connaitre facturation
 */

var connaitre_facturation = document.querySelector('.connaitre_facturation')
connaitre_facturation.addEventListener('click', function() {
	document.querySelector('.modal_connaitre_facturation').classList.add('open')
	dark_mode_menu_active.classList.add('active');
	document.body.style.overflow = "hidden";
})

document.querySelector('.close_connaitre').addEventListener('click', function() {
	document.querySelector('.modal_connaitre_facturation').classList.remove('open')
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
		setErrorFor(nameContactForm, 'Votre nom ne peut pas être vide');
	} else {
		setSuccessFor(nameContactForm);
	}
	
	if(emailValue === '') {
		setErrorFor(emailContactForm, 'Votre email ne peut pas être vide');
	} else if (!isEmail(emailValue)) {
		setErrorFor(emailContactForm, 'Votre email est non valide');
	} else {
		setSuccessFor(emailContactForm);
	}
  
  
	if(selectValue === '') {
		setErrorFor(selectContactForm, 'Vous devez choisir un forfait');
	} else {
		setSuccessFor(selectContactForm);
  }
  
  
	if(messageValue === '') {
		setErrorFor(messageContactForm, 'Votre message ne peut pas être vide');
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
 * Rotate chevron menu open
 */


/**
 * Count number & animation number
 */
const ratioNum = .9
const optionsNum = {
	root: null,
	footMargin: '0px',
	threshold: ratioNum
}


const handleIntersectNumb = (entries, observer) => {
	entries.forEach(entry => {
		if(entry.intersectionRatio >= ratio) {
			var clients = setInterval(clientGood, 75);
			let count1 = 1;
			function clientGood(each_selector) {
				count1++;
				document.querySelector('#number-1').innerHTML = count1
				if (count1 == 15) {
					clearInterval(clients)
				}
			}
			var projects = setInterval(projectsDone, 65);
			let count2 = 1;
			function projectsDone(each_selector) {
				count2++;
				document.querySelector('#number-2').innerHTML = count2
				if (count2 == 22) {
					clearInterval(projects)
				}
			}
			var reaGraph = setInterval(reaGraphique, 55);
			let count3 = 1;
			function reaGraphique(each_selector) {
				count3++;
				document.querySelector('#number-3').innerHTML = count3
				if (count3 == 40) {
					clearInterval(reaGraph)
				}
			}
			var ligneCode = setInterval(ligneCodeNum, 1);
			let count4 = 49300;
			function ligneCodeNum(each_selector) {
				count4++;
				document.querySelector('#number-4').innerHTML = count4
				if (count4 == 50000) {
					clearInterval(ligneCode)
				}
			}
			observer.unobserve(entry.target)
		}
	})
}

const observerNum = new IntersectionObserver(handleIntersectNumb, optionsNum)
document.querySelectorAll('.section_chiffres').forEach(r => {
	observerNum.observe(r)
})


/**
 * Change forfaits
 */

var each_choice = document.querySelectorAll('.each_choice')
each_choice.forEach(elementChoice => {
	elementChoice.addEventListener('click', function() {
		var allChoice = document.querySelectorAll('.each_choice')
		allChoice.forEach(removeChoice => {
			removeChoice.classList.remove('choosen_forfait')
		})
		this.classList.add('choosen_forfait')
		var dChoice = this.getAttribute('data-choice')
		if(dChoice == "direct") {
			document.querySelectorAll('.price_f_month').forEach(monthPrice => {
				monthPrice.style.display = "none"
			})
			document.querySelectorAll('.price_f').forEach(directPrice => {
				directPrice.style.display = "flex"
			})
		} else {
			document.querySelectorAll('.price_f_month').forEach(monthPrice => {
				monthPrice.style.display = "flex"
			})
			document.querySelectorAll('.price_f').forEach(directPrice => {
				directPrice.style.display = "none"
			})
		}
	})
})