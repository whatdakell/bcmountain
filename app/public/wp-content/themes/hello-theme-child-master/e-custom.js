console.log('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={2839f99fdb95e9a02d74e736787ba268}');

// fetch(‘https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={2839f99fdb95e9a02d74e736787ba268}’)
//   .then(response => response.json())
//   .then(json => console.log(json));

// const localSeedInterfaceCheck = () => {
// 	return fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={2839f99fdb95e9a02d74e736787ba268}')
// 		.then((response) => response.json())
// 		.then((json) => console.log(json));
// };

// console.log(localSeedInterfaceCheck);

function weatherBalloon(cityID) {
	var key = '{2839f99fdb95e9a02d74e736787ba268}';
	fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
		.then(function (resp) {
			return resp.json();
		}) // Convert data to json
		.then(function (data) {
			console.log(data);
		})
		.catch(function () {
			// catch any errors
		});
}

window.onload = function () {
	weatherBalloon(6167865);
};

jQuery(function ($) {
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

// jQuery(function ($) {
// 	$(function () {
// 		var x, i, j, l, ll, selElmnt, a, b, c;
// 		/* Look for any elements with the class "custom-select": */
// 		x = document.getElementsByClassName('custom-select');
// 		l = x.length;
// 		console.log(x, l);
// 		for (i = 0; i < l; i++) {
// 			// selElmnt = x[i].getElementsByTagName('select')[0];
// 			// ll = selElmnt.length;
// 			// /* For each element, create a new DIV that will act as the selected item: */
// 			// a = document.createElement('DIV');
// 			// a.setAttribute('class', 'select-selected');
// 			// a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
// 			// x[i].appendChild(a);
// 			// /* For each element, create a new DIV that will contain the option list: */
// 			// b = document.createElement('DIV');
// 			// b.setAttribute('class', 'select-items select-hide');
// 			for (j = 1; j < ll; j++) {
// 				/* For each option in the original select element,
//     create a new DIV that will act as an option item: */
// 				// c = document.createElement('DIV');
// 				// c.innerHTML = selElmnt.options[j].innerHTML;
// 				c.addEventListener('click', function (e) {
// 					/* When an item is clicked, update the original select box,
//         and the selected item: */
// 					var y, i, k, s, h, sl, yl;
// 					s = this.parentNode.parentNode.getElementsByTagName('select')[0];
// 					sl = s.length;
// 					h = this.parentNode.previousSibling;
// 					for (i = 0; i < sl; i++) {
// 						if (s.options[i].innerHTML == this.innerHTML) {
// 							s.selectedIndex = i;
// 							h.innerHTML = this.innerHTML;
// 							y = this.parentNode.getElementsByClassName('same-as-selected');
// 							yl = y.length;
// 							for (k = 0; k < yl; k++) {
// 								y[k].removeAttribute('class');
// 							}
// 							this.setAttribute('class', 'same-as-selected');
// 							break;
// 						}
// 					}
// 					h.click();
// 				});
// 				b.appendChild(c);
// 			}
// 			x[i].appendChild(b);
// 			a.addEventListener('click', function (e) {
// 				/* When the select box is clicked, close any other select boxes,
//     and open/close the current select box: */
// 				e.stopPropagation();
// 				closeAllSelect(this);
// 				this.nextSibling.classList.toggle('select-hide');
// 				this.classList.toggle('select-arrow-active');
// 			});
// 		}

// 		function closeAllSelect(elmnt) {
// 			/* A function that will close all select boxes in the document,
//   except the current select box: */
// 			var x,
// 				y,
// 				i,
// 				xl,
// 				yl,
// 				arrNo = [];
// 			x = document.getElementsByClassName('select-items');
// 			y = document.getElementsByClassName('select-selected');
// 			xl = x.length;
// 			yl = y.length;
// 			for (i = 0; i < yl; i++) {
// 				if (elmnt == y[i]) {
// 					arrNo.push(i);
// 				} else {
// 					y[i].classList.remove('select-arrow-active');
// 				}
// 			}
// 			for (i = 0; i < xl; i++) {
// 				if (arrNo.indexOf(i)) {
// 					x[i].classList.add('select-hide');
// 				}
// 			}
// 		}
// 		/* If the user clicks anywhere outside the select box,
// then close all select boxes: */
// 		document.addEventListener('click', closeAllSelect);
// 	});
// });

jQuery(function ($) {
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

// const initSelect = () => {
// 	var x, i, j, l, ll, selElmnt, a, b, c;
// 	/* Look for any elements with the class "custom-select": */
// 	x = document.getElementsByClassName('custom-select');
// 	l = x.length;
// 	console.log(x, l);
// 	for (i = 0; i < l; i++) {
// 		selElmnt = x[i].getElementsByTagName('select')[0];
// 		ll = selElmnt.length;
// 		/* For each element, create a new DIV that will act as the selected item: */
// 		a = document.createElement('DIV');
// 		a.setAttribute('class', 'select-selected');
// 		a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
// 		x[i].appendChild(a);
// 		/* For each element, create a new DIV that will contain the option list: */
// 		b = document.createElement('DIV');
// 		b.setAttribute('class', 'select-items select-hide');
// 		for (j = 1; j < ll; j++) {
// 			/* For each option in the original select element,
// 	create a new DIV that will act as an option item: */
// 			c = document.createElement('DIV');
// 			c.innerHTML = selElmnt.options[j].innerHTML;
// 			c.addEventListener('click', function (e) {
// 				/* When an item is clicked, update the original select box,
// 			and the selected item: */
// 				var y, i, k, s, h, sl, yl;
// 				s = this.parentNode.parentNode.getElementsByTagName('select')[0];
// 				sl = s.length;
// 				h = this.parentNode.previousSibling;
// 				for (i = 0; i < sl; i++) {
// 					if (s.options[i].innerHTML == this.innerHTML) {
// 						s.selectedIndex = i;
// 						h.innerHTML = this.innerHTML;
// 						y = this.parentNode.getElementsByClassName('same-as-selected');
// 						yl = y.length;
// 						for (k = 0; k < yl; k++) {
// 							y[k].removeAttribute('class');
// 						}
// 						this.setAttribute('class', 'same-as-selected');
// 						break;
// 					}
// 				}
// 				h.click();
// 			});
// 			b.appendChild(c);
// 		}
// 		x[i].appendChild(b);
// 		a.addEventListener('click', function (e) {
// 			/* When the select box is clicked, close any other select boxes,
// 	and open/close the current select box: */
// 			e.stopPropagation();
// 			closeAllSelect(this);
// 			this.nextSibling.classList.toggle('select-hide');
// 			this.classList.toggle('select-arrow-active');
// 		});
// 	}

// 	function closeAllSelect(elmnt) {
// 		/* A function that will close all select boxes in the document,
// except the current select box: */
// 		var x,
// 			y,
// 			i,
// 			xl,
// 			yl,
// 			arrNo = [];
// 		x = document.getElementsByClassName('select-items');
// 		y = document.getElementsByClassName('select-selected');
// 		xl = x.length;
// 		yl = y.length;
// 		for (i = 0; i < yl; i++) {
// 			if (elmnt == y[i]) {
// 				arrNo.push(i);
// 			} else {
// 				y[i].classList.remove('select-arrow-active');
// 			}
// 		}
// 		for (i = 0; i < xl; i++) {
// 			if (arrNo.indexOf(i)) {
// 				x[i].classList.add('select-hide');
// 			}
// 		}
// 	}
// 	/* If the user clicks anywhere outside the select box,
// then close all select boxes: */
// 	document.addEventListener('click', closeAllSelect);
// };

// jQuery(function ($) {
// 	$(function () {
// 		initSelect();
// 		$('#customToggle').on('change', function () {
// 			var inputVal = $('#customToggle').val();
// 			var cont = document.getElementById('faq');
// 			var cont1 = document.getElementById('faq2');
// 			if (inputVal == 1) {
// 				cont1.classList.remove('active');
// 				cont.classList.add('active');
// 			} else {
// 				cont.classList.remove('active');
// 				cont1.classList.add('active');
// 			}
// 		});
// 	});
// });

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
