document.addEventListener("DOMContentLoaded", function () {
    //Creating Variables -----------------------------------
    let shuffledQuestions;
    let currentQuestionIndex;
    let i = 0;
    let timer = 10;
    let setInt;
    let wins = 0;
    let losses = 0;
    let index = 0;
    let notAnswered = 0;

    //These const, Link the HTML to the javaSCRIPT ----------
    const a1 = document.getElementById("answer1");
    const a2 = document.getElementById("answer2");
    const a3 = document.getElementById("answer3");
    const a4 = document.getElementById("answer4");
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons')
    const welcome = document.getElementById('welcome');
    const QandA = document.getElementById('QandA');
    const startButton = document.getElementById("start");
    const progress = document.getElementById("progress");

    console.log("js file loaded"); // **TESTING PURPOSES**


    //start button, onclick to start the game ----------------

    startButton.addEventListener('click', startGame);


    // Start the Game, #welcome to be 'hide', #QandA to 'unhide'.
    function startGame() {
        console.log(index);
        welcome.classList.add("hide");
        QandA.classList.remove("hide");
        //shuffledQuestion = triviaBank[Math.floor(Math.random() * triviaBank.length)];
        shuffledQuestion = triviaBank[index];
        currentQuestionIndex = 0;
        setNextQuestion();
        timer = 10;
        setInt = setInterval(countDown, 1000);
    }

    function setNextQuestion() {
        console.log("Function setNextQuestion Loaded") // **TESTING PURPOSES**
        showQuestion(shuffledQuestion[currentQuestionIndex])
    }

    function showQuestion() {
        console.log("Function showQuestion Loaded") // **TESTING PURPOSES**
        $("#feedback").html("<h1 style='color:white; font-weight:bold'>.</h1>" );
        questionElement.innerText = shuffledQuestion.question;
        //triviaBank.choices.forEach(item=> {console.log(item)})
        let counter = 1;
        console.log(shuffledQuestion.answer)
        for (i = 0; i < shuffledQuestion.choices.length; i++) {
            console.log(shuffledQuestion.choices) // **TESTING PURPOSES**
            $("#answer" + counter).text(shuffledQuestion.choices[i]);
            counter++;
        }
    };
    //     $(".btn").on("click", function(){
    // console.log($(this))
    // var b = $(this)
    // console.log(b.innerText)
    //     });

    a1.onclick = function () {
        console.log(a1.innerText)
        console.log(shuffledQuestion.answer)
        if (a1.innerText == shuffledQuestion.answer) {
            console.log("CORRECT") // **TESTING PURPOSES**
            correct()
        } else {
            console.log("WRONG") // **TESTING PURPOSES**
            wrong()
        }
    }

    a2.onclick = function () {
        if (a2.innerText == shuffledQuestion.answer) {
            console.log("CORRECT") // **TESTING PURPOSES**
            correct()
        } else {
            console.log("WRONG") // **TESTING PURPOSES**
            wrong()
        }
    }

    a3.onclick = function () {
        if (a3.innerText == shuffledQuestion.answer) {
            console.log("CORRECT") // **TESTING PURPOSES**
            correct()
        } else {
            console.log("WRONG") // **TESTING PURPOSES**
            wrong()
        }
    }

    a4.onclick = function () {
        if (a4.innerText == shuffledQuestion.answer) {
            console.log("CORRECT") // **TESTING PURPOSES**
            correct()
        } else {
            console.log("WRONG") // **TESTING PURPOSES**
            wrong()
        }
    }

    function countDown() {
        timer--;

        $("#timer").html(timer);
        if (timer == 0) {
            $("#feedback").html("<h1 style='color:red; font-weight:bold'>TIME\'S UP!</h1>" );
            notAnswered++;
            index++;
            progress++;
            clearInterval(setInt);
            setTimeout(startGame, 2200);
        }
    }



    function correct() {
        $("#feedback").html("<h1 style='color:green; font-weight:bold'>CORRECT!</h1>");
        wins++;
        $("#correctAnswers").html(wins);
        index++;
        clearInterval(setInt);
        setTimeout(startGame, 2200);
    }

    function wrong() {
        $("#feedback").html("<h1 style='color:red; font-weight:bold'>WRONG!</h1>" );
        losses++;
        $("#wrongAnswers").html(losses);
        index++;
        //timer = 10;
        clearInterval(setInt);
        setTimeout(startGame, 2200);
    }

    const triviaBank = [{
        question: "When was Elvis Presley born?",
        choices: [
            "On his birthday",
            "December",
            "1835",
            "Who is Elvis Presley?"
        ],
        answer: "On his birthday"
    },
    {
        question: "Where is the 'Land of Oz' located?",
        choices: [
            "New Zealand",
            "Washington",
            "Somewhere over the rainbow",
            "Canada"
        ],
        answer: "Somewhere over the rainbow"
    },
    {
        question: "What is the fifth letter of the alphabet?",
        choices: [
            "A",
            "E",
            "G",
            "D"
        ],
        answer: "E"
    },
    {
        question: "What is the squareroot of 36?",
        choices: [
            "6",
            "7",
            "9",
            "4"
        ],
        answer: "6"
    },
    {
        question: "Some months have 31 days, others have 30 days. How many have 28 days?",
        choices: [
            "3",
            "5",
            "2",
            "1"
        ],
        answer: "1"
    },
    {
        question: "A farmer had 15 cows. All but seven died. How many survived? ",
        choices: [
            "15",
            "7",
            "8",
            "2"
        ],
        answer: "7"
    },
    {
        question: "Who is the greatest teacher of all?",
        choices: [
            "Roger",
            "Bill",
            "Ted",
            "Jacob"
        ],
        answer: "Roger"
    },
    {
        question: "What is the top-selling item in Walmart?",
        choices: [
            "Eggs",
            "Milk",
            "Bananas",
            "Cookies"
        ],
        answer: "Bananas"
    },
    {
        question: "According the Career Builder Survey, what is the worst color to wear to a job interview?",
        choices: [
            "Pink",
            "Green",
            "Blue",
            "Orange"
        ],
        answer: "Orange"
    }
    ];


});