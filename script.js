// =========================
// CURSOR (SMOOTH FOLLOW)
// =========================
const cursor = document.querySelector(".cursor");

if(cursor){
document.addEventListener("mousemove", (e) => {
cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";
});
}

// =========================
// REVEAL ANIMATION ENGINE
// =========================
const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add("active");
}
});
}, {
threshold: 0.12
});

elements.forEach(el => observer.observe(el));

// =========================
// SMOOTH SCROLL FIX
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e){
e.preventDefault();
const target = document.querySelector(this.getAttribute("href"));

if(target){
target.scrollIntoView({
behavior:"smooth",
block:"start"
});
}
});
});

// =========================
// NAV ACTIVE ON SCROLL (premium touch)
// =========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
let current = "";

sections.forEach(section => {
const top = section.offsetTop - 150;
const height = section.clientHeight;

if(pageYOffset >= top){
current = section.getAttribute("id");
}
});

navLinks.forEach(link => {
link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}
});
});
