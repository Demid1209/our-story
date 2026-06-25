document.addEventListener('DOMContentLoaded', () => {

    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => observer.observe(el));


    // COUNTERS
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


    // LANGUAGE SWITCH SAFE
    const langToggle = document.getElementById('langToggle');

    if (langToggle) {
        let lang = 'en';

        langToggle.addEventListener('click', () => {

            document.querySelectorAll('nav a').forEach(a => {

                if (lang === 'en') {
                    a.textContent = {
                        '#about': 'Обо мне',
                        '#focus': 'Фокус',
                        '#projects': 'Проекты',
                        '#timeline': 'Карьера',
                        '#contact': 'Контакты'
                    }[a.getAttribute('href')] || a.textContent;
                } else {
                    a.textContent = {
                        '#about': 'About',
                        '#focus': 'Focus',
                        '#projects': 'Projects',
                        '#timeline': 'Career',
                        '#contact': 'Contact'
                    }[a.getAttribute('href')] || a.textContent;
                }
            });

            lang = lang === 'en' ? 'ru' : 'en';
        });
    }

});
