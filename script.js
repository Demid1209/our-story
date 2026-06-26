document.addEventListener("DOMContentLoaded", () => {

/* ===========================
Reveal Animation
=========================== */

const reveals = document.querySelectorAll(
".section,.project-card,.glass-card,.skill-card,.case-card,.stat-card"
);

reveals.forEach(el=>{
    el.classList.add("reveal");
});

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:.15
});

reveals.forEach(el=>revealObserver.observe(el));

/* ===========================
Animated Counters
=========================== */

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting)return;

const counter=entry.target;

const target=Number(counter.dataset.target);

let current=0;

const step=Math.max(1,Math.ceil(target/60));

function update(){

current+=step;

if(current>=target){

counter.textContent=target;

return;

}

counter.textContent=current;

requestAnimationFrame(update);

}

update();

counterObserver.unobserve(counter);

});

},{
threshold:.5
});

counters.forEach(counter=>counterObserver.observe(counter));

/* ===========================
Active Menu
=========================== */

const sections=document.querySelectorAll("section[id]");

const links=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-180;

const height=section.offsetHeight;

if(window.scrollY>=top&&window.scrollY<top+height){

current=section.id;

}

});

links.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/* ===========================
Back To Top
=========================== */

const topBtn=document.getElementById("backToTop");

if(topBtn){

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/* ===========================
Cursor Glow
=========================== */

const glow=document.querySelector(".cursor-glow");

if(glow){

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

}
  /* ===========================
Smooth Buttons
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ===========================
Hero Floating Animation
=========================== */

const photo = document.querySelector(".photo-wrapper");

if(photo){

    setInterval(()=>{

        photo.animate([

            {
                transform:"translateY(0px)"
            },

            {
                transform:"translateY(-8px)"
            },

            {
                transform:"translateY(0px)"
            }

        ],{

            duration:4000,

            easing:"ease-in-out"

        });

    },4000);

}

/* ===========================
Console Message
=========================== */

console.log("%cDemid Kuzmin Portfolio",
"color:#7c5cff;font-size:22px;font-weight:bold;");

console.log("%cDesigned with ❤️",
"color:#00d4ff;font-size:14px;");

});
