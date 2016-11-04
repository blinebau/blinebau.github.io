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
		if($(window).scrollTop() >= navOffSet) {
			$('#site-nav').css({ position: 'fixed', top: '0'});
		}
		if($(window).scrollTop() < navOffSet) {
			$('#site-nav').css({ position: 'absolute', top: '100%'});
		}
	});

	$('#hamburger-nav').on('click', function(event) {
		event.preventDefault();
		$('#nav_links').toggleClass('toggle');
	});

	$('.degree').on('click', function(event) {
		$(this).next().toggleClass('show');
		$("i", this).toggleClass('fa-caret-down fa-caret-right');
	});

	$('.proj-desc').on('click', function(event) {
		$(this).next().toggleClass('show');
		$("i", this).toggleClass('fa-caret-down fa-caret-right');
	})
});