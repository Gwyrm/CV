// Version simplifiée du JavaScript - Sans conflits CSS

// Navigation mobile toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Menu mobile
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fermer le menu mobile quand on clique sur un lien
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Smooth scrolling pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navigation active simple
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        // Si on est en haut de page, sélectionner "home" par défaut
        if (window.scrollY < 100) {
            current = 'home';
        } else {
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    // Animation simple des barres de compétences
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.transition = 'width 2s ease-in-out';
                        bar.style.width = width;
                    }, 100);
                    observer.unobserve(bar);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => observer.observe(bar));
    }

    // Initialisation AOS si disponible
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 600,
            once: true,
            offset: 50
        });
    }

    // Event listeners
    window.addEventListener('scroll', updateActiveNav);
    
    // Initialiser les animations
    animateSkillBars();
    
    // Mettre à jour la navigation active au chargement
    updateActiveNav();
    
        // S'assurer que le body est visible
    document.body.style.opacity = '1';

    // Gestion du dropdown de langue
    window.toggleLanguageDropdown = function() {
        const dropdown = document.querySelector('.lang-dropdown');
        const dropdownContent = document.getElementById('langDropdown');
        
        dropdown.classList.toggle('active');
        dropdownContent.classList.toggle('active');
    };

    // Fermer le dropdown si on clique ailleurs
    document.addEventListener('click', function(event) {
        const dropdown = document.querySelector('.lang-dropdown');
        const dropdownContent = document.getElementById('langDropdown');
        
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('active');
            dropdownContent.classList.remove('active');
        }
    });
});
