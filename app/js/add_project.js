'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var addProject = function () {

	// variables

	var modal = document.querySelector('.js-modal');
	var closeModal = document.querySelectorAll('.js-modalClose');
	var form = document.querySelector('.js-validation');
	var inputs = form.querySelectorAll('input, textarea');
	var inputFile = form.querySelector('input[type="file"]');

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

		// input file change
		inputFile.addEventListener('change', _showFile);
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

	// checkform
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

	// input type file change


	function _showFile() {

		var inputFileText = document.querySelector('.file-upload');

		inputFileText.innerHTML = this.value + ' \n\t\t\t<input type="file" data-tooltip="\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435" id="add-project">\n\t            <a>\n\t          <svg class="app__icon icon icon-cloud-download">\n\t            <use xlink:href="img/sprite.svg#cloud-download"></use>\n\t          </svg>\n\t        </a>\n\t        ';
	}
	// end of input type file change

	return {
		init: init
	};
}();

addProject.init();