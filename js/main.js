/**
 * CortelSP 3.0 - JavaScript Profissional
 * Dark Mode | Microinterações | Acessibilidade Avançada
 */

// ========================================
// THEME MANAGEMENT (Dark Mode)
// ========================================

class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme(this.theme);
        this.createToggleButton();
        this.setupKeyboardShortcut();
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.theme = theme;
        localStorage.setItem('theme', theme);
        
        // Atualiza ícone do botão se existir
        const icon = document.querySelector('.theme-toggle svg');
        if (icon) {
            icon.innerHTML = theme === 'dark' 
                ? '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>' 
                : '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
        }
        
        // Anuncia mudança para leitores de tela
        this.announceThemeChange(theme);
    }

    toggle() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
        
        // Adiciona animação de transição suave
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    createToggleButton() {
        const nav = document.querySelector('nav ul');
        if (!nav) return;

        const li = document.createElement('li');
        const button = document.createElement('button');
        button.className = 'theme-toggle';
        button.setAttribute('aria-label', 'Alternar tema claro/escuro');
        button.setAttribute('title', 'Alternar tema');
        
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('stroke-width', '2');
        svg.setAttribute('stroke-linecap', 'round');
        svg.setAttribute('stroke-linejoin', 'round');
        
        svg.innerHTML = this.theme === 'dark'
            ? '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'
            : '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
        
        button.appendChild(svg);
        li.appendChild(button);
        nav.appendChild(li);

        button.addEventListener('click', () => this.toggle());
    }

    setupKeyboardShortcut() {
        // Ctrl/Cmd + Shift + D para alternar tema
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'D') {
                e.preventDefault();
                this.toggle();
            }
        });
    }

    announceThemeChange(theme) {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.textContent = `Tema alterado para ${theme === 'dark' ? 'escuro' : 'claro'}`;
        document.body.appendChild(announcement);
        
        setTimeout(() => announcement.remove(), 1000);
    }
}

// ========================================
// MOBILE NAVIGATION
// ========================================

class MobileNav {
    constructor() {
        this.menuToggle = document.getElementById('menuToggle');
        this.mainNav = document.getElementById('mainNav');
        this.isOpen = false;
        this.init();
    }

    init() {
        if (!this.menuToggle || !this.mainNav) return;

        this.menuToggle.addEventListener('click', () => this.toggle());
        
        // Fecha menu ao clicar em link
        const navLinks = this.mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    this.close();
                }
            });
        });

        // Fecha menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (this.isOpen && 
                !this.mainNav.contains(e.target) && 
                !this.menuToggle.contains(e.target)) {
                this.close();
            }
        });

        // Fecha menu com tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
                this.menuToggle.focus();
            }
        });

        // Trap focus dentro do menu quando aberto
        this.setupFocusTrap();
    }

    toggle() {
        this.isOpen ? this.close() : this.open();
    }

    open() {
        this.mainNav.classList.add('active');
        this.menuToggle.textContent = '✕';
        this.menuToggle.setAttribute('aria-label', 'Fechar menu');
        this.menuToggle.setAttribute('aria-expanded', 'true');
        this.isOpen = true;
        
        // Previne scroll do body
        document.body.style.overflow = 'hidden';
        
        // Foca no primeiro link
        const firstLink = this.mainNav.querySelector('a');
        if (firstLink) {
            setTimeout(() => firstLink.focus(), 100);
        }
    }

    close() {
        this.mainNav.classList.remove('active');
        this.menuToggle.textContent = '☰';
        this.menuToggle.setAttribute('aria-label', 'Abrir menu');
        this.menuToggle.setAttribute('aria-expanded', 'false');
        this.isOpen = false;
        
        // Restaura scroll do body
        document.body.style.overflow = '';
    }

    setupFocusTrap() {
        this.mainNav.addEventListener('keydown', (e) => {
            if (!this.isOpen || e.key !== 'Tab') return;

            const focusableElements = this.mainNav.querySelectorAll(
                'a, button, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        });
    }
}

// ========================================
// FORM VALIDATION
// ========================================

class FormValidator {
    constructor(formSelector) {
        this.form = document.querySelector(formSelector);
        if (this.form) this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Validação em tempo real
        const inputs = this.form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearError(input));
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const isValid = this.validateForm();
        
        if (isValid) {
            this.showSuccess();
            this.form.reset();
        }
    }

    validateForm() {
        let isValid = true;
        const inputs = this.form.querySelectorAll('input[required], textarea[required], select[required]');
        
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });
        
        return isValid;
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Campo obrigatório
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'Este campo é obrigatório';
        }
        
        // Validação de email
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Por favor, insira um email válido';
            }
        }
        
        // Validação de telefone
        if (field.type === 'tel' && value) {
            const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = 'Formato: (11) 99999-9999';
            }
        }

        if (!isValid) {
            this.showError(field, errorMessage);
        } else {
            this.clearError(field);
        }

        return isValid;
    }

    showError(field, message) {
        this.clearError(field);
        
        field.setAttribute('aria-invalid', 'true');
        field.style.borderColor = 'var(--color-error)';
        
        const error = document.createElement('div');
        error.className = 'field-error';
        error.style.color = 'var(--color-error)';
        error.style.fontSize = 'var(--font-size-sm)';
        error.style.marginTop = 'var(--spacing-xs)';
        error.textContent = message;
        error.setAttribute('role', 'alert');
        
        field.parentElement.appendChild(error);
    }

    clearError(field) {
        field.removeAttribute('aria-invalid');
        field.style.borderColor = '';
        
        const error = field.parentElement.querySelector('.field-error');
        if (error) error.remove();
    }

    showSuccess() {
        const message = document.createElement('div');
        message.className = 'form-success';
        message.setAttribute('role', 'status');
        message.setAttribute('aria-live', 'polite');
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--color-success);
            color: white;
            padding: var(--spacing-lg);
            border-radius: var(--border-radius-lg);
            box-shadow: var(--shadow-xl);
            z-index: 9999;
            animation: slideInRight 0.3s ease-out;
        `;
        message.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => message.remove(), 300);
        }, 5000);
    }
}

// ========================================
// PHONE MASK
// ========================================

class PhoneMask {
    constructor(selector) {
        this.input = document.querySelector(selector);
        if (this.input) this.init();
    }

    init() {
        this.input.addEventListener('input', (e) => this.format(e));
        this.input.addEventListener('keydown', (e) => this.handleBackspace(e));
    }

    format(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length <= 10) {
            value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else {
            value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
        }
        
        e.target.value = value;
    }

    handleBackspace(e) {
        if (e.key === 'Backspace') {
            const value = e.target.value;
            if (value.endsWith('-') || value.endsWith(' ') || value.endsWith(')')) {
                e.preventDefault();
                e.target.value = value.slice(0, -1);
            }
        }
    }
}

// ========================================
// SMOOTH SCROLL
// ========================================

class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Foca no elemento para acessibilidade
                    target.setAttribute('tabindex', '-1');
                    target.focus();
                }
            });
        });
    }
}

// ========================================
// INTERSECTION OBSERVER (Animações ao scroll)
// ========================================

class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Anima cards ao entrar na viewport
        document.querySelectorAll('.servico-card, .galeria-item, .local-card').forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
            observer.observe(el);
        });
    }
}

// ========================================
// ACCESSIBILITY ENHANCEMENTS
// ========================================

class AccessibilityEnhancer {
    constructor() {
        this.init();
    }

    init() {
        this.addSkipLink();
        this.enhanceButtons();
        this.addKeyboardNavigation();
        this.announcePageLoad();
    }

    addSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-to-main';
        skipLink.textContent = 'Pular para o conteúdo principal';
        document.body.insertBefore(skipLink, document.body.firstChild);
    }

    enhanceButtons() {
        document.querySelectorAll('.btn').forEach(btn => {
            if (!btn.hasAttribute('aria-label') && !btn.textContent.trim()) {
                console.warn('Botão sem label acessível:', btn);
            }
        });
    }

    addKeyboardNavigation() {
        // Adiciona navegação por teclado para cards clicáveis
        document.querySelectorAll('.servico-card, .galeria-item').forEach(card => {
            const link = card.querySelector('a, button');
            if (link) {
                card.setAttribute('tabindex', '0');
                card.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        link.click();
                    }
                });
            }
        });
    }

    announcePageLoad() {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.textContent = 'Página carregada';
        document.body.appendChild(announcement);
        
        setTimeout(() => announcement.remove(), 1000);
    }
}

// ========================================
// PERFORMANCE MONITORING
// ========================================

class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        if ('PerformanceObserver' in window) {
            // Monitora Largest Contentful Paint
            const lcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
            });
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        }
    }
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa todos os módulos
    new ThemeManager();
    new MobileNav();
    new FormValidator('form');
    new PhoneMask('#telefone');
    new SmoothScroll();
    new ScrollAnimations();
    new AccessibilityEnhancer();
    
    // Performance monitoring apenas em desenvolvimento
    if (window.location.hostname === 'localhost') {
        new PerformanceMonitor();
    }
    
    console.log('🚀 CortelSP 3.0 inicializado com sucesso!');
});

// ========================================
// SERVICE WORKER (PWA Ready)
// ========================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Descomente para ativar PWA
        // navigator.serviceWorker.register('/sw.js');
    });
}

// ========================================
// ANIMATIONS CSS
// ========================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// Made with Bob
