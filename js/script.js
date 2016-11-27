/* Scrolling Navigation events */

$(document).ready(function()
{
/*	$.scrollify({
		section : "section",
		sectionName : "section-name",
		interstitialSection : "",
		easing: "easeOutExpo",
		scrollSpeed: 1100,
		offset : 0,
		scrollbars: true,
		standardScrollElements: false,
		setHeights: false,
		overflowScroll: true,
		before:function() {},
		after:function() {},
		afterResize:function() {},
		afterRender:function() {}
	});

	$('#nav_links').on('click', 'a', function(event) {
		event.preventDefault();
		var ref = $(this).attr('href');
		$.scrollify.move(ref);
	});*/

	var navOffSet = $('#site-nav').offset().top;

	$(window).scroll(function() {
		if($('#nav_links').hasClass('show')) {
			$('#nav_links').toggleClass('show');
		}
		if($(window).scrollTop() >= navOffSet) {
			$('#site-nav').css({ position: 'fixed', top: '0'});
		}
		else {
			$('#site-nav').css({ position: 'absolute', top: '100%'});
		}
	});

	$('#hamburger-nav').on('click', function(event) {
		event.preventDefault();
		$('#nav_links').toggleClass('show');
	});

	$('.degree').on('click', function(event) {
		toggleInfo(this);
	});

	$('.proj-desc').on('click', function(event) {
		toggleInfo(this);
	});

	function toggleInfo(element) {
		if($(window).width() >= 768) {
			$(element).next().toggleClass('hide');
		} else {
			$(element).next().toggleClass('show');
		}
		$("i", element).toggleClass('fa-caret-down fa-caret-right');
	};
});