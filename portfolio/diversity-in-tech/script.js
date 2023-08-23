// mobile menu //

function toggleMobileNav() {
  document.getElementById("mobile-nav").classList.toggle("show");
}


// js for slideshow //

var slideIndex = 1;

function showImage(n) { 

  'use strict';

  var slide = document.getElementsByClassName('slides'),

    dots = document.getElementsByClassName('dot'),

    i;

  if (n > slide.length) { 

    slideIndex = 1;
  }

  if (n < 1) { 

    slideIndex = slide.length;
  }

  for (i = 0; i < slide.length; i++) { 

    slide[i].style.display = 'none';
  }
  slide[slideIndex - 1].style.display = 'block';

  for (i = 0; i < dots.length; i++) { 

    dots[i].className = dots[i].className.replace(' active', '');
  }

  dots[slideIndex - 1].className += ' active';
}

showImage(slideIndex);

function plusIndex(n) { 

  'use strict';

  showImage(slideIndex += n);
}

function currentSlide(n) { 

  'use strict';

  showImage(slideIndex = n);
}

