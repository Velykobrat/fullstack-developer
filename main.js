// Годинник
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
setInterval(updateTime, 1000);
updateTime();



// Кнопки
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
    // Додати необхідну дію для кнопки "Send Email"
    window.location.href = 'mailto:your_email@example.com';
});



// Отримуємо елементи модального вікна
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

// Знаходимо всі кнопки/посилання з класом 'open-modal'
const openModalButtons = document.querySelectorAll('.open-modal');

// Додаємо обробник подій на кожну кнопку/посилання
openModalButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Запобігаємо переходу за посиланням

        // Отримуємо шлях до зображення з атрибуту data-image
        const imageUrl = button.getAttribute('data-image');
        if (imageUrl) { // Перевіряємо, чи є шлях до зображення
            modalImage.src = imageUrl;
            modal.style.display = 'block';
        }
    });
});

// Закриваємо модальне вікно при натисканні на кнопку закриття
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закриваємо модальне вікно при натисканні за межі вікна
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
