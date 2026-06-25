document.addEventListener('DOMContentLoaded', () => {

// Анимация появления секций
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
},{
    threshold:0.15
});

revealElements.forEach(el => observer.observe(el));

// Анимированные счетчики
const counters = document.querySelectorAll('.counter');

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const counter = entry.target;
        const target = +counter.dataset.target;

        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 60));

        const updateCounter = () => {

            current += increment;

            if(current >= target){
                counter.innerText = target;
                return;
            }

            counter.innerText = current;

            requestAnimationFrame(updateCounter);
        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, {
    threshold:0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// Активный пункт меню
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {

    let currentSection = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(window.scrollY >= sectionTop &&
           window.scrollY < sectionTop + sectionHeight){

            currentSection = section.getAttribute('id');
        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active-link');

        if(link.getAttribute('href') === '#' + currentSection){
            link.classList.add('active-link');
        }

    });

});

// Плавный эффект появления Hero
const heroAvatar = document.querySelector('.hero-avatar');
const heroContent = document.querySelector('.hero-content');

if(heroAvatar){
    heroAvatar.animate(
        [
            { opacity:0, transform:'translateY(40px)' },
            { opacity:1, transform:'translateY(0)' }
        ],
        {
            duration:1000,
            fill:'forwards'
        }
    );
}

if(heroContent){
    heroContent.animate(
        [
            { opacity:0, transform:'translateY(40px)' },
            { opacity:1, transform:'translateY(0)' }
        ],
        {
            duration:1200,
            fill:'forwards'
        }
    );
}

// Параллакс для свечения
document.addEventListener('mousemove', (e) => {

    const glow1 = document.querySelector('.glow-1');
    const glow2 = document.querySelector('.glow-2');

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    if(glow1){
        glow1.style.transform =
            `translate(${x * 20}px, ${y * 20}px)`;
    }

    if(glow2){
        glow2.style.transform =
            `translate(${-x * 20}px, ${-y * 20}px)`;
    }
}
});
```
if(glow2){
    glow2.style.transform =
        `translate(${-x * 20}px, ${-y * 20}px)`;
}
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

});
});
