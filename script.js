const menuButtonContainer = document.getElementById("menu-button-container");
const menuButton = document.getElementById("menu-button");
const menuContainer = document.getElementById("menu-container");

menuButtonContainer.addEventListener("click", () => {
  menuButton.classList.toggle("open");
  menuContainer.classList.toggle("open");

  const isOverflowHidden = document.body.style.overflow === "hidden";

  document.body.style.overflow = isOverflowHidden ? "auto" : "hidden";
});
