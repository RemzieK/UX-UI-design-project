

document.addEventListener("DOMContentLoaded", function() {
    const synth = window.speechSynthesis;

    // Function to handle speech
    function speakText(text) {
        if (synth.speaking) {
            console.error('SpeechSynthesis is already speaking.');
            return;
        }

        let utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'bg-BG'; // Set language to Bulgarian
        synth.speak(utterance);
    }

    // Only trigger the introduction message if we're on breackfast.html
    if (window.location.pathname.includes("breackfast.html")) {
        speakText("Ти избра закуски, натисни на 1 за рецепта палачинки или натисни 2 за рецепта баница");
    }

    // Function to handle reading a specific recipe
    window.readRecipe = function(recipe) {
        let recipeText = "";

        if (recipe === "pancakes") {
            recipeText = "Палачинки: Необходими продукти: Яйца - 2 броя, Прясно мляко - 2 чаши, Брашно - 2 чаени чаши, Сол - щипка, Олио - 2 супени лъжици. Начин на приготвяне: В дълбока купа разчупете яйцата. Разбийте със солта. Добавете с бъркане млякото. Постепенно добавете и брашното. Бъркайте до получаване на хомогенна смес. Добавете 1-2 супени лъжици олио. Загрейте тигана за палачинки. При тефлонов тиган можете да не използвате мазнина. Поставете около един черпак от сместа и разлейте по цялата основа на тигана. Оставете да се пържи до лекото отделяне на краищата на палачинката. Обърнете с помощта на дървена шпатулка. След като връхчетата зарозовеят и се повдигнат, палачинката е готова.";
        } else if (recipe === "banitsa") {
            recipeText = "Баница: Необходими продукти: Кори за баница - 1 пакет, Олио - 150 милилитра, Яйца - 3 броя, Кисело мляко - 400 грама, Бакпулвер - 1 броя, Сирене - 300 грама. Начин на приготвяне: Смесете продуктите за плънката в отделна купа— яйцата, сиренето и киселото мляко с бакпулвера. Добавете малко олио и разбъркайте добре. След това вземете голяма тава за печене и сложете малко олио на дъното. Наредете корите поотделно едина по едина с малки количества от плънката между тях. Завийте и подредете готовите рулца в тавата за печене, така че да образуват спирала. Баницата се намазва с жълтък и се пече във фурна на 200 — 250 градуса до златисто. И готово!";
        }

        // Read the selected recipe
        speakText(recipeText);
    };

    // Listen for keypress events on the keyboard (1 or 2)
    window.addEventListener("keydown", function(event) {
        if (event.key === "1") {
            // Trigger reading the pancakes recipe
            readRecipe("pancakes");
        } else if (event.key === "2") {
            // Trigger reading the banitsa recipe
            readRecipe("banitsa");
        }
    });

});