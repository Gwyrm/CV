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
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        
        let current = '';
        
        // Détecter la section actuelle en fonction du scroll
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        // Mettre à jour les liens actifs
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (current && link.getAttribute('href') === '#' + current) {
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

    // Animation de la section expérience au scroll (mobile uniquement)
    function animateExperienceOnScroll() {
        // Vérifier si on est sur mobile
        if (window.innerWidth > 768) return;

        const experienceSection = document.querySelector('#experience');
        const timelineContents = document.querySelectorAll('.experience .timeline-content');
        
        if (!experienceSection || timelineContents.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Déclencher l'animation pour tous les timeline-content
                    timelineContents.forEach(content => {
                        content.classList.add('animate-in');
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(experienceSection);
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
    window.addEventListener('resize', () => {
        // Réinitialiser l'animation d'expérience si nécessaire
        const timelineContents = document.querySelectorAll('.experience .timeline-content');
        if (window.innerWidth <= 768) {
            // Sur mobile : s'assurer que l'animation peut se déclencher
            animateExperienceOnScroll();
        } else {
            // Sur desktop : enlever la classe animate-in et remettre l'état normal
            timelineContents.forEach(content => {
                content.classList.remove('animate-in');
                content.style.opacity = '1';
                content.style.transform = 'translateY(0)';
            });
        }
    });
    
    // Initialiser les animations
    animateSkillBars();
    animateExperienceOnScroll();
    
    // Mettre à jour la navigation active au chargement
    updateActiveNav();
    
        // S'assurer que le body est visible
    document.body.style.opacity = '1';


});
