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
    if (window.location.pathname.includes("desserts.html")) {
        speakText("Ти избра десерти, натисни на 1 за рецепта домашни шоколадови бонбони или натисни 2 за рецепта бърз десерт с ягоди");
    }

    // Function to handle reading a specific recipe
    window.readRecipe = function(recipe) {
        let recipeText = "";

        if (recipe === "candy") {
            recipeText = "Домашни шоколадови бонбони: Необходими продукти: Какаови бисквити - 400 грама, Шоколадов кувертюр - 200 грама, Крема сирене - 200 грама, Краве масло - 2 супени лъжици. Начин на приготвяне: Първата стъпка от рецептата за шоколадовите бонбони е подготовката на бисквитети. С помощта на кухненски робот или блендер смилате бисквитите до получаване на хомогенна смес. Добавяте и предвиденото количество крема сирене и разбърквате добре с ръце. Оформате бонбоните с ръце на еднакви по големина топчета, които нареждате в чиния. Така подготвените бонбони прибирате във фризера, за да стегнат за минимум 30 минути. Поставяте шоколадовия кувертюр в купичка, която поставяте в тенджерка с вода на котлона, за да може да го разтопите на водна баня. Добавяте кравето масло и разбърквате добре за получаване на гладка глазура. Потапяте всеки един бонбони в глазурата, след което поставяте върху хартия за печене и поръсвате с украса по ваш избор. Готовите бонбони съхранявате в хладилник, за да останат стегнати.";
        } else if (recipe === "strawberry") {
            recipeText = "Бърз десерт с ягоди: Необходими продукти: Ягоди - 500 грама, Кисело мляко - 400 грама, Ванилия - 1 брой, Обикновени бисквити - 130 грама, Мед - 3 супени лъжици. Начин на приготвяне: Десертът е много свеж и изключително лесен за приготвяне. На дъното на по-големи прозрачни чаши натрошавате на дребно по две обикновени бисквити. Нарязвате ягодите на дребно, като оставяте 5-6 ягоди за украса. Нарязаните на дребно ягоди разпределяте в чашите върху натрошените бисквити. Разбивате добре меда, киселото мляко и ванилията. Получената смес разпределяте в чашите. Украсявате чашите с останалите цели ягоди.";
        }

        // Read the selected recipe
        speakText(recipeText);
    };

    // Listen for keypress events on the keyboard (1 or 2)
    window.addEventListener("keydown", function(event) {
        if (event.key === "1") {
            // Trigger reading the pancakes recipe
            readRecipe("candy");
        } else if (event.key === "2") {
            // Trigger reading the banitsa recipe
            readRecipe("strawberry");
        }
    });

});
