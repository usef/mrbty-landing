// Language Switcher
const langBtns = document.querySelectorAll('.lang-btn');
const body = document.body;
const htmlEl = document.documentElement;

langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;

        langBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (lang === 'en') {
            body.classList.add('en');
            htmlEl.lang = 'en';
            htmlEl.dir = 'ltr';
            document.querySelectorAll('.signup-input').forEach(input => {
                input.placeholder = 'Your email address';
            });
        } else {
            body.classList.remove('en');
            htmlEl.lang = 'ar';
            htmlEl.dir = 'rtl';
            document.querySelectorAll('.signup-input').forEach(input => {
                input.placeholder = 'البريد الإلكتروني';
            });
        }
    });
});

// Countdown Timer - Fixed launch date: March 6, 2026 (3 months from Dec 6, 2025)
const launchDate = new Date('2026-03-06T00:00:00');

function updateCountdown() {
    const now = new Date();
    const diff = launchDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 60000);

// Form Submission (stores in localStorage for demo, replace with actual backend)
function handleFormSubmit(formId, successId) {
    const form = document.getElementById(formId);
    const success = document.getElementById(successId);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;

        // Store email (replace with actual API call)
        let emails = JSON.parse(localStorage.getItem('mrbty_emails') || '[]');
        if (!emails.includes(email)) {
            emails.push(email);
            localStorage.setItem('mrbty_emails', JSON.stringify(emails));
        }

        // Show success message
        form.style.display = 'none';
        success.classList.add('show');

        // Reset after 5 seconds
        setTimeout(() => {
            form.style.display = 'flex';
            success.classList.remove('show');
            form.reset();
        }, 5000);
    });
}

handleFormSubmit('hero-form', 'hero-success');
handleFormSubmit('cta-form', 'cta-success');

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .benefit-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});
