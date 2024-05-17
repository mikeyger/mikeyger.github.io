document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.random-image');
    const container = document.querySelector('.image-grid');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    function getRandomPosition() {
        const x = Math.random() * (containerWidth - 100);
        const y = Math.random() * (containerHeight - 100);
        return { x, y };
    }

    function moveImages() {
        images.forEach(image => {
            const { x, y } = getRandomPosition();
            image.style.transform = `translate(${x}px, ${y}px)`;
            image.style.opacity = Math.random() < 0.5 ? '0' : '1';
        });
    }

    setInterval(moveImages, 200);  // Adjust the interval to change speed
});
