document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const message = document.getElementById('message');

    yesBtn.addEventListener('click', function() {
        message.classList.remove('hidden');
    });

    noBtn.addEventListener('mouseover', function() {
        const randomX = Math.random() * window.innerWidth - noBtn.offsetWidth;
        const randomY = Math.random() * window.innerHeight - noBtn.offsetHeight;

        noBtn.style.position = 'absolute';
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    });
});
