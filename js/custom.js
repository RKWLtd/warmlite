$(document).ready(function(){
	$('.navbar-toggle').click(function(){
		$(this).toggleClass('open');
	});
});

$('#tab').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('#colour-tab').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


/* -------------------
Contact form
---------------------*/
$('#contactform').submit(function(){
    var action = $(this).attr('action');
    $("#message").slideUp(250,function() {
        $('#message').hide();
        $('#submit')
            .after('<img src="images/submit-loader.gif" class="loader" />')
            .attr('disabled','disabled');
        $.post(action, {
            name: $('#name').val(),
            email: $('#email').val(),
            subject: $('#subject').val(), 
            comments: $('#comments').val(),
        },
            function(data){
                document.getElementById('message').innerHTML = data;
                $('#message').slideDown(250);
                $('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
                $('#submit').removeAttr('disabled');
                if(data.match('success') != null) $('#contactform').slideUp(850, 'easeInOutExpo');
            }
        );
    });
    return false;
});


/* -------------------
Newsletter form
---------------------*/
$('#newsletter-form').submit(function(){
    var action = $(this).attr('action');
    $("#message").slideDown(250,function() {
        $('#message').hide();
        $('#submit')
            .after('<div class="newsletter-success">You\'re in! Thanks for signing up.</div>')
            .attr('disabled','disabled');
        $.post(action, {
            accName: $('#accName').val(),
            listName: $('#listName').val(),
            email: $('#email').val(), 
        },
            function(data){
                document.getElementById('message').innerHTML = data;
                $('#message').slideDown(250);
                $('#newsletter-form img.loader').fadeOut('slow',function(){$(this).remove()});
                $('#submit').removeAttr('disabled');
                if(data.match('success') != null) $('#newsletter-form').slideUp(850, 'easeInOutExpo');
            }
        );
    });
    return false;
});


/* -------------------
Footer Newsletter form
---------------------*/
$('#footer-newsletter-form').submit(function(){
    var action = $(this).attr('action');
    $("#footer-message").slideDown(250,function() {
        $('#footer-message').hide();
        $('#footer-submit')
            .after('<div class="footer-newsletter-success">You\'re in! Thanks for signing up.</div>')
            .attr('disabled','disabled');
        $.post(action, {
            accName: $('#accName').val(),
            listName: $('#listName').val(),
            email: $('#email').val(), 
        },
            function(data){
                document.getElementById('message').innerHTML = data;
                $('#footer-message').slideDown(250);
                $('#footer-newsletter-form img.loader').fadeOut('slow',function(){$(this).remove()});
                $('#footer-submit').removeAttr('disabled');
                if(data.match('success') != null) $('#newsletter-form').slideUp(850, 'easeInOutExpo');
            }
        );
    });
    return false;
});