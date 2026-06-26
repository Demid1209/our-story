document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       REVEAL ANIMATION
    ========================================== */

    const revealItems = document.querySelectorAll(
        ".section, .glass-card, .project-card, .case-card, .skill-card, .stat-card, .timeline-item"
    );

    revealItems.forEach(item => {
        item.classList.add("reveal");
    });

    const revealObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("active");

            }

        });

    },{

        threshold:0.15

    });

    revealItems.forEach(item => {

        revealObserver.observe(item);

    });

    /* ==========================================
       HERO ANIMATION
    ========================================== */

    const heroAvatar = document.querySelector(".hero-avatar");

    const heroContent = document.querySelector(".hero-content");

    if(heroAvatar){

        heroAvatar.animate([

            {
                opacity:0,
                transform:"translateY(60px)"
            },

            {
                opacity:1,
                transform:"translateY(0)"
            }

        ],{

            duration:900,

            fill:"forwards"

        });

    }

    if(heroContent){

        heroContent.animate([

            {
                opacity:0,
                transform:"translateY(60px)"
            },

            {
                opacity:1,
                transform:"translateY(0)"
            }

        ],{

            duration:1200,

            fill:"forwards"

        });

    }

    /* ==========================================
       ACTIVE NAVIGATION
    ========================================== */

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 180;

            const height = section.clientHeight;

            if(window.scrollY >= top &&
               window.scrollY < top + height){

                current = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active-link");

            if(link.getAttribute("href") === "#" + current){

                link.classList.add("active-link");

            }

        });

    });

    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    navLinks.forEach(link => {

        link.addEventListener("click", e => {

            e.preventDefault();

            const target = document.querySelector(

                link.getAttribute("href")

            );

            if(target){

                target.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });

            }

        });

    });

    /* ==========================================
       HEADER SHOW / HIDE
    ========================================== */

    const header = document.querySelector(".header");

    let lastScroll = 0;

    window.addEventListener("scroll", () => {

        const currentScroll = window.pageYOffset;

        if(currentScroll > lastScroll &&
           currentScroll > 120){

            header.style.transform = "translateY(-100%)";

        }

        else{

            header.style.transform = "translateY(0)";

        }

        lastScroll = currentScroll;

    });
