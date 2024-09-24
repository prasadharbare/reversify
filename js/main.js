import handleToggleTheme from "./handleToggleTheme.js";

// Elements Target
const inputEl = document.querySelector("[data-input-string]");
const buttonEl = document.querySelector("[data-button-copy]");
const chipEl = document.querySelector("[data-chip]");
const toggleEl = document.querySelector("[data-toggle-theme]");

// Core functionality
function reverse(input) {
  return input.split("").reverse().join("");
}

function handleReverse() {
  console.log("Hey");
  const currentValue = inputEl.value;

  console.log(currentValue);

  if (!currentValue) return;

  console.log("Wow");

  const reversed = reverse(currentValue);
  inputEl.value = reversed;
  // copy karega to clipboard
  // chip ko fade karne ka
  chipEl.classList.add("show");

  navigator.clipboard.writeText(reversed);

  setTimeout(() => {
    chipEl.classList.remove("show");
  }, 1500);
}

inputEl.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    handleReverse();
  }
});

buttonEl.addEventListener("click", handleReverse);

// ====== TOGGLE FUNCTIONALITY ======
toggleEl.addEventListener("click", () => {
  handleToggleTheme();
});
