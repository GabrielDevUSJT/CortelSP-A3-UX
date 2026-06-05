/**
 * CortelSP 2.0 - JavaScript Simplificado
 * Funcionalidades essenciais: menu mobile e validação de formulário
 */

// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Menu Mobile Toggle
    // ========================================
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            // Atualiza o ícone do botão
            if (mainNav.classList.contains('active')) {
                menuToggle.textContent = '✕';
                menuToggle.setAttribute('aria-label', 'Fechar menu');
            } else {
                menuToggle.textContent = '☰';
                menuToggle.setAttribute('aria-label', 'Abrir menu');
            }
        });
        
        // Fecha o menu ao clicar em um link (mobile)
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    mainNav.classList.remove('active');
                    menuToggle.textContent = '☰';
                }
            });
        });
    }
    
    // ========================================
    // Validação do Formulário de Contato
    // ========================================
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();
            
            // Verifica campos obrigatórios
            if (!nome || !email || !telefone || !mensagem) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            // Validação de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, insira um email válido.');
                return;
            }
            
            // Sucesso
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            contactForm.reset();
        });
    }
    
    // ========================================
    // Máscara de Telefone
    // ========================================
    const telefoneInput = document.getElementById('telefone');
    
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            // Aplica máscara (11) 9999-9999 ou (11) 99999-9999
            if (value.length <= 10) {
                value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
            } else {
                value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
            }
            
            e.target.value = value;
        });
    }
});

// Made with Bob
