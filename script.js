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

        /* ==========================================
       MOUSE PARALLAX
    ========================================== */

    const glow1 = document.querySelector(".glow-1");
    const glow2 = document.querySelector(".glow-2");

    document.addEventListener("mousemove", (e) => {

        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        if(glow1){

            glow1.style.transform =
                `translate(${x * 35}px, ${y * 35}px)`;

        }

        if(glow2){

            glow2.style.transform =
                `translate(${-x * 35}px, ${-y * 35}px)`;

        }

    });

    /* ==========================================
       PROJECT CARD HOVER
    ========================================== */

    const cards = document.querySelectorAll(

        ".project-card, .case-card, .glass-card"

    );

    cards.forEach(card => {

        card.addEventListener("mousemove", e => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            card.style.background = `

            radial-gradient(

            circle at ${x}px ${y}px,

            rgba(124,92,255,.18),

            rgba(255,255,255,.05) 45%,

            rgba(255,255,255,.03)

            )

            `;

        });

        card.addEventListener("mouseleave", () => {

            card.style.background = "rgba(255,255,255,.05)";

        });

    });

    /* ==========================================
       HERO PARALLAX
    ========================================== */

    const hero = document.querySelector(".hero");

    window.addEventListener("scroll", () => {

        const value = window.scrollY;

        if(hero){

            hero.style.transform =
                `translateY(${value * 0.12}px)`;

        }

    });

    /* ==========================================
       PHOTO TILT EFFECT
    ========================================== */

    const avatar = document.querySelector(".hero-avatar img");

    if(avatar){

        avatar.addEventListener("mousemove", (e)=>{

            const rect = avatar.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width) - .5) * 12;

            const rotateX = ((y / rect.height) - .5) * -12;

            avatar.style.transform = `

            perspective(1000px)

            rotateX(${rotateX}deg)

            rotateY(${rotateY}deg)

            scale(1.04)

            `;

        });

        avatar.addEventListener("mouseleave", ()=>{

            avatar.style.transform =

            "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

        });

    }

    /* ==========================================
       BUTTON RIPPLE EFFECT
    ========================================== */

    document.querySelectorAll(

        ".btn-primary,.btn-secondary"

    ).forEach(button=>{

        button.addEventListener("click",function(e){

            const circle = document.createElement("span");

            const d = Math.max(

                this.clientWidth,

                this.clientHeight

            );

            circle.style.width = d + "px";

            circle.style.height = d + "px";

            circle.style.left =

                e.offsetX - d/2 + "px";

            circle.style.top =

                e.offsetY - d/2 + "px";

            circle.className = "ripple";

            this.appendChild(circle);

            setTimeout(()=>{

                circle.remove();

            },600);

        });
