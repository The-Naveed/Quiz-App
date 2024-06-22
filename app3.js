let timeLeft = 60;
function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('timer').innerText = `${minutes}:${seconds}`;
    timeLeft--;
    if (timeLeft < 0) {
        clearInterval(timerInterval);
        document.getElementById('timer').innerText = 'Time\'s up!';
    }
}
const timerInterval = setInterval(updateTimer, 1000);

var m = 0;
var correct = 0;
var inCorrect = 0;
var countOne = document.getElementById("count1");
var countTwo = document.getElementById("count2");
var count = document.getElementById("count");
var image = document.getElementById("image");
var btn = document.getElementById("btn");
var time = document.getElementById("timer");
var name1 = document.getElementById("firstName");
var name2 = document.getElementById("lastName");
var name3 = document.getElementById("mail");
var name4 = document.getElementById("num");
var data = document.getElementById("data");
var left = document.getElementById("left");
name1.innerHTML = " " + localStorage.getItem("First Name");
name2.innerHTML = " " + localStorage.getItem("Second Name");
name3.innerHTML = " " + localStorage.getItem("E Mail");
name4.innerHTML = " " + localStorage.getItem("Number");

btn.style.margin = "auto"
btn.style.textDecoration = "none"
btn.style.display = "none"
countTwo.innerHTML = 10

var questions = [

    {
        q: "What is the largest continent by land area?",
        options: {
            a: "Asia",
            b: "Africa",
            c: "North America",
            d: "Europe",
        },
        ans: "Asia",
    },

    {
        q: "What is the capital city of Australia ?",
        options: {
            a: "Sydney",
            b: "Melbourne",
            c: "Canberra",
            d: "Brisbane",
        },
        ans: "Canberra",
    },

    {
        q: "Which planet is known as the Red Planet ?",
        options: {
            a: "Mars",
            b: "Jupiter",
            c: "Venus",
            d: "Saturn",
        },
        ans: "Mars",
    },

    {
        q: "What is the tallest mountain in the world ?",
        options: {
            a: "Mount Everest",
            b: "K2",
            c: "Kangchenjunga",
            d: "Lhotse",
        },
        ans: "Mount Everest",
    },

    {
        q: "What is the currency of Japan ?",
        options: {
            a: "Yen",
            b: "Yuan",
            c: "Euro",
            d: "dollar",
        },
        ans: "Yen",
    },

    {
        q: "Which is the largest ocean on Earth?",
        options: {
            a: "Indian Ocean",
            b: "Atlantic Ocean",
            c: "Pacific Ocean",
            d: "Arctic Ocean",
        },
        ans: "Pacific Ocean",
    },

    {
        q: "Which of these is not a primary color in painting?",
        options: {
            a: "Red",
            b: "Blue",
            c: "Yellow",
            d: "Green",
        },
        ans: "Green",
    },

    {
        q: "Who developed the theory of relativity?",
        options: {
            a: "Isaac Newton",
            b: "Albert Einstein",
            c: "Nikola Tesla",
            d: "Marie Curie",
        },
        ans: "Albert Einstein",
    },

    {
        q: "Who painted the Mona Lisa?",
        options: {
            a: "Vincent van Gogh",
            b: "Leonardo da Vinci",
            c: "Pablo Picasso",
            d: "Michelangelo",
        },
        ans: "Leonardo da Vinci",
    },

    {
        q: "Which gas do plants absorb from the atmosphere?",
        options: {
            a: "Oxygen",
            b: "Carbon Dioxide",
            c: "Nitrogen",
            d: "Hydrogen",
        },
        ans: "Carbon Dioxide",
    },

    {
        q: "Which gas do plants absorb from the atmosphere?",
        options: {
            a: "Oxygen",
            b: "Carbon Dioxide",
            c: "Nitrogen",
            d: "Hydrogen",
        },
        ans: "Carbon Dioxide",
    },
]

var finish = {
    head: "Finish"
}

var getQues = document.getElementById("ques");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");

getQues.innerHTML = questions[m].q
a.innerHTML = questions[m].options.a
b.innerHTML = questions[m].options.b
c.innerHTML = questions[m].options.c
d.innerHTML = questions[m].options.d

countOne.innerHTML = 1

console.log(m)

function next() {

    btn.style.display = "none"

    m++
    console.log(m)

    getQues.innerHTML = questions[m].q
    a.innerHTML = questions[m].options.a
    b.innerHTML = questions[m].options.b
    c.innerHTML = questions[m].options.c
    d.innerHTML = questions[m].options.d
    countOne.innerHTML = m + 1

    if (m >= 10) {
        result()
    }
}

function result() {

    if (correct >= 7) {
        image.style.display = "block";
        left.style.display = "block";
    }

    if (correct <= 6) {
        image.style.display = "block";
        image.src = "./Media/fail-stamp-1-300x259.png";
        left.style.display = "block"

    }


    if (m >= 10) {
        countOne.innerHTML = ""
        countTwo.innerHTML = ""
        count.innerHTML = ""
        getQues.innerHTML = "Result"
        a.innerHTML = "Total Questions : 10"
        b.innerHTML = "Correct Answers : " + (correct)
        c.innerHTML = "Wrong Answers : " + (10 - correct)
        d.innerHTML = "Percentage : " + (correct / 10) * 100 + "%"
        a.style.border = "none"
        b.style.border = "none"
        c.style.border = "none"
        d.style.border = "none"
        time.style.display = "none"
    }
}

function getAll(ele) {

    if (ele.innerHTML == questions[m].ans) {
        correct++
    }

    next()
}

setTimeout(function() {

    result()

    countOne.innerHTML = ""
    countTwo.innerHTML = ""
    count.innerHTML = ""
    getQues.innerHTML = "Result"
    a.innerHTML = "Total Questions : 10"
    b.innerHTML = "Correct Answers : " + (correct)
    c.innerHTML = "Wrong Answers : " + (10 - correct)
    d.innerHTML = "Percentage : " + (correct / 10) * 100 + "%"
    a.style.border = "none"
    b.style.border = "none"
    c.style.border = "none"
    d.style.border = "none"
    time.style.display = "none";

}, 60000);