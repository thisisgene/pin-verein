// $(function() {
//     // Get the form.
//     var form = $('#contact-form');
//
//     // Get the messages div.
//     var formMessages = $('#form-messages');
//
//     $(form).submit(function(event) {
//       event.preventDefault();
//       var mname = $('#msgname');
//       var memail = $('#msgemail');
//       var msg = $('#msgcontent');
//       var subject = 'Nachricht von ' + mname;
//
//       $.ajax({
//         url: "https://formspree.io/emdo2000@gmail.com",
//         method: "POST",
//         data: {
//           'Name': mname,
//           'Email': memail,
//           'Nachricht': msg
//         },
//         dataType: "json"
//       });
//     });
// });
