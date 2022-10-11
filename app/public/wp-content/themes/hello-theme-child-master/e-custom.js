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
// const sunrise = new Date((data.sys.sunrise + data.timezone) * 1000);
// console.log(sunrise);
console.log(getTime());
console.log('eekkk');

window.onload = function () {
	console.log('hi');
	// weatherBalloon(94949);
};
weatherBalloon(18062);

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
		$('.el-in-view').each(function () {
			if ($(this).isInViewport()) {
				$(this).addClass('in-viewport');
			}
		});
	});

	$(function () {
		$('body').addClass('animate-ready');
		setTimeout(function () {
			$('body').addClass('animate-in');
		}, 500);
	});
});

// document.addEventListener('DOMContentLoaded', function () {
// 	jQuery(function ($) {
// 		setTimeout(function () {
// 			$('body').addClass('loaded');
// 		}, 910);
// 	});
// });

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

