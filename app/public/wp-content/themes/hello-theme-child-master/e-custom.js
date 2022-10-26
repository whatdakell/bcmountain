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
const useData = (myData) => {
	console.log(myData.timezone);
	const sunrise = new Date((myData.sys.sunrise + myData.timezone) * 1000);
	console.log(sunrise, 'subrise');
	var d = new Date(new Date().getTime() - 25200 * 1000);
	d.toISOString();
	console.log(d);
};
function weatherBalloon(cityID) {
	var key = '2839f99fdb95e9a02d74e736787ba268';
	fetch('https://api.openweathermap.org/data/2.5/weather?zip=' + cityID + ',us&appid=' + key + '&units=imperial')
		.then(function (resp) {
			return resp.json();
		}) // Convert data to json
		.then(function (data) {
			console.log(data);
			useData(data);
		})
		.catch(function () {
			// catch any errors
		});
}

// document.querySelector('.wpmm_mobile_menu_btn').addEventListener('click', (e) => {
// 	$("body").toggleClass("hidden");
// }, false);

const getTime = (timezone) => {
	d = new Date();
	localTime = d.getTime();
	localOffset = d.getTimezoneOffset() * 60000;
	utc = localTime + localOffset;
	var atlanta = utc + 1000 * -14400;
	nd = new Date(atlanta);
	return nd;
};
const data = weatherBalloon(18062);

console.log(data, ' this data');
console.log(getTime());
console.log('meow');

window.onload = function () {
	console.log('hi');
};
weatherBalloon(18062);

jQuery(function ($) {
	$('.embed-tab').map(function (index) {
		const element = $(this);
		element.appendTo('.accordion-content');
		element.wrapAll(`<div class='accordion-item ${index === 0 ? ' accordion-active' : ''}' data-actab-group="0" data-actab-id=${index}>`);
		const title = element.find('.elementor-heading-title').html();
		const updatedTitle = $(`<button class="accordion-tab booking-font ${index === 0 ? ' accordion-active' : ''}" data-actab-group="0" data-actab-id=${index}>${title}</button>`);
		updatedTitle.appendTo('.accordion-tabs');
	});

	const labels = document.querySelectorAll('.accordion-item');
	const tabs = document.querySelectorAll('.accordion-tab');

	function toggleShow() {
		const target = this;
		const item = target.classList.contains('accordion-tab') ? target : target.parentElement;
		const group = item.dataset.actabGroup;
		const id = item.dataset.actabId;

		tabs.forEach(function (tab) {
			if (tab.dataset.actabGroup === group) {
				if (tab.dataset.actabId === id) {
					tab.classList.add('accordion-active');
				} else {
					tab.classList.remove('accordion-active');
				}
			}
		});

		labels.forEach(function (label) {
			const tabItem = label;
			console.log(tabItem, 'tab');
			if (tabItem.dataset.actabGroup === group) {
				if (tabItem.dataset.actabId === id) {
					tabItem.classList.add('accordion-active');
				} else {
					tabItem.classList.remove('accordion-active');
				}
			}
		});
		window.dispatchEvent(new Event('resize'));
	}

	labels.forEach(function (label) {
		label.addEventListener('click', toggleShow);
	});

	tabs.forEach(function (tab) {
		tab.addEventListener('click', toggleShow);
	});

	$('.custom-toggle > a:first-of-type').append("<span class='custom-click'><b class='fa fa-angle-down'></b></span>");

	$('.wpmm_mobile_menu_btn').click(function (e) {
		e.preventDefault();
		$('body').toggleClass('stop-scroll');
	});

	$('#datein').datepicker({
		dateFormat: 'mm/dd/yy',
	});
	$('#dateout').datepicker({
		dateFormat: 'mm/dd/yy',
	});

	$.fn.isInViewport = function () {
		var elementTop = $(this).offset().top + 50;
		var elementBottom = elementTop + $(this).outerHeight();

		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();

		return elementBottom > viewportTop && elementTop < viewportBottom;
	};

	$(window).on('resize scroll load', function () {
		$('.el-in-view').each(function () {
			if ($(this).isInViewport()) {
				$(this).addClass('in-viewport');
			}
		});
	});

	// $('.owl-carousel').owlCarousel({
	// 	items: 4,
	// 	loop: false,
	// 	center: true,
	// 	margin: 10,
	// 	URLhashListener: true,
	// 	autoplayHoverPause: true,
	// 	startPosition: 'URLHash',
	// });

	$(function () {
		$('body').addClass('animate-ready');
		setTimeout(function () {
			$('body').addClass('animate-in');
		}, 0);
	});
});

// document.addEventListener('DOMContentLoaded', function () {
// 	jQuery(function ($) {
// 		setTimeout(function () {
// 			$('body').addClass('loaded');
// 		}, 910);
// 	});
// });

// elementor-element elementor-element-5901bb21 elementor-skin-slideshow elementor-aspect-ratio-43 elementor-arrows-yes elementor-widget elementor-widget-media-carousel e-widget-swiper

// elementor-element elementor-element-5901bb21 elementor-skin-slideshow elementor-aspect-ratio-43 elementor-arrows-yes elementor-widget elementor-widget-media-carousel e-widget-swiper

// swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev

jQuery(function ($) {
	$('.elementor-swiper-button').each(function () {
		// var main_image = $(this).clone();
		// var bloc = $(this).closest('.item-content .bloc_image');
		// bloc.append(main_image);

		// var bloc = $(this).closest('.elementor-widget-media-carousel').find('.elementor-widget-container').first();
		// console.log(bloc);
		// bloc.append(main_image);
		$(this).closest('.elementor-widget-container').append(this);
	});

	$(function () {
		var isMenuAlreadyOpen = false;
		$('.hh-header .elementor-menu-toggle').on('click', function () {
			console.log('click');
			// let isMenuAlreadyOpen = false;
			console.log(isMenuAlreadyOpen);
			// e.stopPropagation();
			$('body').css('overflow', isMenuAlreadyOpen ? 'auto' : 'hidden');
			isMenuAlreadyOpen = !isMenuAlreadyOpen;
		});

		$('.select-selected2').on('click', function (e) {
			console.log('click');
			e.stopPropagation();
			// closeAllSelect(this);
			console.log(this);
			$('.select-items').toggleClass('select-hide');
			// this.classList.toggle('select-arrow-active');
		});

		// $('.select-items div').each((element) => {
		// 	console.log(element);
		// });
		$('#customToggle').on('change', function () {
			var inputVal = $('#customToggle').val();

			console.log('change', $('.custom-select select').val());
			var cont = document.getElementById('faq');
			var cont1 = document.getElementById('faq2');
			if (inputVal == 1) {
				cont1.classList.remove('active');
				cont.classList.add('active');
			} else {
				cont.classList.remove('active');
				cont1.classList.add('active');
			}
		});
	});
});

jQuery(function ($) {
	$(function () {
		//OWL

		console.log('init owl');

		function initOwl() {
			$('.place-back-counter .counter-grid-item').each(function () {
				$(this).appendTo('.owl-carousel').wrapAll("<div class='item' />");
			});
		}

		function initCardOwl() {
			$('.accordion-item').each(function () {
				$(this)
					.find('.caro-next')
					.on('click', function () {
						next();
					});
				$(this).appendTo('.copy-card-owl-init').wrapAll("<div class='item' />");
				// console.log($('.caro-next'));
			});
		}

		var owl = $('.owl-carousel');
		initCardOwl();

		var owlCard = $('.copy-card-owl-init');

		owlOptions = {
			items: 1,
			loop: true,
			margin: 10,
			center: true,
			autoplay: false,
			autoplayTimeout: 2500,
			nav: true,
		};

		owlCardOptions = {
			items: 1,
			loop: true,
			margin: 10,
			dots: true,
			autoHeight: true,
			smartSpeed: 500,
		};
		// animateOut: 'animate__fadeOutLeft',
		// animateIn: 'animate__fadeInRight',
		owlCard.owlCarousel(owlCardOptions);
		// owlCard.on('resized.owl.carousel', function (event) {
		// 	setOwlHeight();
		// });

		// owlCard.on('translated.owl.carousel', function (event) {
		// 	//....
		// 	setOwlHeight();
		// });

		if ($(window).width() < 768) {
			initOwl();
			var owlActive = owl.owlCarousel(owlOptions);
		} else {
			owl.addClass('off');
		}

		$(window).resize(function () {
			if ($(window).width() < 768) {
				if ($('.owl-carousel').hasClass('off')) {
					initOwl();
					var owlActive = owl.owlCarousel(owlOptions);
					owl.removeClass('off');
				}
			} else {
				if (!$('.owl-carousel').hasClass('off')) {
					owl.addClass('off').trigger('destroy.owl.carousel');
					owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
				}
			}
		});

		function callback(e) {
			items = e.item.count;
			item = e.item.index;
		}

		function next() {
			owlCard.trigger('next.owl.carousel');
		}

		function prev() {
			owl.trigger('prev.owl');
		}
	});
});
