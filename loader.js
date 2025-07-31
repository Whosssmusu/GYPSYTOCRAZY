// Variables globales para el loader
const loaderText = "GYPSYTOCRAZY";
let isAnimating = false;
let isNavigating = false;

// Función para animar las letras
function animateLetters() {
    const loaderSpan = document.querySelector('.loader-text');
    if (!loaderSpan || isAnimating) return;
    
    isAnimating = true;
    loaderSpan.innerHTML = "";

    for (let i = 0; i < loaderText.length; i++) {
        const span = document.createElement('span');
        span.textContent = loaderText[i];
        loaderSpan.appendChild(span);
    }

    const spans = loaderSpan.querySelectorAll('span');
    spans.forEach((span, idx) => {
        setTimeout(() => {
            span.classList.add('visible');
        }, idx * 100);
    });

    setTimeout(() => {
        isAnimating = false;
    }, loaderText.length * 100 + 100);
}

// Función para mostrar el loader
function showLoader() {
    if (isNavigating) return;
    isNavigating = true;

    const loader = document.getElementById('page-loader');
    const mainContent = document.querySelector('.main-content');
    
    if (!loader) return;

    loader.classList.remove('hide');
    if (mainContent) {
        mainContent.classList.remove('loaded');
    }

    animateLetters();
}

// Función para ocultar el loader
function hideLoader() {
    const loader = document.getElementById('page-loader');
    const mainContent = document.querySelector('.main-content');
    
    if (!loader) return;

    loader.classList.add('hide');
    if (mainContent) {
        mainContent.classList.add('loaded');
    }
    
    isNavigating = false;
}

// Inicializar el loader cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    showLoader();
    setTimeout(hideLoader, 2000);
});

// Manejar la navegación entre páginas
document.querySelectorAll('a').forEach(link => {
    if (link.hostname === window.location.hostname) {
        link.addEventListener('click', function(e) {
            // Ignorar enlaces con target="_blank" o anclas
            if (link.getAttribute('target') === '_blank' || link.href.includes('#')) return;
            
            // Ignorar enlaces que no son de navegación principal
            if (!link.classList.contains('nav-link') && !link.classList.contains('logo-link')) return;
            
            e.preventDefault();
            
            if (!isNavigating) {
                showLoader();
                setTimeout(() => {
                    window.location.href = link.href;
                }, 1000);
            }
        });
    }
});
 