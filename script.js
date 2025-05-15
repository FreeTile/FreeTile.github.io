document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('emailBtn').addEventListener('click', function (event) {
        event.preventDefault();
        copyToClipboard('ya.karac2013@yandex.ru', 'Email address copied to clipboard!');
    });
    /*
    document.getElementById('phoneBtn').addEventListener('click', function (event) {
        event.preventDefault();
        copyToClipboard('+1234567890', 'Phone number copied to clipboard!');
    });
    */

    function copyToClipboard(text, message) {
        navigator.clipboard.writeText(text).then(function() {
            showNotification(message);
        }, function(err) {
            console.error('Could not copy text: ', err);
        });
    }


    function showNotification(message) {
        var notification = document.getElementById('notification');
        notification.innerText = message;
        notification.style.display = 'block';

        setTimeout(function() {
            notification.style.display = 'none';
        }, 3000);
    }

    const cursor = document.querySelector('.custom-cursor');
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    document.documentElement.style.cursor = 'none';

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.3;
        cursorY += (mouseY - cursorY) * 0.3;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    const interactiveElements = document.querySelectorAll('a, button, .contact-btn, .resume-link a');

    interactiveElements.forEach(elem => {
        elem.addEventListener('mouseenter', () => {
            cursor.classList.add('hovered');
        });

        elem.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovered');
        });
    });
});