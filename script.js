document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-1').addEventListener('click', () => navigateTo('https://tolyasike.github.io/abakumov-lab7.github.io/'));
    document.getElementById('btn-2').addEventListener('click', () => navigateTo('https://tolyasike.github.io/abakumov-lab8.github.io/'));
    document.getElementById('btn-3').addEventListener('click', () => navigateTo('https://tolyasike.github.io/abakumov-lab9.github.io/'));
    document.getElementById('btn-4').addEventListener('click', () => navigateTo('https://tolyasike.github.io/abakumov-lab10.github.io/'));
    document.getElementById('btn-5').addEventListener('click', () => navigateTo('https://tolyasike.github.io/abakumov-lab11.github.io/'));
    document.getElementById('btn-6').addEventListener('click', () => navigateTo('https://tolyasike.github.io/abakumov-lab12.github.io/'));
});

function navigateTo(page) {
    window.location.href = page;
}