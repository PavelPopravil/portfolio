'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var addProject = function () {

	// variables

	var modal = document.querySelector('.js-modal');
	var closeModal = document.querySelectorAll('.js-modalClose');
	var form = document.querySelector('.js-validation');
	var inputs = form.querySelectorAll('input, textarea');

	var init = function init() {
		_setUpListeners();
	};

	// EventListener
	var _setUpListeners = function _setUpListeners() {

		// click to show modal
		document.querySelector('.js-addProject').addEventListener('click', _showModal);

		// clicks to clsoe modal
		[].concat(_toConsumableArray(closeModal)).forEach(function (closeItem) {
			return closeItem.addEventListener('click', _closeModal);
		});

		form.addEventListener('submit', _formValidation);
	};

	// open Modal
	var _showModal = function _showModal(e) {

		e.preventDefault();
		document.body.classList.add('show-modal');
		modal.style.display = 'flex';
		modal.style.opacity = 1;
	};

	// close Modal
	var _closeModal = function _closeModal(e) {

		e.preventDefault();
		document.body.classList.remove('show-modal');
		modal.style.display = 'none';
		modal.style.opcity = 0;
	};

	// form validation
	var _formValidation = function _formValidation(e) {

		e.preventDefault();
		_checkForm();
	};

	var _checkForm = function _checkForm() {
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
			}
		});
	};

	return {
		init: init
	};
}();

addProject.init();