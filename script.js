/* NOVA FOODS · Demo 2 · Interacciones (JS puro) */
(() => {
  const root = document.documentElement;
  root.classList.add('js');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Navbar sticky: cambia de fondo al bajar ---------- */
  const nav = document.querySelector('[data-nav]');
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Menú mobile ---------- */
  const toggle = nav.querySelector('.nav__toggle');
  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('.nav__menu a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  /* ---------- Link activo según la sección visible ---------- */
  const links = new Map();
  nav.querySelectorAll('.nav__menu a[href^="#"]:not(.btn)').forEach((a) => links.set(a.getAttribute('href').slice(1), a));
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const link = links.get(entry.target.id);
      links.forEach((l) => l.removeAttribute('aria-current'));
      if (link) link.setAttribute('aria-current', 'true');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('main section[id]').forEach((s) => spy.observe(s));

  /* ---------- Títulos en secuencia ----------
     data-split="chars": letra por letra (Home y Quiénes somos).
     data-split: palabra por palabra (resto de los títulos). */
  const splitText = (root) => {
    const byChar = root.dataset.split === 'chars';
    let index = 0;
    const makePiece = (text) => {
      const piece = document.createElement('span');
      piece.className = 'c';
      piece.textContent = text;
      piece.style.setProperty('--i', index++);
      return piece;
    };
    const walk = (node) => {
      [...node.childNodes].forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.append(' '); return; }
            const word = document.createElement('span');
            word.className = 'w';
            word.setAttribute('aria-hidden', 'true');
            if (byChar) [...part].forEach((ch) => word.append(makePiece(ch)));
            else word.append(makePiece(part));
            frag.append(word);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === Node.ELEMENT_NODE && child.tagName !== 'BR') {
          walk(child);
        }
      });
    };
    root.setAttribute('aria-label', root.textContent.replace(/\s+/g, ' ').trim());
    walk(root);
  };
  document.querySelectorAll('[data-split]').forEach(splitText);

  /* ---------- Todo el contenido entra con el scroll ----------
     Títulos, párrafos, tarjetas, imágenes y campos que no tienen una
     animación propia reciben data-reveal, con un pequeño escalonado
     entre hermanos. */
  const AUTO_REVEAL = [
    'main h2', 'main h3', 'main p', 'main li', 'main figure', 'main img',
    'main address', 'main article', 'main .tile', 'main .field', 'main iframe',
  ].join(', ');
  const siblingCount = new Map();
  const autoTagged = [];
  document.querySelectorAll(AUTO_REVEAL).forEach((el) => {
    if (el.closest('[data-reveal], [data-split], .sr-only')) return;
    if (el.querySelector('[data-reveal], [data-split]')) return;
    const n = siblingCount.get(el.parentElement) || 0;
    siblingCount.set(el.parentElement, n + 1);
    el.setAttribute('data-reveal', '');
    el.style.setProperty('--d', Math.min(n, 6));
    el.style.transition = 'none'; // arranca oculto sin animar el "apagado"
    autoTagged.push(el);
  });
  void document.body.offsetHeight;
  autoTagged.forEach((el) => { el.style.transition = ''; });

  /* ---------- Reveal bidireccional ----------
     Al bajar, cada elemento aparece cuando entra en pantalla. Al subir,
     cuando vuelve a quedar por debajo del viewport, pierde la clase y se
     desvanece de nuevo, listo para reaparecer. */
  const revealables = document.querySelectorAll('[data-reveal], [data-split]');
  if (!('IntersectionObserver' in window)) {
    revealables.forEach((el) => el.classList.add('is-in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-in');
        else if (entry.boundingClientRect.top > 0) entry.target.classList.remove('is-in');
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    const startReveal = () => revealables.forEach((el) => io.observe(el));
    /* ---------- Entrada: logo + línea, telón que sube y recién ahí la página ---------- */
    const intro = document.querySelector('.intro');
    if (!intro || !root.classList.contains('is-intro')) {
      intro?.remove();
      startReveal();
    } else {
      const finish = () => {
        root.classList.add('is-intro-out');
        setTimeout(startReveal, 350);
        setTimeout(() => { root.classList.remove('is-intro', 'is-intro-out'); intro.remove(); }, 1200);
      };
      const ready = new Promise((r) => (document.readyState === 'complete' ? r() : window.addEventListener('load', r, { once: true })));
      const minTime = new Promise((r) => setTimeout(r, 2100));
      // El telón espera a que el video del reel pueda reproducirse sin cortes
      const reelVideo = document.querySelector('.reel__video');
      const videoReady = new Promise((r) => {
        if (!reelVideo || reelVideo.readyState >= 4) return r();
        ['canplaythrough', 'error'].forEach((ev) => reelVideo.addEventListener(ev, r, { once: true }));
        reelVideo.load();
      });
      // Tope de seguridad: con conexiones lentas no se queda colgado en el logo
      Promise.race([Promise.all([ready, minTime, videoReady]), new Promise((r) => setTimeout(r, 9000))]).then(finish);
    }
  }

  /* ---------- Carrusel de logos: duplica la pista para un loop continuo ---------- */
  document.querySelectorAll('[data-marquee] .marquee__track').forEach((track) => {
    if (reduceMotion) return;
    [...track.children].forEach((item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.append(clone);
    });
  });

  /* ---------- Formulario (Netlify Forms) ----------
     En Netlify envía por fetch a "/". En local (file:// o localhost) simula
     el envío para poder probar validaciones y estados antes del deploy. */
  const form = document.querySelector('form[name="cotizacion"]');
  if (form) {
    const status = form.querySelector('.form__status');
    const button = form.querySelector('button[type="submit"]');
    const buttonLabel = button.querySelector('span');
    const fields = form.querySelectorAll('input[required], select[required]');
    const isLocal = location.protocol === 'file:' || ['localhost', '127.0.0.1', ''].includes(location.hostname);

    const validate = (field) => {
      const valid = field.checkValidity() && field.value.trim() !== '';
      field.closest('.field').classList.toggle('is-invalid', !valid);
      field.setAttribute('aria-invalid', String(!valid));
      return valid;
    };
    fields.forEach((field) => {
      const error = field.closest('.field').querySelector('.field__error');
      if (error) {
        error.id = `${field.id}-error`;
        field.setAttribute('aria-describedby', error.id);
      }
      field.addEventListener('blur', () => { if (field.value) validate(field); });
      field.addEventListener('input', () => {
        if (field.closest('.field').classList.contains('is-invalid')) validate(field);
      });
    });

    const setStatus = (text, type) => {
      status.textContent = text;
      status.className = `form__status${type ? ` is-${type}` : ''}`;
    };

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const invalid = [...fields].filter((field) => !validate(field));
      if (invalid.length) {
        invalid[0].focus();
        setStatus('Revisá los campos marcados para poder enviar la consulta.', 'error');
        return;
      }

      button.disabled = true;
      buttonLabel.textContent = 'Enviando…';
      setStatus('');

      try {
        const body = new URLSearchParams(new FormData(form)).toString();
        if (isLocal) {
          await new Promise((resolve) => setTimeout(resolve, 900));
          console.info('[Modo prueba] Datos que se enviarían a Netlify:', Object.fromEntries(new FormData(form)));
        } else {
          const response = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body,
          });
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
        }
        form.reset();
        setStatus(isLocal
          ? '¡Listo! Consulta recibida (modo prueba: el envío real se activa al publicar en Netlify).'
          : '¡Gracias! Recibimos tu consulta y te vamos a contactar a la brevedad.', 'ok');
      } catch (error) {
        setStatus('No pudimos enviar la consulta. Revisá tu conexión e intentá de nuevo en unos minutos.', 'error');
      } finally {
        button.disabled = false;
        buttonLabel.textContent = 'Enviar consulta';
      }
    });
  }

  /* ---------- Demo 2: luz que sigue al puntero en las tarjetas de vidrio ---------- */
  if (!reduceMotion && window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('[data-glow]').forEach((card) => {
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
    });

    /* Fondo ambiental: se desplaza levemente con el progreso del scroll */
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        root.style.setProperty('--scroll', (window.scrollY / Math.max(max, 1)).toFixed(3));
        ticking = false;
      });
    }, { passive: true });
  }

  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
  /* ---------- Reel: el video crece, se queda y se achica con el scroll ---------- */
  const reel = document.querySelector('[data-reel]');
  if (reel) {
    const video = reel.querySelector('video');
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const clamp01 = (v) => Math.min(1, Math.max(0, v));
    let ticking = false;
    const update = () => {
      ticking = false;
      const r = reel.getBoundingClientRect();
      const total = Math.max(1, r.height - window.innerHeight);
      const p = clamp01(-r.top / total);
      reel.style.setProperty('--grow', ease(clamp01(p / 0.35)).toFixed(4));
      reel.style.setProperty('--out', ease(clamp01((p - 0.75) / 0.25)).toFixed(4));
    };
    const request = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    if (!reduceMotion) {
      update();
      window.addEventListener('scroll', request, { passive: true });
      window.addEventListener('resize', request);
    }
    // Reproduce solo cuando esta en pantalla (ahorra bateria y datos)
    // Sonido: arranca al 75%. Si el navegador bloquea el audio sin interaccion,
    // reproduce mudo y lo activa en el primer toque/click/tecla del usuario.
    const soundBtn = reel.querySelector('[data-sound]');
    let wantSound = true;
    video.volume = 0.75;
    const syncBtn = () => {
      const on = wantSound && !video.muted;
      soundBtn.setAttribute('aria-pressed', String(on));
      soundBtn.setAttribute('aria-label', on ? 'Desactivar sonido' : 'Activar sonido');
    };
    const playVideo = () => {
      video.muted = !wantSound;
      video.play().catch(() => { video.muted = true; return video.play().catch(() => {}); }).finally(syncBtn);
    };
    const unlockEvents = ['pointerdown', 'keydown', 'touchend'];
    const unlock = () => {
      unlockEvents.forEach((ev) => window.removeEventListener(ev, unlock, true));
      if (wantSound && video.muted) {
        video.muted = false;
        if (!video.paused) video.play().catch(() => { video.muted = true; syncBtn(); });
        syncBtn();
      }
    };
    unlockEvents.forEach((ev) => window.addEventListener(ev, unlock, true));
    soundBtn.addEventListener('click', () => {
      wantSound = !(wantSound && !video.muted);
      video.muted = !wantSound;
      if (wantSound) video.volume = 0.75;
      syncBtn();
    });
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { video.preload = 'auto'; playVideo(); }
      else video.pause();
    }, { threshold: 0.15 }).observe(reel.querySelector('.reel__sticky'));
  }
})();

/* ---------- Galeria de sabores: autoplay + arrastre con mouse/dedo ---------- */
(() => {
  const gallery = document.querySelector('[data-gallery]');
  if (!gallery) return;
  const track = gallery.querySelector('.gallery__track');
  const slides = [...track.querySelectorAll('.slide')];
  const dotsBox = gallery.querySelector('.gallery__dots');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let index = 0, timer = null, paused = false;

  const mark = (i) => {
    index = i;
    slides.forEach((s, k) => s.classList.toggle('is-active', k === i));
    dots.forEach((d, k) => d.setAttribute('aria-current', String(k === i)));
    const flavor = slides[i].dataset.flavor;
    document.querySelectorAll('.flavors li').forEach((li) => li.classList.toggle('is-featured', li.dataset.flavor === flavor));
  };
  const go = (i) => {
    i = (i + slides.length) % slides.length;
    track.scrollTo({ left: i * track.clientWidth, behavior: reduce ? 'auto' : 'smooth' });
    mark(i);
  };
  const restart = () => {
    clearInterval(timer);
    if (!reduce) timer = setInterval(() => { if (!paused && !document.hidden) go(index + 1); }, 3800);
  };

  const dots = slides.map((s, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', s.querySelector('figcaption').textContent);
    b.addEventListener('click', () => { go(i); restart(); });
    dotsBox.appendChild(b);
    return b;
  });

  // El slide visible manda (cubre el swipe nativo con el dedo)
  let st;
  track.addEventListener('scroll', () => {
    if (track.classList.contains('is-dragging')) return;
    clearTimeout(st);
    st = setTimeout(() => {
      const i = Math.round(track.scrollLeft / track.clientWidth);
      if (i !== index && slides[i]) { mark(i); restart(); }
    }, 120);
  }, { passive: true });

  // Arrastre con mouse
  let down = false, startX = 0, startLeft = 0;
  track.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse') return;
    down = true; startX = e.clientX; startLeft = track.scrollLeft;
    track.classList.add('is-dragging'); track.setPointerCapture(e.pointerId);
  });
  track.addEventListener('pointermove', (e) => { if (down) track.scrollLeft = startLeft - (e.clientX - startX); });
  const end = (e) => {
    if (!down) return;
    down = false; track.classList.remove('is-dragging');
    const dx = e.clientX - startX;
    const from = Math.round(startLeft / track.clientWidth);
    go(Math.abs(dx) > track.clientWidth * 0.12 ? from + (dx < 0 ? 1 : -1) : from);
    restart();
  };
  track.addEventListener('pointerup', end);
  track.addEventListener('pointercancel', end);

  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { go(index + 1); restart(); }
    if (e.key === 'ArrowLeft') { go(index - 1); restart(); }
  });
  gallery.addEventListener('mouseenter', () => { paused = true; });
  gallery.addEventListener('mouseleave', () => { paused = false; });
  window.addEventListener('resize', () => { track.scrollLeft = index * track.clientWidth; });

  mark(0);
  restart();
})();
