// jQuery(function ($) {
// 	$(function () {
// 		//OWL

// 		console.log('init owl');

// 		function initOwl() {
// 			$('.place-back-counter .counter-grid-item').each(function () {
// 				$(this).appendTo('.owl-carousel').wrapAll("<div class='item' />");
// 			});
// 		}

// 		function initCardOwl() {
// 			$('.copy-card-caro-init .caro').each(function () {
// 				$(this)
// 					.find('.caro-next')
// 					.on('click', function () {
// 						next();
// 					});
// 				$(this).appendTo('.copy-card-owl-init').wrapAll("<div class='item' />");
// 				// console.log($('.caro-next'));
// 			});
// 		}

// 		var owl = $('.owl-carousel');
// 		initCardOwl();

// 		var owlCard = $('.copy-card-owl-init');

// 		owlOptions = {
// 			items: 1,
// 			loop: true,
// 			margin: 10,
// 			center: true,
// 			autoplay: false,
// 			autoplayTimeout: 2500,
// 			nav: true,
// 		};

// 		owlCardOptions = {
// 			items: 1,
// 			loop: true,
// 			margin: 10,
// 			dots: true,
// 			autoHeight: true,
// 			smartSpeed: 500,
// 		};
// 		// animateOut: 'animate__fadeOutLeft',
// 		// animateIn: 'animate__fadeInRight',
// 		owlCard.owlCarousel(owlCardOptions);
// 		// owlCard.on('resized.owl.carousel', function (event) {
// 		// 	setOwlHeight();
// 		// });

// 		// owlCard.on('translated.owl.carousel', function (event) {
// 		// 	//....
// 		// 	setOwlHeight();
// 		// });

// 		if ($(window).width() < 768) {
// 			initOwl();
// 			var owlActive = owl.owlCarousel(owlOptions);
// 		} else {
// 			owl.addClass('off');
// 		}

// 		$(window).resize(function () {
// 			if ($(window).width() < 768) {
// 				if ($('.owl-carousel').hasClass('off')) {
// 					initOwl();
// 					var owlActive = owl.owlCarousel(owlOptions);
// 					owl.removeClass('off');
// 				}
// 			} else {
// 				if (!$('.owl-carousel').hasClass('off')) {
// 					owl.addClass('off').trigger('destroy.owl.carousel');
// 					owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
// 				}
// 			}
// 		});

// 		function callback(e) {
// 			items = e.item.count;
// 			item = e.item.index;
// 		}

// 		function next() {
// 			owlCard.trigger('next.owl.carousel');
// 		}

// 		function prev() {
// 			owl.trigger('prev.owl');
// 		}
// 	});
// });
