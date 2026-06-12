# 🎨 CortelSP 3.0 - Design System

## Visão Geral

Sistema de design profissional com suporte a **Dark Mode**, **microinterações CSS**, **acessibilidade avançada** e **navegação mobile refinada**.

---

## 📋 Índice

1. [Cores](#cores)
2. [Tipografia](#tipografia)
3. [Espaçamentos](#espaçamentos)
4. [Componentes](#componentes)
5. [Animações](#animações)
6. [Acessibilidade](#acessibilidade)
7. [Dark Mode](#dark-mode)
8. [Responsividade](#responsividade)

---

## 🎨 Cores

### Light Mode

```css
--color-primary: #1a365d;
--color-primary-light: #2c5282;
--color-primary-dark: #0f2744;
--color-secondary: #2b6cb0;
--color-accent: #3182ce;

--color-background: #ffffff;
--color-surface: #f7fafc;
--color-text-primary: #2d3748;
--color-text-secondary: #4a5568;
```

### Dark Mode

```css
--color-primary: #4299e1;
--color-primary-light: #63b3ed;
--color-background: #1a202c;
--color-surface: #2d3748;
--color-text-primary: #f7fafc;
--color-text-secondary: #e2e8f0;
```

### Cores de Estado

```css
--color-success: #38a169;  /* Verde - Sucesso */
--color-warning: #d69e2e;  /* Amarelo - Aviso */
--color-error: #e53e3e;    /* Vermelho - Erro */
--color-info: #3182ce;     /* Azul - Informação */
```

---

## 📝 Tipografia

### Família de Fontes

```css
--font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-family-heading: 'Segoe UI', system-ui, sans-serif;
```

### Tamanhos

| Variável | Tamanho | Uso |
|----------|---------|-----|
| `--font-size-xs` | 12px | Textos auxiliares |
| `--font-size-sm` | 14px | Textos secundários |
| `--font-size-base` | 16px | Texto padrão |
| `--font-size-lg` | 18px | Textos destacados |
| `--font-size-xl` | 20px | Subtítulos |
| `--font-size-2xl` | 24px | Títulos H3 |
| `--font-size-3xl` | 30px | Títulos H2 |
| `--font-size-4xl` | 36px | Títulos H1 |
| `--font-size-5xl` | 48px | Hero titles |

### Pesos

```css
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
```

---

## 📏 Espaçamentos

Sistema de espaçamento baseado em múltiplos de 4px:

```css
--spacing-xs: 0.25rem;   /* 4px */
--spacing-sm: 0.5rem;    /* 8px */
--spacing-md: 1rem;      /* 16px */
--spacing-lg: 1.5rem;    /* 24px */
--spacing-xl: 2rem;      /* 32px */
--spacing-2xl: 3rem;     /* 48px */
--spacing-3xl: 4rem;     /* 64px */
--spacing-4xl: 6rem;     /* 96px */
```

---

## 🧩 Componentes

### Botões

#### Primário
```html
<a href="#" class="btn btn-primary">Botão Primário</a>
```

**Características:**
- Gradiente azul
- Sombra média
- Hover: eleva 2px
- Microinteração: ripple effect

#### Secundário
```html
<a href="#" class="btn btn-secondary">Botão Secundário</a>
```

**Características:**
- Fundo branco/surface
- Borda azul
- Hover: inverte cores

#### Outline
```html
<a href="#" class="btn btn-outline">Botão Outline</a>
```

### Cards

```html
<div class="servico-card">
    <div class="servico-image">
        <img src="..." alt="..." class="card-image">
    </div>
    <div class="servico-content">
        <h3>Título do Card</h3>
        <p>Descrição do serviço...</p>
        <div class="btn-group">
            <a href="#" class="btn btn-primary">Ação</a>
        </div>
    </div>
</div>
```

**Microinterações:**
- Hover: eleva 8px
- Barra superior animada
- Imagem com zoom suave
- Título muda de cor

### Alertas

```html
<div class="alerta alerta-info">
    <h3>Título do Alerta</h3>
    <p>Conteúdo informativo...</p>
</div>
```

**Tipos:**
- `alerta-info` - Informação (azul)
- `alerta-sucesso` - Sucesso (verde)

---

## ✨ Animações

### Transições

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-bounce: 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Animações Disponíveis

#### fadeInUp
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

#### fadeInDown
```css
@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

#### slideInLeft
```css
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
```

### Scroll Animations

Cards animam automaticamente ao entrar na viewport usando **Intersection Observer**.

---

## ♿ Acessibilidade

### Recursos Implementados

#### 1. Skip Link
```html
<a href="#main-content" class="skip-to-main">
    Pular para o conteúdo principal
</a>
```

#### 2. Focus Visible
Todos os elementos interativos têm outline visível ao navegar por teclado:
```css
:focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
}
```

#### 3. ARIA Labels
```html
<button aria-label="Abrir menu" aria-expanded="false">
    ☰
</button>
```

#### 4. Screen Reader Only
```html
<span class="sr-only">Texto apenas para leitores de tela</span>
```

#### 5. Navegação por Teclado

**Atalhos:**
- `Tab` - Navegar entre elementos
- `Shift + Tab` - Navegar para trás
- `Enter` / `Space` - Ativar elemento
- `Escape` - Fechar menu mobile
- `Ctrl/Cmd + Shift + D` - Alternar tema

#### 6. Tamanhos Mínimos

Todos os elementos interativos têm no mínimo **44x44px** (WCAG 2.1 AAA).

#### 7. Contraste

Todas as combinações de cores atendem **WCAG 2.1 AA** (mínimo 4.5:1).

---

## 🌓 Dark Mode

### Ativação

O dark mode é ativado automaticamente através de:

1. **Botão de Toggle** - Ícone sol/lua no menu
2. **Atalho de Teclado** - `Ctrl/Cmd + Shift + D`
3. **Persistência** - Salvo em `localStorage`

### Implementação

```javascript
// Alternar tema
const themeManager = new ThemeManager();
themeManager.toggle();

// Aplicar tema específico
themeManager.applyTheme('dark');
```

### CSS

```css
[data-theme="dark"] {
    --color-background: #1a202c;
    --color-text-primary: #f7fafc;
    /* ... outras variáveis ... */
}
```

---

## 📱 Responsividade

### Breakpoints

```css
/* Mobile First */
@media (max-width: 768px) {
    /* Estilos mobile */
}

@media (min-width: 769px) and (max-width: 1024px) {
    /* Tablet */
}

@media (min-width: 1025px) {
    /* Desktop */
}
```

### Grid Responsivo

```css
.servicos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-xl);
}
```

### Menu Mobile

**Características:**
- Animação slide down
- Overlay com blur
- Focus trap
- Fecha com Escape
- Previne scroll do body

---

## 🎯 Microinterações

### 1. Botões
- **Hover**: Elevação + sombra
- **Active**: Ripple effect
- **Focus**: Outline azul

### 2. Cards
- **Hover**: Elevação 8px + barra superior
- **Imagem**: Zoom 1.1x
- **Título**: Muda para cor primária

### 3. Links
- **Hover**: Sublinhado animado
- **Focus**: Outline com offset

### 4. Inputs
- **Focus**: Borda azul + sombra suave
- **Hover**: Borda escurece
- **Error**: Borda vermelha + mensagem

### 5. Menu Mobile
- **Open**: Slide down + fade in
- **Close**: Slide up + fade out
- **Links**: Hover com background

### 6. Theme Toggle
- **Hover**: Rotação 15° + scale 1.1
- **Active**: Scale 0.95
- **Transição**: Smooth 300ms

---

## 🚀 Performance

### Otimizações

1. **CSS Variables** - Mudanças de tema instantâneas
2. **Intersection Observer** - Animações apenas quando visível
3. **Debounce** - Eventos de scroll otimizados
4. **Lazy Loading** - Imagens carregadas sob demanda
5. **Critical CSS** - Estilos inline para first paint

### Métricas Alvo

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

---

## 📦 Classes Utilitárias

```css
/* Texto */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

/* Margens */
.mt-sm { margin-top: var(--spacing-sm); }
.mt-md { margin-top: var(--spacing-md); }
.mt-lg { margin-top: var(--spacing-lg); }
.mt-xl { margin-top: var(--spacing-xl); }

.mb-sm { margin-bottom: var(--spacing-sm); }
.mb-md { margin-bottom: var(--spacing-md); }
.mb-lg { margin-bottom: var(--spacing-lg); }
.mb-xl { margin-bottom: var(--spacing-xl); }

/* Padding */
.p-sm { padding: var(--spacing-sm); }
.p-md { padding: var(--spacing-md); }
.p-lg { padding: var(--spacing-lg); }
.p-xl { padding: var(--spacing-xl); }
```

---

## 🧪 Testes

### Checklist de Acessibilidade

- [x] Navegação por teclado completa
- [x] Skip link funcional
- [x] ARIA labels em todos os elementos interativos
- [x] Contraste WCAG AA em todos os textos
- [x] Tamanhos mínimos de toque (44x44px)
- [x] Focus visible em todos os elementos
- [x] Anúncios para leitores de tela
- [x] Formulários com validação acessível

### Checklist de Responsividade

- [x] Mobile (320px - 768px)
- [x] Tablet (769px - 1024px)
- [x] Desktop (1025px+)
- [x] Menu mobile funcional
- [x] Imagens responsivas
- [x] Grid adaptativo

### Checklist de Performance

- [x] CSS minificado
- [x] JavaScript modular
- [x] Lazy loading de imagens
- [x] Intersection Observer para animações
- [x] LocalStorage para preferências

---

## 📚 Recursos Adicionais

### Documentação de Referência

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)

### Ferramentas de Teste

- **Lighthouse** - Auditoria de performance e acessibilidade
- **axe DevTools** - Teste de acessibilidade
- **WAVE** - Avaliação de acessibilidade web
- **Contrast Checker** - Verificação de contraste

---

## 🎓 Guia de Uso

### Adicionando um Novo Componente

1. **Defina as variáveis CSS necessárias**
2. **Crie o HTML semântico**
3. **Adicione estilos com microinterações**
4. **Implemente acessibilidade (ARIA, keyboard)**
5. **Teste em múltiplos dispositivos**
6. **Documente o componente**

### Exemplo: Novo Card

```html
<!-- HTML -->
<div class="custom-card">
    <h3>Título</h3>
    <p>Conteúdo</p>
    <a href="#" class="btn btn-primary">Ação</a>
</div>
```

```css
/* CSS */
.custom-card {
    background: var(--color-surface-elevated);
    border-radius: var(--border-radius-xl);
    padding: var(--spacing-xl);
    box-shadow: var(--shadow-md);
    transition: all var(--transition-base);
}

.custom-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
}
```

---

## 🤝 Contribuindo

Para contribuir com o design system:

1. Siga as convenções de nomenclatura
2. Use variáveis CSS existentes
3. Mantenha acessibilidade em mente
4. Teste em múltiplos navegadores
5. Documente mudanças

---

## 📄 Licença

© 2026 CortelSP - Design System Profissional

---

**Desenvolvido com ❤️ e foco em acessibilidade, performance e experiência do usuário.**