function Slider(slider) {
	if (!(slider instanceof Element)) throw new Error('No slider found');

	this.slider = slider;
	this.slides = slider.querySelector('.slides');
	const prevButton = slider.querySelector('.goToPrev');
	const nextButton = slider.querySelector('.goToNext');
    this.classesToRemove = ['prev', 'current', 'next'];

	prevButton.addEventListener('click', () => this.move('prev'));
	nextButton.addEventListener('click', () => this.move('next'));
    
	this.initializeSlides();
}

Slider.prototype.move = function(direction) {
	[this.prev, this.current, this.next].forEach(element => element.classList.remove(...this.classesToRemove));
	
	if(direction === 'prev') [this.prev, this.current, this.next] = [this.prev?.previousElementSibling ?? this.slides.lastElementChild, this.prev, this.current];
	if(direction === 'next') [this.prev, this.current, this.next] = [this.current, this.next, this.next?.nextElementSibling ?? this.slides.firstElementChild];
	this.applyClasses();
}

Slider.prototype.applyClasses = function() {
	this.prev.classList.add('prev');
	this.current.classList.add('current');
	this.next.classList.add('next');
}

Slider.prototype.initializeSlides = function() {
	this.current = this.slider.querySelector('.current') ?? this.slides.firstElementChild;
	this.prev = this.current?.previousElementSibling ?? this.slides.lastElementChild;
	this.next = this.current?.nextElementSibling;
	this.applyClasses();
}

const slider1 = new Slider(document.querySelector('.slider'));
const slider2 = new Slider(document.querySelector('.dog-slider'));