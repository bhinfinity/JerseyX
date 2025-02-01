// Hero section animation
function initHeroAnimation() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    hero.innerHTML += '<div class="hero-animation"></div>';
    const animation = hero.querySelector('.hero-animation');
    
    animation.style.cssText = `
        position: absolute;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, var(--accent) 0%, transparent 50%);
        opacity: 0.1;
        animation: pulse 8s infinite;
    `;

    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); opacity: 0.1; }
            50% { transform: scale(1.5); opacity: 0.2; }
            100% { transform: scale(1); opacity: 0.1; }
        }
    `;
    document.head.appendChild(style);
}

// Modal animations
function initModalAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideIn {
            from { transform: translateY(-100px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        .modal {
            animation: fadeIn 0.3s ease;
        }

        .modal-content {
            animation: slideIn 0.3s ease;
        }
    `;
    document.head.appendChild(style);
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    initHeroAnimation();
    initModalAnimations();
});

export { initHeroAnimation, initModalAnimations };