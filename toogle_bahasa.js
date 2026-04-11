let currentLang = localStorage.getItem("lang") || "en";

const switchBtn = document.getElementById("langSwitch");
const circle = document.getElementById("switchCircle");
const labelID = document.getElementById("labelID");
const labelEN = document.getElementById("labelEN");

// APPLY TEXT
function applyLanguage(lang) {
  document.querySelectorAll("[data-id]").forEach(el => {
    el.innerHTML = el.getAttribute("data-" + lang);
  });
}

// UPDATE UI SWITCH
function updateSwitchUI() {
  if (currentLang === "en") {
    circle.style.transform = "translateX(24px)";
    switchBtn.classList.add("active-switch");

    labelEN.classList.add("font-bold");
    labelID.classList.remove("font-bold");
  } else {
    circle.style.transform = "translateX(0px)";
    switchBtn.classList.remove("active-switch");

    labelID.classList.add("font-bold");
    labelEN.classList.remove("font-bold");
  }
}

// INIT
applyLanguage(currentLang);
updateSwitchUI();

// TOGGLE
switchBtn.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "id" : "en";

  localStorage.setItem("lang", currentLang);

  applyLanguage(currentLang);
  updateSwitchUI();
});