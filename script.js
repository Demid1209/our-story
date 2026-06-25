// =======================
// CURSOR FOLLOW
// =======================
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";
});

// =======================
// SCROLL PROGRESS
// =======================
window.addEventListener("scroll", () => {
const scrollTop = window.scrollY;
const height = document.body.scrollHeight - window.innerHeight;
const progress = (scrollTop / height) * 100;
document.querySelector(".progress").style.width = progress + "%";
});

// =======================
// REVEAL SYSTEM (SMOOTH)
// =======================
const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add("active");
}
});
},{
threshold:0.12,
rootMargin:"0px 0px -10% 0px"
});

elements.forEach(el => observer.observe(el));


// =======================
// MAGNETIC BUTTON EFFECT
// =======================
document.querySelectorAll(".magnetic").forEach(btn => {
btn.addEventListener("mousemove", (e) => {
const rect = btn.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

btn.style.transform = `translate(${(x - rect.width/2)/8}px, ${(y - rect.height/2)/8}px)`;
});

btn.addEventListener("mouseleave", () => {
btn.style.transform = "translate(0,0)";
});
});
