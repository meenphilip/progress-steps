const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

//current active element
let currentActive = 1;

// add event listner
next.addEventListener('click', () => {
  currentActive++;

  //equal to element length
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  // update the DOM
  update();
});

// add event listner
prev.addEventListener('click', () => {
  currentActive--;

  //equal to element length
  if (currentActive < 1) {
    currentActive = 1;
  }

  // update the DOM
  update();
});

// update the DOM
function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  // Get All Active circles (for progress bar)
  const actives = document.querySelectorAll('.active');

  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  // Prev Btn
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
