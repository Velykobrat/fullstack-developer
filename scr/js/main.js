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
