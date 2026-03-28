// 1. Скрипт екрану завантаження
window.onload = function() {
    let bar = document.getElementById('load-bar');
    let text = document.getElementById('load-text');
    let width = 0;
    
    let interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            document.getElementById('loader').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
            setLang('ua'); // Початкова мова
        } else {
            width += Math.random() * 15;
            if (width > 100) width = 100;
            bar.style.width = width + '%';
            text.innerText = `> DECRYPTING_FILES... ${Math.round(width)}%`;
        }
    }, 150);
};

// 2. Логіка перемикання сторінок
function showPage(pageId) {
    document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active-link'));
}

// 3. Переклади
const translations = {
    ua: {
        nav: ["ГОЛОВНА", "ПРО СЕРВЕР", "ГРАВЦІ", "НОВИНИ"],
        status: "СТАТУС: В РОЗРОБЦІ",
        heroT: "BUNKER LIFE",
        heroD: "Forge 1.12.2. Твій новий дім — під землею.",
        btn: "УВІЙТИ В DISCORD",
        news: [
            {date: "2026-03-28", t: "Сайт запущено", d: "Система Bunker Life Online."},
            {date: "2026-03-20", t: "Тести 1.12.2", d: "Стабільність Forge ядра підтверджена."}
        ],
        footer: "&copy; 2026 BUNKER LIFE. Void Team."
    },
    ru: {
        nav: ["ГЛАВНАЯ", "О СЕРВЕРЕ", "ИГРОКИ", "НОВОСТИ"],
        status: "СТАТУС: В РАЗРАБОТКЕ",
        heroT: "BUNKER LIFE",
        heroD: "Forge 1.12.2. Твой новый дом — под землей.",
        btn: "ВОЙТИ В DISCORD",
        news: [
            {date: "2026-03-28", t: "Сайт запущен", d: "Система Bunker Life Online."},
            {date: "2026-03-20", t: "Тесты 1.12.2", d: "Стабильность Forge ядра подтверждена."}
        ],
        footer: "&copy; 2026 BUNKER LIFE. Void Team."
    }
};

function setLang(lang) {
    const t = translations[lang];
    document.getElementById('nav-home').innerText = t.nav[0];
    document.getElementById('nav-about').innerText = t.nav[1];
    document.getElementById('nav-players').innerText = t.nav[2];
    document.getElementById('nav-news').innerText = t.nav[3];
    document.getElementById('status-text').innerText = t.status;
    document.getElementById('hero-title').innerText = t.heroT;
    document.getElementById('hero-desc').innerText = t.heroD;
    document.getElementById('btn-text').innerText = t.btn;
    document.getElementById('footer-text').innerHTML = t.footer;

    // Оновлення новин
    const newsCont = document.getElementById('news-container');
    newsCont.innerHTML = '';
    t.news.forEach(n => {
        newsCont.innerHTML += `
            <div class="card news-item">
                <small>${n.date}</small>
                <h3>${n.t}</h3>
                <p>${n.d}</p>
            </div>`;
    });
}