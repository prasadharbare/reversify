const inputEl = window.document.querySelector("[chak-input]");
const buttonEl = window.document.querySelector("[chak-btn]");
const chipEl = window.document.querySelector("[chak-chip]");

inputEl.addEventListener("keypress", (e) => {
    console.log(e.keyCode);
});

console.log(buttonEl);
buttonEl.addEventListener("click", () => {
  alert("hey");
});
