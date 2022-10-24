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
// const sunrise = new Date((data.sys.sunrise + data.timezone) * 1000);
// console.log(sunrise);
console.log(getTime());
console.log('meow');

window.onload = function () {
	console.log('hi');
	// weatherBalloon(94949);
};
weatherBalloon(18062);

jQuery(function ($) {
	const labels = document.querySelectorAll('.accordion-item__label');
	const tabs = document.querySelectorAll('.accordion-tab');

	function toggleShow() {
		const target = this;
		const item = target.classList.contains('accordion-tab') ? target : target.parentElement;
		const group = item.dataset.actabGroup;
		const id = item.dataset.actabId;
		console.log('222');

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
			const tabItem = label.parentElement;

			if (tabItem.dataset.actabGroup === group) {
				if (tabItem.dataset.actabId === id) {
					tabItem.classList.add('accordion-active');
				} else {
					tabItem.classList.remove('accordion-active');
				}
			}
		});
	}

	labels.forEach(function (label) {
		console.log('333');
		label.addEventListener('click', toggleShow);
	});

	tabs.forEach(function (tab) {
		console.log(tab);
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

	$('.embed-tab').each(function () {
		// console.log(this);
		// .appendTo("." + key);
		var test = $(this);
		$('.accordion-item').each(function () {
			console.log(this, test);
			$(test).wrapAll("<div class='item' />");
			// $(this).append(test);
		});
	});

	$('.owl-carousel').owlCarousel({
		items: 4,
		loop: false,
		center: true,
		margin: 10,
		URLhashListener: true,
		autoplayHoverPause: true,
		startPosition: 'URLHash',
	});

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
