function inc(element) {
	let el = document.querySelector(`[name="${element}"]`);
	el.value = parseInt(el.value) + 1;
}

function dec(element) {
	let el = document.querySelector(`[name="${element}"]`);
	if (parseInt(el.value) > 0) {
		el.value = parseInt(el.value) - 1;
	}
}
const useData = (myData) => {
	const sunrise = new Date((myData.sys.sunrise + myData.timezone) * 1000);
	var d = new Date(new Date().getTime() - 25200 * 1000);
	d.toISOString();
};

jQuery(function ($) {
	$('.owmw-today .owmw-highlight').appendTo('owmw-now');
	const temp = $('.owmw-today');
	$('.ski-table').map(function (index) {
		const element = $(this);
		element.appendTo('.accordion-content');
		element.wrapAll(`<div class='accordion-item ${index === 0 ? ' accordion-active' : ''}' data-actab-group="0" data-actab-id=${index}>`);
	});
	// before webcam

	const skilabels = document.querySelectorAll('.accordion-item');
	const skitabs = document.querySelectorAll('.accordion-tab');

	function toggleShow() {
		const target = this;
		const item = target.classList.contains('accordion-tab') ? target : target.parentElement;
		const group = item.dataset.actabGroup;
		const id = item.dataset.actabId;

		skitabs.forEach(function (tab) {
			if (tab.dataset.actabGroup === group) {
				if (tab.dataset.actabId === id) {
					tab.classList.add('accordion-active');
				} else {
					tab.classList.remove('accordion-active');
				}
			}
		});

		skilabels.forEach(function (label) {
			const tabItem = label;
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

	skilabels.forEach(function (label) {
		label.addEventListener('click', toggleShow);
	});

	skitabs.forEach(function (tab) {
		tab.addEventListener('click', toggleShow);
	});

	// OTHER

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

	// Video CAM

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
	// body animation class
	$(function () {
		$('body').addClass('animate-ready');
		setTimeout(function () {
			$('body').addClass('animate-in');
		}, 0);
	});
});
