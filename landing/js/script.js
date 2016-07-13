$(function() {
    // Get the form.
    var form = $('#contact-form');

    // Get the messages div.
    var formMessages = $('#form-messages');

    $(form).submit(function(e) {
    	e.preventDefault();
    	$.ajax({
    		url: 'https://formspree.io/contact@pin.or.at',
    		method: 'POST',
    		data: $(this).serialize(),
    		dataType: 'json',
    		beforeSend: function() {
    			formMessages.text('Ihre Nachricht wird gesendet / Sending your message');
          formMessages.removeClass('success');
          formMessages.fadeIn(1000);
    		},
    		success: function(data) {
          formMessages.text('Danke für Ihre Nachricht! / Thank you for your Message!');
          formMessages.addClass('success').delay(3000).fadeOut(1000);
          $('#form-reset').click();
    		},
    		error: function(err) {
    			formMessages.text('Error.' + err);
    		}
    	});
    });
});
