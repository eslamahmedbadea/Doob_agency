// Start Go Up Button //
goUpBtn = document.querySelector('.upBtn');
window.onscroll = function () {
  if (window.scrollY >= 1000) {
    goUpBtn.style.display = 'block';
  } else {
    goUpBtn.style.display = 'none';
  }
};

goUpBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
// End Go Up Button //

// Start Direction Helper //
function getDirFactor() {
  if (document.documentElement.dir === 'rtl') {
    return 1;
  } else {
    return -1;
  }
}
// End Direction Helper //

// Start About Slider //
let slider = document.querySelector('.slider-wrapper');
let slidersNumber = document.querySelectorAll('.every-slide-container');
let nextBtn = document.querySelector('.arrow-about-right');
let prevBtn = document.querySelector('.arrow-about-left');
let currentAboutSlider = 0;

function updateAboutSlider() {
  slider.style.transform = `translateX(${
    getDirFactor() * currentAboutSlider * 100
  }%)`;
}

nextBtn.onclick = function () {
  currentAboutSlider++;

  if (currentAboutSlider > slidersNumber.length - 1) {
    currentAboutSlider = 0;
  }
  updateAboutSlider();
};

prevBtn.onclick = function () {
  currentAboutSlider--;

  if (currentAboutSlider < 0) {
    currentAboutSlider = slidersNumber.length - 1;
  }

  updateAboutSlider();
};
// End About Slider //

// Start Portfolio Slider //
let morePortfolio = document.querySelector('.more-portfolio');
let seeMoreButton = document.querySelector('.portfolio-last-p');

seeMoreButton.onclick = function () {
  morePortfolio.style.display =
    morePortfolio.style.display === 'block' ? 'none' : 'block';
};

let portWrapper = document.querySelector('.port-wrapper');
let portArrowNext = document.querySelector('#port-arrow-2');
let portArrowPrev = document.querySelector('#port-arrow-1');
let portSlides = document.querySelectorAll('.port-slide');
let currentPortSlide = 0;

function updatePortfolioSlider() {
  portWrapper.style.transform = `translateX(${
    getDirFactor() * currentPortSlide * 100
  }%)`;
}

portArrowNext.onclick = function () {
  currentPortSlide++;

  if (currentPortSlide > portSlides.length - 1) {
    currentPortSlide = 0;
  }

  updatePortfolioSlider();
};

portArrowPrev.onclick = function () {
  currentPortSlide--;

  if (currentPortSlide < 0) {
    currentPortSlide = portSlides.length - 1;
  }

  updatePortfolioSlider();
};
// End Portfolio Slider //

// Start Blog Slider //
let blogAllCards = document.querySelectorAll('.blog-card');

// Activate card
blogAllCards.forEach((card) => {
  card.onclick = function () {
    blogAllCards.forEach((c) => c.classList.remove('active'));
    this.classList.add('active');
  };
});

// Change news inside card
blogAllCards.forEach((card) => {
  let arrow = card.querySelector('.blog-arrow');
  let wrapper = card.querySelector('.blog-wrapper');
  let slides = card.querySelectorAll('.blog-slide');
  let currentSlide = 0;

  arrow.onclick = function () {
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    wrapper.style.transform = `translateX(${
      getDirFactor() * currentSlide * 100
    }%)`;
  };
});
// End Blog Slider //

// Start Form Validation //
let emailForm = document.querySelector('#mail-form');
let subjectForm = document.querySelector('#subject-form');
let messageForm = document.querySelector('#message-form');

document.forms[0].onsubmit = function (e) {
  let emailValid = emailForm.value.trim() !== '';
  let subjectValid = subjectForm.value.trim() !== '';
  let messageValid = messageForm.value.trim() !== '';

  if (!emailValid || !subjectValid || !messageValid) {
    e.preventDefault();
  }
};
// End Form Validation //

/* ======================================================
   AOS Init
====================================================== */
window.addEventListener('load', () => {
  AOS.init({
    once: true,
    disableMutationObserver: true,
  });
});
