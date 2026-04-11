const container = document.getElementById("scrollContainer");
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {
  item.addEventListener("click", function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    container.scrollTo({
      top: target.offsetTop,
      behavior: "smooth"
    });
  });
});

container.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    if (container.scrollTop >= section.offsetTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(item => {
    const dot = item.querySelector("div");
    const text = item.querySelector("span");

    dot.classList.remove("bg-[#B0FD07]", "scale-125");
    dot.classList.add("bg-gray-400");

    text.classList.remove("text-black", "font-medium");
    text.classList.add("text-gray-500");

    if (item.getAttribute("href") === "#" + current) {
      dot.classList.remove("bg-gray-400");
      dot.classList.add("bg-[#B0FD07]", "scale-125");

      text.classList.remove("text-gray-500");
      text.classList.add("text-black", "font-medium");
    }
  });
});