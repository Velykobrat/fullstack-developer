function updateTime() {
    const timeElement = document.querySelector(".time");
    const currentTime = new Date().toLocaleTimeString("uk-UA", {
        timeZone: "Europe/Kyiv",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    
    timeElement.textContent = currentTime;
}

// Оновлення кожну секунду
setInterval(updateTime, 1000);

// Викликати функцію один раз для миттєвого показу часу
updateTime();


document.getElementById('btn-portfolio').addEventListener('click', function() {
    document.getElementById('projects').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('btn-work-with-me').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('btn-work-with-me-2').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('btn-send-email').addEventListener('click', function () {
    // Додайте необхідну дію для кнопки "Send Email"
    window.location.href = 'mailto:your_email@example.com';
});

