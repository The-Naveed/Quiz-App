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

var m = 1;
var correct = 0;
var wrong  = 0;

var questions = {

    q1: {
        q: "What is the largest continent by land area?",
        options: {
            a: "Asia",
            b: "Africa",
            c: "North America",
            d: "Europe",
        },
        ans: "Asia",
    },

    q2: {
        q: "What is the capital city of Australia ?",
        options: {
            a: "Sydney",
            b: "Melbourne",
            c: "Canberra",
            d: "Brisbane",
        },
        ans: "Canberra",
    },

    q3: {
        q: "Which planet is known as the Red Planet ?",
        options: {
            a: "Mars",
            b: "Jupiter",
            c: "Venus",
            d: "Saturn",
        },
        ans: "Mars",
    },

    q4: {
        q: "What is the tallest mountain in the world ?",
        options: {
            a: "Mount Everest",
            b: "K2",
            c: "Kangchenjunga",
            d: "Lhotse",
        },
        ans: "Mount Everest",
    },

    q5: {
        q: "What is the currency of Japan ?",
        options: {
            a: "Yen",
            b: "Yuan",
            c: "Euro",
            d: "dollar",
        },
        ans: "Yen",
    },

    q6: {
        q: "Which is the largest ocean on Earth?",
        options: {
            a: "Indian Ocean",
            b: "Atlantic Ocean",
            c: "Pacific Ocean",
            d: "Arctic Ocean",
        },
        ans: "Pacific Ocean",
    },

    q7: {
        q: "Which of these is not a primary color in painting?",
        options: {
            a: "Red",
            b: "Blue",
            c: "Yellow",
            d: "Green",
        },
        ans: "Green",
    },

    q8: {
        q: "Who developed the theory of relativity?",
        options: {
            a: "Isaac Newton",
            b: "Albert Einstein",
            c: "Nikola Tesla",
            d: "Marie Curie",
        },
        ans: "Albert Einstein",
    },

    q9: {
        q: "Who painted the Mona Lisa?",
        options: {
            a: "Vincent van Gogh",
            b: "Leonardo da Vinci",
            c: "Pablo Picasso",
            d: "Michelangelo",
        },
        ans: "Leonardo da Vinci",
    },

    q10: {
        q: "Which gas do plants absorb from the atmosphere?",
        options: {
            a: "Oxygen",
            b: "Carbon Dioxide",
            c: "Nitrogen",
            d: "Hydrogen",
        },
        ans: "Carbon Dioxide",
    },
}


console.log(questions.M)



var getQues = document.getElementById("ques");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");

getQues.innerHTML = questions.q1.q
a.innerHTML = questions.q1.options.a
b.innerHTML = questions.q1.options.b
c.innerHTML = questions.q1.options.c
d.innerHTML = questions.q1.options.d


function next() {

    m++

    if (m == 2) {
        getQues.innerHTML = questions.q2.q
        a.innerHTML = questions.q2.options.a
        b.innerHTML = questions.q2.options.b
        c.innerHTML = questions.q2.options.c
        d.innerHTML = questions.q2.options.d
    }

    if (m == 3) {

        getQues.innerHTML = questions.q3.q
        a.innerHTML = questions.q3.options.a
        b.innerHTML = questions.q3.options.b
        c.innerHTML = questions.q3.options.c
        d.innerHTML = questions.q3.options.d

    }

    if (m == 4) {

        getQues.innerHTML = questions.q4.q
        a.innerHTML = questions.q4.options.a
        b.innerHTML = questions.q4.options.b
        c.innerHTML = questions.q4.options.c
        d.innerHTML = questions.q4.options.d

    }

    if (m == 5) {

        getQues.innerHTML = questions.q5.q
        a.innerHTML = questions.q5.options.a
        b.innerHTML = questions.q5.options.b
        c.innerHTML = questions.q5.options.c
        d.innerHTML = questions.q5.options.d

    }

    if (m == 6) {

        getQues.innerHTML = questions.q6.q
        a.innerHTML = questions.q6.options.a
        b.innerHTML = questions.q6.options.b
        c.innerHTML = questions.q6.options.c
        d.innerHTML = questions.q6.options.d

    }

    if (m == 7) {

        getQues.innerHTML = questions.q7.q
        a.innerHTML = questions.q7.options.a
        b.innerHTML = questions.q7.options.b
        c.innerHTML = questions.q7.options.c
        d.innerHTML = questions.q7.options.d

    }

    if (m == 8) {

        getQues.innerHTML = questions.q8.q
        a.innerHTML = questions.q8.options.a
        b.innerHTML = questions.q8.options.b
        c.innerHTML = questions.q8.options.c
        d.innerHTML = questions.q8.options.d

    }

    if (m == 9) {

        getQues.innerHTML = questions.q9.q
        a.innerHTML = questions.q9.options.a
        b.innerHTML = questions.q9.options.b
        c.innerHTML = questions.q9.options.c
        d.innerHTML = questions.q9.options.d

    }

    if (m == 10) {

        getQues.innerHTML = questions.q10.q
        a.innerHTML = questions.q10.options.a
        b.innerHTML = questions.q10.options.b
        c.innerHTML = questions.q10.options.c
        d.innerHTML = questions.q10.options.d

    }

}