/**
 * よしむら Official Talent Page Script
 * Official VTuber Talent Specification
 */

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('siteHeader');
  const navLinks = document.querySelectorAll('.nav-link');
  const menuToggle = document.getElementById('menuToggle');
  const headerNav = document.getElementById('headerNav');

  /* 1. Header Scroll Shadow */
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  /* 2. Mobile Menu Toggle */
  if (menuToggle && headerNav) {
    const toggleMenu = (open) => {
      const isOpen = typeof open === 'boolean' ? open : !headerNav.classList.contains('open');
      headerNav.classList.toggle('open', isOpen);
      menuToggle.classList.toggle('active', isOpen);
      document.body.classList.toggle('menu-open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    };

    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggleMenu(false);
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (headerNav.classList.contains('open') && !headerNav.contains(e.target) && !menuToggle.contains(e.target)) {
        toggleMenu(false);
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && headerNav.classList.contains('open')) {
        toggleMenu(false);
      }
    });
  }

  /* 3. Smooth Active Link Spy */
  const sections = document.querySelectorAll('section[id], footer[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-30% 0px -60% 0px'
  });

  /* 4. Interactive Video Facade Playback */
  const videoBoxes = document.querySelectorAll('.video-facade');
  videoBoxes.forEach(box => {
    const playVideo = () => {
      const videoId = box.dataset.videoId;
      const listId = box.dataset.listId;
      const title = box.dataset.title || '';
      if (!videoId) return;

      let src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;
      if (listId) {
        src += `&list=${listId}`;
      }

      const iframe = document.createElement('iframe');
      iframe.src = src;
      iframe.title = title;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      iframe.loading = 'eager';

      box.innerHTML = '';
      box.appendChild(iframe);
      box.style.cursor = 'default';
    };

    box.addEventListener('click', playVideo);
    box.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        playVideo();
      }
    });
  });

  sections.forEach(section => observer.observe(section));
});
