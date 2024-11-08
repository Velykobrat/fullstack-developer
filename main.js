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



document.addEventListener('DOMContentLoaded', function() {
    // Код для модального вікна
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');

    const openModalButtons = document.querySelectorAll('.open-modal');

    // Прив'язуємо події до кнопок для відкриття модалки
    openModalButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Запобігаємо переходу за посиланням
            const imageUrl = button.getAttribute('data-image');
            modalImage.src = imageUrl;
            modal.style.display = 'flex'; // Відображаємо модальне вікно
        });
    });

    // Закриваємо модальне вікно по кліку на хрестик
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'; // Приховуємо модальне вікно
    });

    // Закриваємо модальне вікно по кліку за його межами
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none'; // Приховуємо модальне вікно
        }
    });
});


