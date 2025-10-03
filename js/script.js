document.addEventListener('DOMContentLoaded', () => {
        AOS.init({
          duration: 1000,
          once: true,
          offset: 100,
        });

        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
              target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }
          });
        });

        window.addEventListener('scroll', () => {
          const navbar = document.querySelector('.navbar');
          if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
          } else {
            navbar.classList.remove('scrolled');
          }
        });
      });