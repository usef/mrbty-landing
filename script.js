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

// Form Submission - Google Sheets Integration
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwYGJI3UT96SWt6Q2AwvocBd9y0soFsf_Zpa37-ZObvxzxU7dJ_EWAe0cmWI9h0wBx3Jg/exec';

function handleFormSubmit(formId, successId) {
    const form = document.getElementById(formId);
    const success = document.getElementById(successId);

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        const submitBtn = form.querySelector('button[type="submit"]');

        // Disable button during submission
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.6';

        try {
            // Send to Google Sheets
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    date: new Date().toISOString(),
                    source: formId
                })
            });

            // Show success message
            form.style.display = 'none';
            success.classList.add('show');

            // Reset after 5 seconds
            setTimeout(() => {
                form.style.display = 'flex';
                success.classList.remove('show');
                form.reset();
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
            }, 5000);

        } catch (error) {
            console.error('Submission error:', error);
            // Still show success to user (no-cors mode doesn't give us response)
            form.style.display = 'none';
            success.classList.add('show');

            setTimeout(() => {
                form.style.display = 'flex';
                success.classList.remove('show');
                form.reset();
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
            }, 5000);
        }
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
