function Gallery(gallery) {
	if (!gallery) throw new Error('No gallery found');

	this.gallery = gallery;
	this.images = Array.from(gallery.querySelectorAll('img'));
	this.modal = document.querySelector('.modal');
	this.prevButton = this.modal.querySelector('.prev');
	this.nextButton = this.modal.querySelector('.next');

	//Bind methods to the right 'this'
	this.handleClickOutside = this.handleClickOutside.bind(this);
	this.handleKeyUp = this.handleKeyUp.bind(this);
	this.showNextImage = this.showNextImage.bind(this);
	this.showPrevImage = this.showPrevImage.bind(this);

	this.modal.addEventListener('click', this.handleClickOutside);
	this.images.forEach(image => image.addEventListener('click', event => this.showImage(event.currentTarget)));
	this.images.forEach(image =>
		image.addEventListener('keyup', event => {
			if (event.key === 'Enter') this.showImage(event.currentTarget);
		})
	);
}

Gallery.prototype.showImage = function(element) {
	if (!element) {
		console.error('No image to show');
		return;
	}

	this.modal.querySelector('img').src = element.src;
	this.modal.querySelector('h2').textContent = element.title;
	this.modal.querySelector('figcaption p').textContent = element.dataset.description;
	this.currentImage = element;

	this.openModal();
}

Gallery.prototype.showPrevImage = function() {
	this.showImage(this.currentImage.previousElementSibling || this.gallery.lastElementChild);
}

Gallery.prototype.showNextImage = function() {
	this.showImage(this.currentImage.nextElementSibling || this.gallery.firstElementChild);
}

Gallery.prototype.openModal = function() {
	if (this.modal.matches('.open')) return;
	this.modal.classList.add('open');

	window.addEventListener('keyup', this.handleKeyUp);
	this.prevButton.addEventListener('click', this.showPrevImage);
	this.nextButton.addEventListener('click', this.showNextImage);
}

Gallery.prototype.closeModal = function() {
	this.modal.classList.remove('open');

	window.removeEventListener('keyup', this.handleKeyUp);
	this.prevButton.removeEventListener('click', this.showPrevImage);
	this.nextButton.removeEventListener('click', this.showNextImage);
}

Gallery.prototype.handleKeyUp = function(event) {
	if (event.key === 'Escape') this.closeModal();
	else if (event.key === 'ArrowRight') this.showNextImage();
	else if (event.key === 'ArrowLeft') this.showPrevImage();
}

Gallery.prototype.handleClickOutside = function(event) {
	if (event.target === event.currentTarget) this.closeModal();
}

const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));
