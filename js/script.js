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
		//console.log(href);
	});

	$('#side_nav').on('click', 'a', function(event) {
		event.preventDefault();
		var ref = $(this).attr('href');
		$.scrollify.move(ref);
	});

/*?	$('.a_nav').click(function(e) {
		console.log(this);
		// do work here
		// extrat href
		// nav to href
	})*/
});

