window.addEventListener('scroll', () => {
	const nav = document.querySelector('.nav');
	const target = window.scrollY;
	if (target > 100) {
		nav.classList.add('sticky');
	} else {
		nav.classList.remove('sticky');
	}
});
