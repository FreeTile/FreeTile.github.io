document.addEventListener('DOMContentLoaded', function() {
    // Email button click event
    document.getElementById('emailBtn').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default action
        copyToClipboard('ya.karac2013@yandex.ru', 'Email address copied to clipboard!');
    });

    // Phone button click event
    document.getElementById('phoneBtn').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default action
        copyToClipboard('+1234567890', 'Phone number copied to clipboard!');
    });

    // Function to copy text to clipboard and show notification
    function copyToClipboard(text, message) {
        navigator.clipboard.writeText(text).then(function() {
            showNotification(message);
        }, function(err) {
            console.error('Could not copy text: ', err);
        });
    }

    // Function to display notification
    function showNotification(message) {
        var notification = document.getElementById('notification');
        notification.innerText = message;
        notification.style.display = 'block';
        // Hide the notification after 3 seconds
        setTimeout(function() {
            notification.style.display = 'none';
        }, 3000);
    }
});