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
document.querySelectorAll('.slide img').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src));
});

// Availability calendar
(function initAvailability() {
    const grid = document.querySelector('[data-avail-grid]');
    const tabsWrap = document.querySelector('[data-avail-tabs]');
    if (!grid || !tabsWrap) return;

    const SLOTS = ['Morning · 8–12', 'Afternoon · 12–4', 'Evening · 4–8'];
    const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Deterministic-but-varying availability per area + date
    const hashCode = (s) => {
        let h = 0;
        for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
        return Math.abs(h);
    };
    const statusFor = (area, dateStr, slotIdx) => {
        const v = hashCode(area + dateStr + slotIdx) % 10;
        if (v < 5) return 'open';
        if (v < 8) return 'few';
        return 'full';
    };
    const labelFor = (status) => status === 'open' ? 'Available' : status === 'few' ? 'Limited' : 'Booked';

    const monthShort = (d) => d.toLocaleDateString('en-GB', { month: 'short' });

    const render = (area) => {
        grid.innerHTML = '';
        const today = new Date();
        for (let i = 0; i < 7; i++) {
            const d = new Date(today);
            d.setDate(today.getDate() + i);
            const dayName = DAY_NAMES[d.getDay()];
            const dateStr = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
            const dayCol = document.createElement('div');
            dayCol.className = 'avail-day';
            dayCol.innerHTML = `<div class="avail-day-head">
                <div class="avail-day-name">${dayName}${i === 0 ? ' · Today' : ''}</div>
                <div class="avail-day-date">${d.getDate()} <small style="font-size:.65rem;color:var(--muted);font-weight:600;">${monthShort(d)}</small></div>
            </div>`;
            SLOTS.forEach((slot, idx) => {
                const status = statusFor(area, dateStr, idx);
                const btn = document.createElement('button');
                btn.className = `avail-slot ${status}`;
                btn.disabled = status === 'full';
                btn.innerHTML = `<span>${slot.split(' · ')[1]}</span><span class="dot dot-${status === 'open' ? 'open' : status === 'few' ? 'few' : 'full'}"></span>`;
                btn.title = `${slot.split(' · ')[0]} · ${labelFor(status)}`;
                if (status !== 'full') {
                    btn.addEventListener('click', () => {
                        const contactSection = document.getElementById('contact');
                        const form = document.querySelector('.contact-form');
                        if (form) {
                            const msgField = form.querySelector('textarea[name=message]');
                            const svcField = form.querySelector('select[name=service]');
                            const slotLabel = `${dayName} ${d.getDate()} ${monthShort(d)} · ${slot}`;
                            if (msgField) msgField.value = `Hi, I'd like to book a lesson in ${area} — preferred slot: ${slotLabel}.`;
                            if (svcField && !svcField.value) svcField.value = 'Adult Lessons';
                        }
                        contactSection?.scrollIntoView({ behavior: 'smooth' });
                    });
                }
                dayCol.appendChild(btn);
            });
            grid.appendChild(dayCol);
        }
    };

    tabsWrap.addEventListener('click', (e) => {
        const tab = e.target.closest('.avail-tab');
        if (!tab) return;
        tabsWrap.querySelectorAll('.avail-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        render(tab.dataset.area);
    });
    render('Stevenage');
})();

// Sliders
document.querySelectorAll('[data-slider]').forEach(slider => {
    const track = slider.querySelector('[data-track]');
    const prev = slider.querySelector('.prev');
    const next = slider.querySelector('.next');
    const dotsWrap = slider.querySelector('[data-dots]');
    const slides = [...track.children];
    if (!slides.length) return;

    const visibleCount = () => {
        const slideWidth = slides[0].getBoundingClientRect().width;
        return Math.max(1, Math.round(track.clientWidth / (slideWidth + 12)));
    };

    const buildDots = () => {
        dotsWrap.innerHTML = '';
        const pages = Math.max(1, Math.ceil(slides.length / visibleCount()));
        for (let i = 0; i < pages; i++) {
            const b = document.createElement('button');
            b.setAttribute('aria-label', `Page ${i + 1}`);
            b.addEventListener('click', () => {
                track.scrollTo({ left: i * track.clientWidth, behavior: 'smooth' });
            });
            dotsWrap.appendChild(b);
        }
        updateDots();
    };

    const updateDots = () => {
        const buttons = [...dotsWrap.children];
        if (!buttons.length) return;
        const idx = Math.round(track.scrollLeft / track.clientWidth);
        buttons.forEach((b, i) => b.classList.toggle('active', i === idx));
    };

    const step = () => slides[0].getBoundingClientRect().width + 12;

    prev?.addEventListener('click', () => {
        track.scrollBy({ left: -step() * visibleCount(), behavior: 'smooth' });
    });
    next?.addEventListener('click', () => {
        track.scrollBy({ left: step() * visibleCount(), behavior: 'smooth' });
    });
    track.addEventListener('scroll', updateDots, { passive: true });
    window.addEventListener('resize', buildDots);

    buildDots();

    // Autoplay
    const interval = parseInt(slider.dataset.autoplay || '0', 10);
    if (interval > 0) {
        let timer;
        const tick = () => {
            const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
            if (atEnd) track.scrollTo({ left: 0, behavior: 'smooth' });
            else track.scrollBy({ left: step() * visibleCount(), behavior: 'smooth' });
        };
        const start = () => { timer = setInterval(tick, interval); };
        const stop = () => clearInterval(timer);
        start();
        slider.addEventListener('mouseenter', stop);
        slider.addEventListener('mouseleave', start);
        slider.addEventListener('touchstart', stop, { passive: true });
    }
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
