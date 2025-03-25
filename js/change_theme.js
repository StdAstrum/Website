const switchTheme = (theme) => {
    const themeLink = document.getElementById('theme-link');
    if (theme === 'dark') {
        themeLink.href = '/css/themes/dark.css';
    } else {
        themeLink.href = '/css/themes/light.css';
    }

    localStorage.setItem('theme', theme);
};

window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        switchTheme(savedTheme);
    } else {
        switchTheme('light');
    }
});

document.getElementById('theme-toggle-button').addEventListener('click', () => {
    const currentTheme = document.getElementById('theme-link').href.includes('dark.css') ? 'light' : 'dark';
    switchTheme(currentTheme);
});