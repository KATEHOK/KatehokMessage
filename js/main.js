const LOCAL_STORAGE_COLOR_THEME_NAME = 'KMcolorTheme';
const HTML_ELEMENT = document.querySelector("html");
const COLOR_THEME_BTN_ITEMS_ELEMENTS = document.querySelectorAll(".site-theme-toggle-btn .toggle-btn-input");

window.addEventListener('DOMContentLoaded', () => {
    const THEME = window.localStorage.getItem(LOCAL_STORAGE_COLOR_THEME_NAME);
    COLOR_THEME_BTN_ITEMS_ELEMENTS.forEach(element => {
        if (element.value == THEME) element.checked = true;
        else element.checked = false;
    });
    setColorTheme(THEME);
});

COLOR_THEME_BTN_ITEMS_ELEMENTS.forEach(item => item.addEventListener('click', e => {
    setColorTheme(e.target.value);
    window.localStorage.setItem(LOCAL_STORAGE_COLOR_THEME_NAME, e.target.value);
}));

function setColorTheme(theme = 'light') {
    const CLASS_DARK = "dark";
    if (theme == CLASS_DARK) {
        if (!HTML_ELEMENT.classList.contains(CLASS_DARK))
            HTML_ELEMENT.classList.add(CLASS_DARK);
    }
    else if (HTML_ELEMENT.classList.contains(CLASS_DARK))
        HTML_ELEMENT.classList.remove(CLASS_DARK);
}
