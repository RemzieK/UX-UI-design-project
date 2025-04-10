document.addEventListener("DOMContentLoaded", function () {
    const synth = window.speechSynthesis;

    function speak(text) {
        if (synth.speaking) {
            synth.cancel(); // cancel ongoing speech
        }
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = "bg-BG"; // Bulgarian
        synth.speak(utter);
    }

    // Only speak the welcome message on index.html
    if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
        speak("Добре дошли в сайт ресторан рецепти, моля изберете категория");
    }

     // Category-specific hover messages
     const categories = [
        { selector: 'a[href="breackfast.html"]', message: "Закуска" },
        { selector: 'a[href="lunch.html"]', message: "Обяд" },
        { selector: 'a[href="dinner.html"]', message: "Вечеря" },
        { selector: 'a[href="desserts.html"]', message: "Десерти" },
    ];

    categories.forEach(({ selector, message }) => {
        const link = document.querySelector(selector);
        if (link) {
            link.addEventListener("mouseenter", () => {
                speak(message);
            });
        }
    });
});
