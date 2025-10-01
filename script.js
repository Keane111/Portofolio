document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeAnimations();
    initializeProjectInteractions();
    initializeShapeAnimations();
});

function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; 
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    function updateActiveNavLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${current}` || (href === '#about' && current === 'about' && link.textContent === 'Home')) {
                link.classList.add('active');
            }
        });
    }

   
    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink();
}

function initializeAnimations() {
    const animatedElements = document.querySelectorAll('.project-card, .about-card, .skill-card');
    
    animatedElements.forEach(element => {
        element.classList.add('fade-in');
    });

    function checkAnimations() {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkAnimations);
    checkAnimations(); 
}

function initializeProjectInteractions() {
    const projectCards = document.querySelectorAll('.project-card');
    const projectButtons = document.querySelectorAll('.project-link-btn');

    projectCards.forEach(card => {
        const projectInfo = card.querySelector('.project-info');
        const projectImage = card.querySelector('.project-image');

        card.addEventListener('mouseenter', function() {
            if (projectInfo) {
                projectInfo.style.transform = 'translateY(-5px) scale(1.02)';
                projectInfo.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
            }
            if (projectImage) {
                projectImage.style.transform = 'scale(1.05)';
            }
        });

        card.addEventListener('mouseleave', function() {
            if (projectInfo) {
                projectInfo.style.transform = 'translateY(0) scale(1)';
                projectInfo.style.boxShadow = 'none';
            }
            if (projectImage) {
                projectImage.style.transform = 'scale(1)';
            }
        });
    });

    projectButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            console.log('Project link clicked:', this.closest('.project-card').querySelector('.project-title').textContent);
        });
    });
}

function initializeShapeAnimations() {
    const shapes = document.querySelectorAll('.shape');
    
    function animateShapes() {
        shapes.forEach((shape, index) => {
            const speed = 0.2 + (index * 0.05);
            const currentTransform = shape.style.transform || '';
            const rotation = (Date.now() * speed * 0.001) % 360;
            
            const rotationMatch = currentTransform.match(/rotate$$([^)]+)$$/);
            const baseRotation = rotationMatch ? parseFloat(rotationMatch[1]) : 0;
            
            const newTransform = currentTransform.replace(/rotate$$[^)]+$$/, '') + ` rotate(${baseRotation + rotation}deg)`;
            shape.style.transform = newTransform;
        });
    }

    setInterval(animateShapes, 50);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .project-link-btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .project-image,
    .project-info {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
`;
document.head.appendChild(rippleStyle);

window.addEventListener('resize', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    setTimeout(() => {
        const event = new Event('scroll');
        window.dispatchEvent(event);
    }, 100);
});


function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}


const throttledScroll = throttle(() => {
    
}, 16); 

window.addEventListener('scroll', throttledScroll);