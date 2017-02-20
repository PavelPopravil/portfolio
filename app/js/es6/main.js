document.addEventListener('DOMContentLoaded', function() {
	
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
	// if (document.body.classList.contains('portfolio-page')) {

	// 	const modal = document.querySelector('.js-modal');

	// 	function showModal(e) {
	// 		e.preventDefault();
	// 		show(modal);
	// 		document.body.classList.add('show-modal');
	// 		const modalClose = document.querySelectorAll('.js-modalClose');

	// 		function show(el) {
	// 			el.style.opacity = 1;
	// 			el.style.display = 'flex';
	// 		}

	// 		function hide(el) {
	// 			el.style.opacity = 0;
	// 			el.style.display = 'none';
	// 		}

	// 		function closeModal() {
	// 			hide(modal);
	// 			document.body.classList.remove('show-modal');
	// 		}

	// 		const modalCloses = [...modalClose]; /*ie fix*/
	// 		modalCloses.forEach((modalCloseItem) => modalCloseItem.addEventListener('click', closeModal));
	// 	}

	// 	document.querySelector('.js-addProject').addEventListener('click', showModal);
	// }
	

	// end of show popup

	// form validation
	// const form = document.querySelector('.js-validation');

	// function validateForm(e) {

	// 	e.preventDefault();
		
	// 	checkInputs(form);

	// };

	// form.addEventListener('submit', validateForm);

	// function checkInputs(form) {
	// 	const inputs = form.querySelectorAll('input, textarea');
	// 	[...inputs].forEach((input) => {

	// 		if (input.value === '') {

	// 			const inputCoords = input.getBoundingClientRect();
				
	// 			const coords = {
	// 				top: inputCoords.top + window.scrollY,
	// 				left: inputCoords.left + window.scrollX,
	// 				width: inputCoords.width,
	// 				height: inputCoords.height,
	// 				text: input.dataset.tooltip
	// 			}
				
	// 			showTooltip(input, coords, form);
	// 		}

	// 	});

	// }
	// function showTooltip(input, coords, form) {
	// 	console.log(arguments);
	// 	// tooltips initialization
	// 	const tooltip = document.createElement('span');
	// 	tooltip.classList.add('tooltip');
	// 	document.body.appendChild(tooltip);
		
	// 	// tooltips proprieties
	// 	tooltip.style.top = (coords.top + coords.height / 2) + 'px';
	// 	tooltip.style.left = (coords.left - coords.width) + 'px';
	// 	tooltip.textContent = coords.text;

	// 	const tooltipWidth = tooltip.offsetWidth;
	// 	const tooltipHeight = tooltip.offsetHeight;

	// 	// console.log(tooltip);
	// 	const tooltips = [];
	// 	// tooltips.forEach(to)

	// 	tooltip.style.top = (coords.top + coords.height / 2 - tooltipHeight / 2) + 'px';
	// 	tooltip.style.left = (coords.left - coords.width / 1.3) + 'px';

		
	// 	function hideTooltips() {
	// 		tooltip.style.display = 'none';
	// 	}

	// 	input.addEventListener('keydown', hideTooltips);
	// 	input.addEventListener('change', hideTooltips);


	// 	form.addEventListener('reset', hideTooltips);

	// }

	// // input type file change
	// const inputFile = form.querySelector('input[type="file"]');

	// function showFile() {

	// 	const inputFileText = document.querySelector('.file-upload');
	// 	// const laodFileButton = inputFileText.querySelector('button');

		
	// 		inputFileText.innerHTML = 
	// 		`${this.value} 
	// 		<input type="file" data-tooltip="Загрузите изображение" id="add-project">
	//             <button>
	//           <svg class="app__icon icon icon-cloud-download">
	//             <use xlink:href="img/sprite.svg#cloud-download"></use>
	//           </svg>
	//         </button>
	//         `;
	//         console.log(this.value);
	//         // laodFileButton.addEventListener('click', function() {
	//         // 	inputFile.value = ' ';
	//         // });
		
		
	// }
	// inputFile.addEventListener('change', showFile);

	
	// // end of input type file change
});

