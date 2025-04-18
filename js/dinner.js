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
    if (window.location.pathname.includes("dinner.html")) {
        speakText("Ти избра вечеря, натисни на 1 за рецепта спагети с доматен сос или натисни 2 за рецепта пиле с ориз");
    }

    // Function to handle reading a specific recipe
    window.readRecipe = function(recipe) {
        let recipeText = "";

        if (recipe === "spagetti") {
            recipeText = "Спагети с доматен сос: Необходими продукти: Домати - 1 килограм, Босилек - 20 листа, Спагети - 300 грама, Чесън - 3 скилидки, Зехтин - 3 супени лъжици, Пармезан - 20 грама. Начин на приготвяне: Добре е да изберете добре узрели домати, за да можете да ги обелите по-лесно. Обелените домати пюрирайте, или настържете на едро ренде. В сгорещено олио, или зехтин изсипете доматеното пюре и нарязания на много ситно чесън. Добавете и около една чаена лъжица сол. Доматеният сос трябва да ври докато се сгъсти. Накрая добавяте накъсаните на дребно листенца босилек. Спагетите сварете с щипка сол във вряща водя, следвайки инструкциите на пакета. Те винаги са най-точни. Отцедете добре спагетите, поръсете с малко зехтин , разбъркайте и добавете към всяка порция от доматения сос. Отгоре сложете по няколко „люспички“ пармезан, или пък поръсете, ако ползвате настърган пармезан.";
        } else if (recipe === "pile") {
            recipeText = "Пиле с ориз: Необходими продукти: Пилешки бутчета - 6 броя, Ориз - 1 чаена чаша, Моркови - 1 брой, Лук- 1 брой, Олио - 5 супени лъжици, Черен пипер - 1/2 кафена лъжица. Начин на приготвяне: Обелвате лука и го нарязвате на дребно. Почиствате морковите и също ги нарязвате на дребно. В дълбок тиган загрявате 3-4 супени лъжици олио, към които добавяте нарязаните на дребно зеленчуци и ги задушавате за около 4-5 минути, докато омекнат. След това добавяте и измития ориз и разбърквате няколко минути, докато оризът стане прозрачен. Добавяте една чаена лъжица сол и 1/2 чаена лъжица черен пипер и разбърквате. Докато приготвяте ориза трябва да подготвите и пилешкото месо. Можете да сварите пилешкото месо само в солена вода, но по-добре е да добавите към водата парченце зеленчук по избор. Варите пилешкото месо около 15 минути, а не до пълна готовност, защото му предстои още термична обработка. Изсипвате ориза в тава, разпределяте върху нея пилешкото месо и добавяте 3 чаени чаши от бульона, в който е вряло пилешкото месо, като предварително го прецедите с цедка. Печете пилето с ориз в предварително загрята на 180 градуса фурна за около час, докато водата изври и оризът е сварен.";
        }

        // Read the selected recipe
        speakText(recipeText);
    };

    // Listen for keypress events on the keyboard (1 or 2)
    window.addEventListener("keydown", function(event) {
        if (event.key === "1") {
            // Trigger reading the pancakes recipe
            readRecipe("spagetti");
        } else if (event.key === "2") {
            // Trigger reading the banitsa recipe
            readRecipe("pile");
        }
    });

});