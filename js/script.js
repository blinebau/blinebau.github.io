/* Scrolling Navigation events */

$(document).ready(function()
{
	$.scrollify({
		section : "section",
		sectionName : "section-name",
		interstitialSection : "",
		easing: "easeOutExpo",
		scrollSpeed: 1100,
		offset : 0,
		scrollbars: true,
		standardScrollElements: "",
		setHeights: true,
		overflowScroll: true,
		before:function() {},
		after:function() {},
		afterResize:function() {},
		afterRender:function() {}
	});
		
	$('#scroll-down').on('click', function(event) {
		event.preventDefault();
		$.scrollify.move("#about-section");
	});

	$('#nav_links').on('click', 'a', function(event) {
		event.preventDefault();
		var ref = $(this).attr('href');
		$.scrollify.move(ref);
	});

	var navOffset = $('#nav_links').offset().top;

	$(window).scroll(function() {
		if($(window).scrollTop() > navOffset) {
			$('#nav_links').css({ position: 'fixed', top: '0'});
		}
		if($(window).scrollTop() < navOffset) {
			$('#nav_links').css({ position: 'absolute', top: '100%'});
		}
	});

});

