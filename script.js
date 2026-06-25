document.addEventListener('DOMContentLoaded', () => {

    // Reveal animation
    const revealElements = document.querySelectorAll(
        '.section, .project-card, .skill-card, .stat-card, .glass-card'
    );

    revealElements.forEach(el => {
        el.classList.add('reveal');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => observer.observe(el));

    // Counters
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);
        let current = 0;

        const update = () => {

            current += Math.ceil(target / 60);

            if(current >= target){
                counter.innerText = target;
                return;
            }

            counter.innerText = current;

            requestAnimationFrame(update);
        };

        update();

    });

    // Language Switch
    const langToggle = document.getElementById('langToggle');

    if(langToggle){

        let currentLang = 'en';

        langToggle.addEventListener('click', () => {

            if(currentLang === 'en'){

                document.querySelector('a[href="#about"]').textContent = 'Обо мне';
                document.querySelector('a[href="#focus"]').textContent = 'Фокус';
                document.querySelector('a[href="#projects"]').textContent = 'Проекты';
                document.querySelector('a[href="#timeline"]').textContent = 'Карьера';
                document.querySelector('a[href="#contact"]').textContent = 'Контакты';

                langToggle.textContent = 'EN';

                currentLang = 'ru';

            } else {

                document.querySelector('a[href="#about"]').textContent = 'About';
                document.querySelector('a[href="#focus"]').textContent = 'Focus';
                document.querySelector('a[href="#projects"]').textContent = 'Projects';
                document.querySelector('a[href="#timeline"]').textContent = 'Career';
                document.querySelector('a[href="#contact"]').textContent = 'Contact';

                langToggle.textContent = 'RU';

                currentLang = 'en';
            }

        });

    }

});
