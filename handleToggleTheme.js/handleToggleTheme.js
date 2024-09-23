const rootEl = document.querySelector("html");

function handleToggleTheme() {
    rootEl.classList.toggle("dark-theme");
}

export default handleToggleTheme;

