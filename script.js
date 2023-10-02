const questions = [{
        "que": "Which of the following is a markup language",
        "a": "HTML",
        "b": "CSS",
        "c": "JavaScript",
        "d": "PHP",
        "correct": "a"
    },
    {
        "que": "How was the founder of JAVA",
        "a": "Games Josling",
        "b": "Elon Musk",
        "c": "Ritchie",
        "d": "Bill Gates",
        "correct": "a"
    },
    {
        "que": "What year was JavaScript launched?",
        "a": "1996",
        "b": "1995",
        "c": "1994",
        "d": "None of the above",
        "correct": "b"
    },
    {
        "que": "What does Css Stands for?",
        "a": "HyperText Markup Language",
        "b": "Cascading Style Sheet",
        "c": "Jason Object Notation",
        "d": "Helicopters Terminals MotorBoats Lamborginis",
        "correct": "b"
    }
]
let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById("queBox");
const optionInputs = document.querySelectorAll(".options")
const loadQuestion = () => {
    if (index === total) {
        return endQuiz()
    }
    reset()
    const data = questions[index]

    quesBox.innerText = ` ${index+1})    ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;





}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }

        }
    )
    return answer;

}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
       <h3>Thank you for playing the quiz</h3>
       <h2>${right} / ${total} are correct </h2>
       `
}

loadQuestion();