import "./styles.css";
import "./components.css";

const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
