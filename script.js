document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content-wrapper');
    const image = document.querySelector('.image-box');

    // Плавное появление контента при загрузке
    content.style.opacity = '0';
    content.style.transform = 'translateX(-20px)';
    
    setTimeout(() => {
        content.style.transition = 'all 1s ease-out';
        content.style.opacity = '1';
        content.style.transform = 'translateX(0)';
    }, 300);

    // Легкий эффект параллакса для фото при движении мыши
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        image.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});