$(function() {
    // Get the form.
    var form = $('#contact-form');

    // Get the messages div.
    var formMessages = $('#form-messages');

    $(form).submit(function(e) {
    	e.preventDefault();
    	$.ajax({
    		url: '//formspree.io/emdo2000@gmail.com',
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
          form.reset();
    		},
    		error: function(err) {
    			formMessages.text('Error.' + err);
    		}
    	});
    });
});
