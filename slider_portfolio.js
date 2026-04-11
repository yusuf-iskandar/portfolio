const slider = document.getElementById("slider");
const slides = document.querySelectorAll("#slider > div");
const dotsContainer = document.getElementById("dots");

let index = 0;
let startX = 0;
let autoSlide;

// DOTS
slides.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.className = "w-2 h-2 bg-gray-400 rounded-full cursor-pointer";
  dot.onclick = () => {
    index = i;
    updateSlider();
    resetAutoSlide();
  };
  dotsContainer.appendChild(dot);
});

function updateDots() {
  dotsContainer.querySelectorAll("div").forEach((dot, i) => {
    dot.classList.toggle("bg-black", i === index);
  });
}

// UPDATE SLIDE
function updateSlider() {
  slider.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
}

// BUTTON
document.getElementById("next").onclick = () => {
  index = (index + 1) % slides.length;
  updateSlider();
  resetAutoSlide();
};

document.getElementById("prev").onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
  resetAutoSlide();
};

// SWIPE
slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) index++;
  if (endX - startX > 50) index--;

  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  updateSlider();
  resetAutoSlide();
});

// AUTO SLIDE (10 DETIK)
function startAutoSlide() {
  autoSlide = setInterval(() => {
    index = (index + 1) % slides.length;
    updateSlider();
  }, 10000);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

// INIT
updateSlider();
startAutoSlide();