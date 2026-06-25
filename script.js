document.addEventListener('DOMContentLoaded', () => {

    // =========================
    // REVEAL SAFE MODE
    // =========================

    const elements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));


    // =========================
    // COUNTERS SAFE
    // =========================

    document.querySelectorAll('.counter').forEach(counter => {

        const target = parseInt(counter.dataset.target || "0", 10);
        if (!target) return;

        let current = 0;
        const step = Math.ceil(target / 60);

        const update = () => {
            current += step;

            if (current >= target) {
                counter.innerText = target;
                return;
            }

            counter.innerText = current;
            requestAnimationFrame(update);
        };

        update();
    });


    // =========================
    // NAV LINKS FIX (VERY IMPORTANT)
    // =========================

    // защита от null
    document.querySelectorAll('nav a').forEach(link => {
        if (!link) return;
    });


    // =========================
    // LANGUAGE SWITCH SAFE
    // =========================

    const toggle = document.getElementById('langToggle');

    if (toggle) {

        let lang = 'en';

        toggle.addEventListener('click', () => {

            const map = {
                en: {
                    '#about': 'About',
                    '#focus': 'Focus',
                    '#projects': 'Projects',
                    '#timeline': 'Career',
                    '#contact': 'Contact'
                },
                ru: {
                    '#about': 'Обо мне',
                    '#focus': 'Фокус',
                    '#projects': 'Проекты',
                    '#timeline': 'Карьера',
                    '#contact': 'Контакты'
                }
            };

            document.querySelectorAll('nav a').forEach(a => {
                const key = a.getAttribute('href');
                if (map[lang][key]) {
                    a.textContent = map[lang][key];
                }
            });

            lang = lang === 'en' ? 'ru' : 'en';
            toggle.textContent = lang === 'en' ? 'RU' : 'EN';
        });
    }

});
