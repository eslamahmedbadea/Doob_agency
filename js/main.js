// --------------------------------------------------------------------------- //

//-// Start About //-//
let slider = document.querySelector('.slider-wrapper');
let slidersNumber = document.querySelectorAll('.every-slide-container');
let nextBtn = document.querySelector('.arrow-about-right');
let prevBtn = document.querySelector('.arrow-about-left');
let currentAboutSlider = 0;

// Install right arrow slide
nextBtn.onclick = function () {
  currentAboutSlider++;

  if (currentAboutSlider > slidersNumber.length - 1) {
    currentAboutSlider = 0;
  }

  slider.style.transform = `translateX(-${currentAboutSlider * 100}%)`;
};

// Install left arrow slide
prevBtn.onclick = function () {
  currentAboutSlider--;

  if (currentAboutSlider < 0) {
    currentAboutSlider = slidersNumber.length - 1;
  }

  slider.style.transform = `translateX(-${currentAboutSlider * 100}%)`;
};
//-// End About //-//

// --------------------------------------------------------------------------- //

//--// Start Portfolio //-//
let morePortfolio = document.querySelector('.more-portfolio');
let seeMoreButton = document.querySelector('.portfolio-last-p');

// Show & Hide projects
seeMoreButton.onclick = function () {
  if (morePortfolio.style.display === 'block') {
    morePortfolio.style.display = 'none';
  } else {
    morePortfolio.style.display = 'block';
  }
};

// Portfolio Slider
let portWrapper = document.querySelector('.port-wrapper');
let portArrowNext = document.querySelector('#port-arrow-2');
let portArrowPrev = document.querySelector('#port-arrow-1');
let portSlides = document.querySelectorAll('.port-slide');
let currentPortSlide = 0;

portArrowNext.onclick = function () {
  currentPortSlide++;
  if (currentPortSlide > portSlides.length - 1) {
    currentPortSlide = 0;
  }
  portWrapper.style.transform = `translateX(-${currentPortSlide * 100}%)`;
};

portArrowPrev.onclick = function () {
  currentPortSlide--;
  if (currentPortSlide < 0) {
    currentPortSlide = portSlides.length - 1;
  }
  portWrapper.style.transform = `translateX(-${currentPortSlide * 100}%)`;
};
//--// Start Portfolio //-//

// --------------------------------------------------------------------------- //

//--// Start Blog //-//
let blogAllCards = document.querySelectorAll('.blog-card');
for (let i = 0; i < blogAllCards.length; i++) {
  blogAllCards[i].onclick = function () {
    for (let j = 0; j < blogAllCards.length; j++) {
      blogAllCards[j].classList.remove('active');
    }
    this.classList.add('active');
  };
}

// Change news
let blogCards = document.querySelectorAll('.blog-card');

for (let i = 0; i < blogCards.length; i++) {
  let card = blogCards[i];
  let arrow = card.querySelector('.blog-arrow');
  let wrapper = card.querySelector('.blog-wrapper');
  let slides = card.querySelectorAll('.blog-slide');
  let currentSlide = 0;

  arrow.onclick = function () {
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
  };
}
//--// End Blog //-//

// --------------------------------------------------------------------------- //

//--// Start Form Validation //-//
let emailForm = document.querySelector('#mail-form');
let subjectForm = document.querySelector('#subject-form');
let messageForm = document.querySelector('#message-form');

document.forms[0].onsubmit = function (e) {
  // Flags
  let emailValid = true;
  let subjectValid = true;
  let messageValid = true;

  // Check email
  if (emailForm.value === '') {
    emailValid = false;
  }

  // Check subject
  if (subjectForm.value === '') {
    subjectValid = false;
  }

  // Check message
  if (messageForm.value === '') {
    messageValid = false;
  }

  // Stop submit if any field is invalid
  if (
    emailValid === false ||
    subjectValid === false ||
    messageValid === false
  ) {
    e.preventDefault();
  }
};
//--// End Form Validation //-//

// AOS Call
AOS.init({
  duration: 800,
  once: true,
});
