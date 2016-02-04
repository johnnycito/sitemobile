$(function(){
    // This function changes the position of the main menu from static to fixed on scroll 
    // Check the initial Poistion of the Sticky Header
    var stickyHeaderTop = $('#stickyheader').offset().top;
    $(window).scroll(function(){
        if( $(window).scrollTop() > stickyHeaderTop ) {
            $('#stickyheader').css({position: 'fixed', top: '0px'});
            $('#stickyalias').css('display', 'block');
        } else {
            $('#stickyheader').css({position: 'static', top: '0px'});
            $('#stickyalias').css('display', 'none');
        }
    });
	
	$('a[href*=#]:not([href=#])').click(function() {
		console.log('hello');
		var seccion = $(this).attr("href");
		$("body, html").animate({
			scrollTop: $(seccion).offset().top-90
		}, 800);
		return false;
	});
	
	$('.go-top').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 800);
	});
	
	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function() {
		$('.navbar-toggle:visible').click();
	});
	
	$('.navbar-collapse ul li a').click(function() {
		$('.navbar-collapse ul li a.active').removeClass('active');
		$(this).closest('a').addClass('active');
	});
});