// Year
document.getElementById('yr').textContent = new Date().getFullYear();

// Mobile nav toggle
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');
toggle?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Lightbox for review/testimonial images
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const openLightbox = (src) => { lightboxImg.src = src; lightbox.hidden = false; document.body.style.overflow = 'hidden'; };
const closeLightbox = () => { lightbox.hidden = true; lightboxImg.src = ''; document.body.style.overflow = ''; };
document.querySelectorAll('.review-img img, .t-card img').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src));
});
lightbox?.addEventListener('click', (e) => { if (e.target === lightbox || e.target.classList.contains('lightbox-close')) closeLightbox(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

// Form submissions via Formspree
document.querySelectorAll('form[action*="formspree"]').forEach(form => {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const original = btn.innerHTML;
        btn.disabled = true; btn.innerHTML = 'Sending…';
        try {
            const res = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });
            if (res.ok) {
                btn.innerHTML = '✓ Sent — we\'ll be in touch';
                form.reset();
                setTimeout(() => { btn.innerHTML = original; btn.disabled = false; }, 3500);
            } else {
                throw new Error('send failed');
            }
        } catch (err) {
            btn.innerHTML = 'Try again';
            btn.disabled = false;
            alert('Sorry, something went wrong. Please call 07957 197984 or message on WhatsApp.');
            setTimeout(() => { btn.innerHTML = original; }, 2500);
        }
    });
});

// Scroll-in animations
const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
        if (en.isIntersecting) {
            en.target.style.opacity = '1';
            en.target.style.transform = 'translateY(0)';
            io.unobserve(en.target);
        }
    });
}, { threshold: 0.12 });
document.querySelectorAll('.srv, .price-card, .review-img, .t-card, .trust-item, .about-stats > div').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    io.observe(el);
});
