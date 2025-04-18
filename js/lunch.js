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
    if (window.location.pathname.includes("lunch.html")) {
        speakText("Ти избра обяд, натисни на 1 за рецепта картофена крем супа или натисни 2 за рецепта боб яхния");
    }

    // Function to handle reading a specific recipe
    window.readRecipe = function(recipe) {
        let recipeText = "";

        if (recipe === "soup") {
            recipeText = "Картофена крем супа: Необходими продукти: Картофи - 1 килограм, Лук - 1 брой, Моркови - 2 броя, Прясно мляко - 100 милилитра, Краве масло - 30 грама, Магданоз - 1/4 връзка. Начин на приготвяне: Почистете картофите, моркова и лука и ги варете в подсолена вода, докато омекнат. Зеленчуците са достатъчно сварени, когато можете да ги набучите лесно с вилица. Важно е да се сварят добре, за да се получи в последствие гладка супа. Пасирайте сварените зеленчуци с пасатор, или кухненски робот до получаването на еднородна смес. Не изхвърляйте водата, в която са врели зеленчуците. Добавете към получената смес маслото, прясното мляко и около половин литър от водата, в която са врели зеленчуците. Разбъркайте добре до получаване на хомогенна смес и върнете за още 5 минути крем-супата от картофи на котлона.";
        } else if (recipe === "bob") {
            recipeText = "Боб яхния: Необходими продукти: Боб - 2 чаени чаши, Лук - 1 брой, Моркови - 2 броя, Олио - 1/2 чаена чаша, Джоджен - 1 чаена лъжица, Чесън - 4 скилидки, Червен пипер - 2 чаени лъжици, Домати - 2 броя. Начин на приготвяне: Накиснете боба в студена вода за няколко часа. Излейте водата, в която се е киснал, налейте друга и сложете на котлона. След като бобът заври излейте водата и налейте нова. Налейте толкова вода, че да покрие боба с един пръст и сложете на котлона. Не слагате сол! Почистете и нарежете на дребно лука и морковите и добавете половината от тях към врящия боб. Добавете и скилидките чесън, джоджена, както и половината олио. Оставете боба да ври на слаб огън до пълно сваряване за около час и половина. След като бобът е почти готов добавете, измитите, обелени и нарязани на ситно домати, както и сол, около 1 чаена лъжица е достатъчно. Идва моментът, в който трябва да запържим боба. В тиган изсипете останалото олио, и след като се сгорещи останалата половина от нарязаните лук и моркови. Добавете и червения пипер, разбъркайте за около 20-30 секунди, след което запръжката в тенджера с боб и разбъркайте добре. Оставете да заври за около минута.И готово!";
        }

        // Read the selected recipe
        speakText(recipeText);
    };

    // Listen for keypress events on the keyboard (1 or 2)
    window.addEventListener("keydown", function(event) {
        if (event.key === "1") {
            // Trigger reading the pancakes recipe
            readRecipe("soup");
        } else if (event.key === "2") {
            // Trigger reading the banitsa recipe
            readRecipe("bob");
        }
    });

});