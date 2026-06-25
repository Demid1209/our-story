document.addEventListener('DOMContentLoaded', () => {

    // =========================
    // REVEAL ANIMATION (FIX)
    // =========================

    const revealElements = document.querySelectorAll(
        '.section, .project-card, .skill-card, .stat-card, .glass-card'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => observer.observe(el));


    // =========================
    // COUNTERS (SAFE)
    // =========================

    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {

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
    // LANGUAGE SWITCH (SAFE)
    // =========================

    const langToggle = document.getElementById('langToggle');

    if (langToggle) {

        let currentLang = 'en';

        langToggle.addEventListener('click', () => {

            const about = document.querySelector('a[href="#about"]');
            const focus = document.querySelector('a[href="#focus"]');
            const projects = document.querySelector('a[href="#projects"]');
            const timeline = document.querySelector('a[href="#timeline"]');
            const contact = document.querySelector('a[href="#contact"]');

            if (currentLang === 'en') {

                about && (about.textContent = 'Обо мне');
                focus && (focus.textContent = 'Фокус');
                projects && (projects.textContent = 'Проекты');
                timeline && (timeline.textContent = 'Карьера');
                contact && (contact.textContent = 'Контакты');

                langToggle.textContent = 'EN';

                currentLang = 'ru';

            } else {

                about && (about.textContent = 'About');
                focus && (focus.textContent = 'Focus');
                projects && (projects.textContent = 'Projects');
                timeline && (timeline.textContent = 'Career');
                contact && (contact.textContent = 'Contact');

                langToggle.textContent = 'RU';

                currentLang = 'en';
            }
        });
    }

});
