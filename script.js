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
    menuToggle.addEventListener('click', () => {
      headerNav.classList.toggle('open');
      menuToggle.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        headerNav.classList.remove('open');
        menuToggle.classList.remove('active');
      });
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
