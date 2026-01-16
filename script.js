// MENU MOBILE
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Altera o ícone do menu
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        // Restaura o ícone do menu
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// SCROLL SUAVE APRIMORADO
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            // Calcula a posição considerando o header fixo
            const headerHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            // Adiciona um pequeno offset para melhor visualização
            const offset = 20;
            
            window.scrollTo({
                top: targetPosition - offset,
                behavior: 'smooth'
            });
            
            // Atualiza a URL sem recarregar a página
            history.pushState(null, null, targetId);
        }
    });
});

// Adiciona classe ao header durante o scroll para melhorar visibilidade
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Fecha o menu mobile ao rolar
window.addEventListener('scroll', function() {
    if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        // Restaura o ícone do menu
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Fecha o menu ao clicar fora
document.addEventListener('click', function(event) {
    const isClickInsideMenu = navLinks.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnToggle && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        // Restaura o ícone do menu
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Adiciona feedback tátil para botões no mobile
if ('ontouchstart' in window) {
    document.querySelectorAll('.btn, .service-card, .event-card').forEach(element => {
        element.style.cursor = 'pointer';
        element.addEventListener('touchstart', function() {
            this.style.opacity = '0.9';
            this.style.transform = 'scale(0.98)';
        });
        element.addEventListener('touchend', function() {
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        });
    });
}

// FORMULÁRIO DE CONTATO (exemplo básico)
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
        console.log(`Faltam ${days} dias para o próximo evento!`);
    }
}

// GALERIA SIMPLES (se adicionar)
function initGallery() {
    // Implementação básica de galeria
    console.log('Galeria inicializada (se houver)');
}

// INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', function() {
    console.log('Site da IBN Vale do Anari carregado!');
    updateEventCountdown();
    initGallery();
    
    // Adiciona classe de carregamento completo
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Previne comportamentos indesejados em links vazios
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
    });
});