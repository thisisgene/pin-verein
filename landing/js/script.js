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
    			formMessages.text('Sending...');

    		},
    		success: function(data) {
          formMessages.text('Message sent!');
    		},
    		error: function(err) {
    			formMessages.text('Error.' + err);
    		}
    	});
    });
});
