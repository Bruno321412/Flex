// Adicionando funcionalidade de arrastar e soltar usando JavaScript
const box = document.querySelector('.box');
let isDragging = false;
let initialX;
let initialY;
let offsetX;
let offsetY;

box.addEventListener('mousedown', (e) => {
    isDragging = true;
    box.style.cursor = 'grabbing';
    initialX = e.clientX;
    initialY = e.clientY;
    const boxRect = box.getBoundingClientRect();
    offsetX = initialX - boxRect.left;
    offsetY = initialY - boxRect.top;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;
        box.style.transform = `translate(${newX}px, ${newY}px)`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    box.style.cursor = 'grab';
});
