function Gallery(gallery) {
	if (!gallery) throw new Error('No gallery found');

	const images = Array.from(gallery.querySelectorAll('img'));
	const modal = document.querySelector('.modal');
	const prevButton = modal.querySelector('.prev');
	const nextButton = modal.querySelector('.next');
	let currentImage;

	modal.addEventListener('click', handleClickOutside);
	images.forEach(image => image.addEventListener('click', event => showImage(event.currentTarget)));
	images.forEach(
		image => image.addEventListener('keyup',
		event => {
			if (event.key === 'Enter') showImage(event.currentTarget);
		}
	));

	function showImage(element) {
		if (!element) {
			console.error('No image to show');
			return;
		}

		modal.querySelector('img').src = element.src;
		modal.querySelector('h2').textContent = element.title;
		modal.querySelector('figcaption p').textContent = element.dataset.description;
		currentImage = element;

		openModal();
	}

	function showPrevImage() {
		showImage(currentImage.previousElementSibling || gallery.lastElementChild);
	}

	function showNextImage() {
		showImage(currentImage.nextElementSibling || gallery.firstElementChild);
	}

	function openModal() {
		if (modal.matches('.open')) return;
		modal.classList.add('open');

		window.addEventListener('keyup', handleKeyUp);
		prevButton.addEventListener('click', showPrevImage);
		nextButton.addEventListener('click', showNextImage);
	}

	function closeModal() {
		modal.classList.remove('open');

		window.removeEventListener('keyup', handleKeyUp);
		prevButton.removeEventListener('click', showPrevImage);
		nextButton.removeEventListener('click', showNextImage);
	}

	function handleKeyUp(event) {
		if (event.key === 'Escape') closeModal();
		else if (event.key === 'ArrowRight') showNextImage();
		else if (event.key === 'ArrowLeft') showPrevImage();
	}

	function handleClickOutside(event) {
		if (event.target === event.currentTarget) closeModal();
	}
}
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
