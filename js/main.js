const HTML_ELEMENT = document.querySelector("html");
const COLOR_THEME_BTN_ITEMS_ELEMENTS = document.querySelectorAll(".site-theme-toggle-btn .toggle-btn-input");

COLOR_THEME_BTN_ITEMS_ELEMENTS.forEach(item => item.addEventListener('click', e => {
    const CLASS_DARK = "dark";
    if (e.target.value == CLASS_DARK) {
        if (!HTML_ELEMENT.classList.contains(CLASS_DARK))
            HTML_ELEMENT.classList.add(CLASS_DARK);
    }
    else if (HTML_ELEMENT.classList.contains(CLASS_DARK))
        HTML_ELEMENT.classList.remove(CLASS_DARK);
}));
