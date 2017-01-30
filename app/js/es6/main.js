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

	document.addEventListener('DOMContentLoaded', showSlide);

	// yearsOld

	if (document.body.classList.contains('home')) {

		(function calcAge() {

			const ageOutput = document.querySelector('[data-year]');
			const birthDay = ageOutput.dataset.year;
			const currentYear = new Date;
			const birthDate = new Date(birthDay);
			let age = currentYear.getFullYear() - birthDate.getFullYear();
			if (currentYear.setFullYear(1992) < birthDate.setFullYear(1992)) {
				age = age - 1;
			} 
			console.log(age);
			ageOutput.textContent = age;
			
		}());

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

};

window.onload = init();