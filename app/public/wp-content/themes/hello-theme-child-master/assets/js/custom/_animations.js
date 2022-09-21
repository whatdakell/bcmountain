function inc(element) {
	let el = document.querySelector(`[name="${element}"]`);
	el.value = parseInt(el.value) + 1;
}

function dec(element) {
	console.log(element);
	let el = document.querySelector(`[name="${element}"]`);
	if (parseInt(el.value) > 0) {
		el.value = parseInt(el.value) - 1;
	}
}
jQuery(function ($) {
	$('#datein').datepicker({
		dateFormat: 'mm/dd/yy',
	});
	$('#dateout').datepicker({
		dateFormat: 'mm/dd/yy',
	});

	$.fn.isInViewport = function () {
		var elementTop = $(this).offset().top + 150;
		var elementBottom = elementTop + $(this).outerHeight();

		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();

		return elementBottom > viewportTop && elementTop < viewportBottom;
	};

	$(window).on('resize scroll', function () {
		$('.hh-in-view').each(function () {
			if ($(this).isInViewport()) {
				$(this).addClass('in-viewport');
			}
		});
	});

	$(function () {
		//OWL
		// $(document).ready(function () {
		// 	$('.hh-in-view').bind('inview', function (event, visible) {
		// 		if (visible == true) {
		// 			// element is now visible in the viewport
		// 			$(this).addClass('addclass');
		// 			$(this).removeClass('removeclass');
		// 		} else {
		// 			// element has gone out of viewport
		// 			$(this).removeClass('addclass');
		// 			$(this).addClass('removeclass');
		// 		}
		// 	});
		// });
		$('body').addClass('animate-ready');
		// if ($('.e-page-transition--entered')) {
		// 	$('body.home').addClass('animate-in').delay(1000);
		// }
		setTimeout(function () {
			$('body').addClass('animate-in');
		}, 500);
		// if (window.location.pathname == '/') {
		// 	console.log('hii');
		// 	$('body.home').addClass('animate-ready');
		// 	// if ($('.e-page-transition--entered')) {
		// 	// 	$('body.home').addClass('animate-in').delay(1000);
		// 	// }
		// 	setTimeout(function () {
		// 		$('body.home').addClass('animate-in-menu');
		// 	}, 500);
		// 	// $('e-page-transition').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function () {
		// 	// 	console.log('its done');
		// 	// 	$('body.home').addClass('animate-in').delay(1000);
		// 	// });
		// }
	});
});

// document.addEventListener('DOMContentLoaded', function () {
// 	jQuery(function ($) {
// 		setTimeout(function () {
// 			$('body').addClass('loaded');
// 		}, 910);
// 	});
// });
