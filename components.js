async function loadComponent(selector, file) {
    try {
        const response = await fetch(file);
        const html = await response.text();
        document.querySelector(selector).outerHTML = html;
    } catch (error) {
        console.error(`Ошибка загрузки ${file}:`, error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header', '/components/header.html');
    loadComponent('footer', '/components/footer.html');
});