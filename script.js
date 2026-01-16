// MENU MOBILE
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// FORMULÁRIO DE CONTATO (exemplo básico)
// Adicione isso se for incluir um formulário
const contactForm = document.getElementById('contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mensagem enviada! Entraremos em contato em breve.');
        this.reset();
    });
}

// CONTADOR PARA EVENTOS (exemplo)
function updateEventCountdown() {
    const eventDate = new Date('2024-06-15').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;
    
    if(distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        // Use days para mostrar contagem regressiva
    }
}

// GALERIA SIMPLES (se adicionar)
function initGallery() {
    // Implementação básica de galeria
}

// INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', function() {
    updateEventCountdown();
    initGallery();
});