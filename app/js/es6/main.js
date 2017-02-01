function init() {
	
	// slide effect
	const slides = document.querySelectorAll('.slide');

	function showSlide() {

		// Microsoft edge hack
		const sliders = [...slides];
		sliders.forEach(slide => {
			slide.classList.add('active');
		});
	};

	window.addEventListener('load', showSlide);

	// yearsOld

	if (document.body.classList.contains('home')) {

		(function calcAge() {

			const ageOutput = document.querySelector('[data-year]');
			const currentYear = new Date();
			const birthDate = new Date(1992, 10, 3);
			let age = currentYear.getFullYear() - birthDate.getFullYear();
			if (currentYear.setFullYear(1992) < birthDate.setFullYear(1992)) {
				age = age - 1;
			} 
			ageOutput.textContent = age;
			
		}());

	}
	
	// svg fallbalck
	svg4everybody({});

	// objectFit polyfill
	if ('objectFit' in document.documentElement.style === false) {
		document.addEventListener('DOMContentLoaded', function () {
			Array.prototype.forEach.call(document.querySelectorAll('img[data-object-fit]'), function (image) {
				(image.runtimeStyle || image.style).background = 'url("' + image.src + '") no-repeat 50%/' + (image.currentStyle ? image.currentStyle['object-fit'] : image.getAttribute('data-object-fit'));

				image.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'' + image.width + '\' height=\'' + image.height + '\'%3E%3C/svg%3E';
			});
		});
	}

	// dropdown menu
	const menuTrigger = document.querySelector('.js-trigger');
	const dropdownMenu = document.querySelector('.dropdown');

	function toggleMenu(e) {

			e.preventDefault();
			this.classList.toggle('opened');
			dropdownMenu.classList.toggle('open');

	};

	menuTrigger.addEventListener('click', toggleMenu);

	// show popup

	const modal = document.querySelector('.js-modal');

	function showModal(e) {
		e.preventDefault();
		show(modal);
		document.body.classList.add('show-modal');
		const modalClose = document.querySelectorAll('.js-modalClose');

		function show(el) {
			el.style.opacity = 1;
			el.style.display = 'flex';
		}

		function hide(el) {
			el.style.opacity = 0;
			el.style.display = 'none';
		}

		function closeModal() {
			hide(modal);
			document.body.classList.remove('show-modal');
		}

		const modalCloses = [...modalClose]; /*ie fix*/
		modalCloses.forEach((modalCloseItem) => modalCloseItem.addEventListener('click', closeModal));
	}

	document.querySelector('.js-addProject').addEventListener('click', showModal);

	// form validation
	const forms = document.querySelectorAll('.js-validation');

	 function validateForm(e) {
	 	e.preventDefault();


	 	const tooltip = document.createElement('div');
	 	const inputs = this.querySelectorAll('input');
	 	
	 	[...inputs].forEach((input) => {
	 		if (input.value === '') {
	 			const tooltipText = input.dataset.tooltip;
	 			
	 			
			 	tooltip.classList.add('tooltip');
			 	document.body.append(tooltip);
			 	tooltip.style.display = 'block';

			 	tooltip.textContent = tooltipText;
	 			
	 		}
	 	});
	 };

	 [...forms].forEach((form) => form.addEventListener('submit', validateForm));
	
};

window.onload = init();