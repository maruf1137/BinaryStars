window.addEventListener('scroll', () => {
	const nav = document.querySelector('.nav');
	const btnScrollToTop = document.querySelector('.btn-scrollToTop');
	const target = window.scrollY;
	if (target > 100) {
		nav.classList.add('sticky');
		btnScrollToTop.classList.add('show-btn');
	} else {
		nav.classList.remove('sticky');
		btnScrollToTop.classList.remove('show-btn');
	}
});
