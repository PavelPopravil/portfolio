'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

document.addEventListener('DOMContentLoaded', function () {

	// slide effect
	var slides = document.querySelectorAll('.slide');

	function showSlide() {

		// Microsoft edge hack
		var sliders = [].concat(_toConsumableArray(slides));
		sliders.forEach(function (slide) {
			slide.classList.add('active');
		});
	};

	window.addEventListener('load', showSlide);

	// yearsOld

	if (document.body.classList.contains('home')) {

		(function calcAge() {

			var ageOutput = document.querySelector('[data-year]');
			var currentYear = new Date();
			var birthDate = new Date(1992, 10, 3);
			var age = currentYear.getFullYear() - birthDate.getFullYear();
			if (currentYear.setFullYear(1992) < birthDate.setFullYear(1992)) {
				age = age - 1;
			}
			ageOutput.textContent = age;
		})();
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
	var menuTrigger = document.querySelector('.js-trigger');
	var dropdownMenu = document.querySelector('.dropdown');

	function toggleMenu(e) {

		e.preventDefault();
		this.classList.toggle('opened');
		dropdownMenu.classList.toggle('open');
	};

	menuTrigger.addEventListener('click', toggleMenu);

	// show popup
	if (document.body.classList.contains('portfolio-page')) {
		(function () {
			var showModal = function showModal(e) {
				e.preventDefault();
				show(modal);
				document.body.classList.add('show-modal');
				var modalClose = document.querySelectorAll('.js-modalClose');

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

				var modalCloses = [].concat(_toConsumableArray(modalClose)); /*ie fix*/
				modalCloses.forEach(function (modalCloseItem) {
					return modalCloseItem.addEventListener('click', closeModal);
				});
			};

			var modal = document.querySelector('.js-modal');

			document.querySelector('.js-addProject').addEventListener('click', showModal);
		})();
	}

	// end of show popup

	// form validation
	var form = document.querySelector('.js-validation');

	function validateForm(e) {

		e.preventDefault();

		checkInputs(form);
	};

	form.addEventListener('submit', validateForm);

	function checkInputs(form) {
		var inputs = form.querySelectorAll('input, textarea');
		[].concat(_toConsumableArray(inputs)).forEach(function (input) {

			if (input.value === '') {

				var inputCoords = input.getBoundingClientRect();

				var coords = {
					top: inputCoords.top + window.scrollY,
					left: inputCoords.left + window.scrollX,
					width: inputCoords.width,
					height: inputCoords.height,
					text: input.dataset.tooltip
				};

				showTooltip(input, coords, form);
			}
		});
	}
	function showTooltip(input, coords, form) {

		// tooltips initialization
		var tooltip = document.createElement('span');
		tooltip.classList.add('tooltip');
		document.body.append(tooltip);

		// tooltips proprieties
		tooltip.style.top = coords.top + coords.height / 2 + 'px';
		tooltip.style.left = coords.left - coords.width + 'px';
		tooltip.textContent = coords.text;

		var tooltipWidth = tooltip.offsetWidth;
		var tooltipHeight = tooltip.offsetHeight;

		tooltip.style.top = coords.top + coords.height / 2 - tooltipHeight / 2 + 'px';
		tooltip.style.left = coords.left - coords.width / 1.3 + 'px';

		function hideTooltips() {
			tooltip.style.display = 'none';
		}

		input.addEventListener('keydown', hideTooltips);

		form.addEventListener('reset', hideTooltips);
	}
});