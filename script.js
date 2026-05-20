// NAV SCROLL EFFECT
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// HAMBURGER MENU
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  const cta = document.querySelector('.nav-cta');
  if (links) {
    const open = links.style.display === 'flex';
    links.style.cssText = open ? '' : 'display:flex;flex-direction:column;position:fixed;top:70px;left:0;right:0;background:rgba(13,13,13,0.98);padding:2rem;gap:1.5rem;z-index:999;border-bottom:1px solid rgba(245,166,35,0.2)';
    if (cta) cta.style.display = open ? '' : 'none';
  }
}

// INTERSECTION OBSERVER — SCROLL ANIMATIONS
const animEls = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('visible');
      observer.unobserve(el.target);
    }
  });
}, { threshold: 0.12 });
animEls.forEach(el => observer.observe(el));

// COUNTER ANIMATION
function animateCounter(el, target, suffix = '') {
  let current = 0;
  const step = Math.ceil(target / 60);
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = current.toLocaleString() + suffix;
  }, 30);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      const suffix = el.classList.contains('hero-stat-num') ? (target === 98 ? '%' : '+') : '+';
      animateCounter(el, target, suffix);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

// FORM SUBMISSION WITH ROBUST SMTPJS & MAILTO FALLBACK
function submitForm() {
  const fname = document.getElementById('fname').value.trim();
  const lname = document.getElementById('lname').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();

  if (!fname || !lname || !email || !service || !message) {
    showToast('⚠️ Please fill in all required fields.', 'warn');
    return;
  }

  const btn = document.querySelector('.btn-submit');
  btn.textContent = '⏳ Sending...';
  btn.disabled = true;

  // Prepare standard mailto details for fallback
  const mailtoSubject = encodeURIComponent(`Quote Request from ${fname} ${lname}`);
  const mailtoBody = encodeURIComponent(`New Quote Request\n\nName: ${fname} ${lname}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`);
  const mailtoUrl = `mailto:emmanukiptoo98@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

  const triggerMailtoFallback = (reason) => {
    console.warn(`SMTPJS failed/timed out: ${reason}. Falling back to mailto.`);
    showToast('✉️ Opening your email client to send request...', 'warn');
    
    // Open user's native email client with prefilled details
    window.location.href = mailtoUrl;

    // Reset button after fallback
    setTimeout(() => {
      btn.textContent = '🚀 Send My Request';
      btn.disabled = false;
    }, 3000);
  };

  // 1. Instant check if SMTPJS library is blocked or not loaded
  if (typeof Email === 'undefined') {
    triggerMailtoFallback('SMTPJS library not loaded (possibly blocked by an adblocker or privacy extension)');
    return;
  }

  const emailBody = `
    <h3>New Quote Request</h3>
    <p><strong>Name:</strong> ${fname} ${lname}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
  `;

  let completed = false;

  // 2. Set a 7-second timeout for the SMTPJS connection
  const timeoutId = setTimeout(() => {
    if (!completed) {
      completed = true;
      triggerMailtoFallback('SMTPJS connection timed out (server took too long to respond)');
    }
  }, 7000);

  try {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "sheilachumba7@gmail.com",
      Password: "kslxootsfevkzwxh",
      To: "emmanukiptoo98@gmail.com",
      From: "sheilachumba7@gmail.com",
      Subject: `Quote Request from ${fname} ${lname}`,
      Body: emailBody
    }).then(response => {
      if (completed) return; // already timed out
      completed = true;
      clearTimeout(timeoutId);

      if (response === 'OK') {
        showToast('🎉 Thank you! Your request has been sent.', 'success');
        btn.textContent = '✅ Sent';
        setTimeout(() => {
          btn.textContent = '🚀 Send My Request';
          btn.disabled = false;
          document.querySelectorAll('#fname,#lname,#email,#phone,#service,#message').forEach(f => f.value = '');
        }, 5000);
      } else {
        console.error('Email response error:', response);
        showToast('❌ Server error. Redirecting to mail client...', 'warn');
        setTimeout(() => triggerMailtoFallback(`SMTPJS returned error: ${response}`), 1500);
      }
    }).catch(err => {
      if (completed) return;
      completed = true;
      clearTimeout(timeoutId);
      console.error('Email send error:', err);
      triggerMailtoFallback(`Catch handler caught error: ${err.message || err}`);
    });
  } catch (error) {
    if (!completed) {
      completed = true;
      clearTimeout(timeoutId);
      console.error('SMTPJS direct execution failed:', error);
      triggerMailtoFallback(`Execution failed: ${error.message || error}`);
    }
  }
}

// Duplicate form handling removed

// TOAST NOTIFICATION
function showToast(msg, type = 'success') {
  const existing = document.querySelector('.chb-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'chb-toast';
  toast.textContent = msg;
  toast.style.cssText = `
    position:fixed; bottom:2rem; right:2rem; z-index:9999;
    background:${type === 'success' ? '#22c55e' : '#f59e0b'};
    color:#000; font-family:'Outfit',sans-serif; font-weight:600;
    padding:1rem 1.5rem; border-radius:10px;
    box-shadow:0 10px 40px rgba(0,0,0,0.4);
    transform:translateY(20px); opacity:0;
    transition:all 0.4s ease; font-size:0.95rem;
  `;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '1'; toast.style.transform = 'translateY(0)'; }, 50);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateY(20px)'; setTimeout(() => toast.remove(), 400); }, 4000);
}

// SMOOTH SCROLL FOR ANCHOR LINKS
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      // Close mobile menu if open
      const links = document.querySelector('.nav-links');
      if (links && links.style.display === 'flex') toggleMenu();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// HERO PARALLAX
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero-bg');
  if (hero) hero.style.transform = `translateY(${window.scrollY * 0.3}px)`;
});
