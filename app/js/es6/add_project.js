const addProject = (function () {
	
	// variables

	const modal = document.querySelector('.js-modal');
	const closeModal = document.querySelectorAll('.js-modalClose');
	const form = document.querySelector('.js-validation');
	const inputs = form.querySelectorAll('input, textarea');
	

	const init = function() {
		_setUpListeners();
	};


	// EventListener
	const _setUpListeners = function() {

		// click to show modal
		document.querySelector('.js-addProject').addEventListener('click', _showModal);

		// clicks to clsoe modal
		[...closeModal].forEach((closeItem) => closeItem.addEventListener('click', _closeModal)); 

		form.addEventListener('submit', _formValidation);
	};
	
	// open Modal
	const _showModal = function(e) {

		e.preventDefault();
		document.body.classList.add('show-modal');
		modal.style.display = 'flex';
		modal.style.opacity = 1;
		
		

	};

	// close Modal
	const _closeModal = function(e) {

		e.preventDefault();
		document.body.classList.remove('show-modal');
		modal.style.display = 'none';
		modal.style.opcity = 0;
		
	
	};
	
	// form validation
	const _formValidation = function(e) {

		e.preventDefault();
		_checkForm();
		
	};

	const _checkForm = function() {
		[...inputs].forEach((input) => {

			if (input.value === '') {

				const inputCoords = input.getBoundingClientRect();
				
				const coords = {
					top: inputCoords.top + window.scrollY,
					left: inputCoords.left + window.scrollX,
					width: inputCoords.width,
					height: inputCoords.height,
					text: input.dataset.tooltip
				}
			}
		});
	};

	return {
		init: init
	};

})();

addProject.init();
