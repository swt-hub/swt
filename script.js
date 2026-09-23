const progress = document.getElementById('progress');

function updateProgress() {
    const d = document.documentElement,
        m = d.scrollHeight - d.clientHeight;
    progress.style.width = m > 0 ? `${(scrollY / m) * 100}%` : '0%';
}

addEventListener('scroll', updateProgress, { passive: true });
updateProgress();


const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
        }
    });
}, {
    threshold: .12,
    rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) {
        e.preventDefault();
        t.scrollIntoView({ behavior: 'smooth' });
    }
}));


/* ===== قائمة الهامبرغر للجوال ===== */

document.addEventListener("DOMContentLoaded", function () {

    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");

    if (navToggle && navLinks) {

        navToggle.addEventListener("click", function () {
            navToggle.classList.toggle("active");
            navLinks.classList.toggle("open");
        });

        /* إغلاق القائمة عند الضغط على أي رابط */
        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navToggle.classList.remove("active");
                navLinks.classList.remove("open");
            });
        });

    }

});


/* ===== تأثير الهيدر عند التمرير ===== */

window.addEventListener("scroll", function () {

    const nav = document.querySelector(".nav");

    if (window.scrollY > 30) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }

}, { passive: true });
