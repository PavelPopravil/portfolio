$(document).ready(function() {

	//E-mail Ajax Send
	$(".js-validation").submit(function() { //Change
		
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			swal("Хорошая работа!", "Вы отправили email!", "success");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});