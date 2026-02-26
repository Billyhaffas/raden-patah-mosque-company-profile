 const hero = document.getElementById('hero');
      const title = document.getElementById('heroTitle');
      const desc = document.getElementById('heroDesc');
      const cards = Array.from(document.querySelectorAll('.room-card'));

      function setActive(card) {
        // reset
        cards.forEach(c => {
          c.classList.remove('ring-2', 'ring-amber-400', 'border-amber-400/60', 'bg-white/10');
          c.setAttribute('aria-pressed', 'false');
        });
        // aktifkan
        card.classList.add('ring-2', 'ring-amber-400', 'border-amber-400/60', 'bg-white/10');
        card.setAttribute('aria-pressed', 'true');

        // update hero
        hero.style.filter = 'brightness(0.92)';
        hero.style.backgroundImage = `url('${card.dataset.bg}')`;
        title.textContent = card.dataset.title;
        desc.textContent = card.dataset.desc;
        setTimeout(() => hero.style.filter = 'brightness(1)', 180);
      }

      cards.forEach(card => {
        card.addEventListener('click', () => setActive(card));
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(card); }
        });
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
      });

      // --- Carousel 1 baris: tombol prev/next menggeser viewport secara halus ---
      const viewport = document.getElementById('viewport');
      const track = document.getElementById('track');
      const prevBtn = document.getElementById('prev');
      const nextBtn = document.getElementById('next');

      function scrollByCard(dir = 1) {
        const card = track.querySelector('.room-card');
        if (!card) return;
        const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 16;
        const step = card.getBoundingClientRect().width + gap; // lebar satu kartu + gap
        viewport.scrollBy({ left: dir * step, behavior: 'smooth' });
      }

      prevBtn.addEventListener('click', () => scrollByCard(-1));
      nextBtn.addEventListener('click', () => scrollByCard(1));

      // swipe (mobile)
      let startX = 0;
      viewport.addEventListener('pointerdown', (e) => { startX = e.clientX; });
      viewport.addEventListener('pointerup', (e) => {
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 40) scrollByCard(dx > 0 ? -1 : 1);
      });

      // init: tandai kartu pertama aktif
      window.addEventListener('load', () => {
        const current = cards.find(c => c.getAttribute('aria-pressed') === 'true') || cards[0];
        if (current) setActive(current);
      });