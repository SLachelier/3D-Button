/* Constant variable assigned to select the .box class */
const button = document.querySelector(".box");

/* Event listener to listen for mouse movement */
button.addEventListener("mousemove", (e) => {
  const { x, y } = button.getBoundingClientRect();
  button.style.setProperty("--x", e.clientX - x);
  button.style.setProperty("--y", e.clientY - y);
});