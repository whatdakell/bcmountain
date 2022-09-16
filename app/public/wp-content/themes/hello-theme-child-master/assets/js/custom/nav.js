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
