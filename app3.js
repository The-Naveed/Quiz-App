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

var q1 = 0

var questions = {

    q1: {
        q: "What is the largest continent by land area?",
        a: "Asia",
        b: "Africa",
        c: "North America",
        d: "Europe",
        ans: "Asia",
    },

    q2: {
        q: "What is the capital city of Australia ?",
        a: "Sydney",
        b: "Melbourne",
        c: "Canberra",
        d: "Brisbane",
        ans: "Canberra",
    },

    q3: {
        q: "Which planet is known as the Red Planet ?",
        a: "Mars",
        b: "Jupiter",
        c: "Venus",
        d: "Saturn",
        ans: "Mars",
    },

    q4: {
        q: "What is the tallest mountain in the world ?",
        a: "Mount Everest",
        b: "K2",
        c: "Kangchenjunga",
        d: "Lhotse",
        ans: "Mount Everest",
    },

    q5: {
        q: "What is the currency of Japan ?",
        a: "Yen",
        b: "Yuan",
        c: "Euro",
        d: "dollar",
        ans: "Yen",
    }
}

console.log(questions)

var getQues = document.getElementById("ques");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");

// getQues.innerHTML = questions.q1.q
// a.innerHTML = questions.q1.a
// b.innerHTML = questions.q1.b
// c.innerHTML = questions.q1.c
// d.innerHTML = questions.q1.d


function next() {

    getQues.innerHTML = questions.q4.q
    a.innerHTML = questions.q4.a
    b.innerHTML = questions.q4.b
    c.innerHTML = questions.q4.c
    d.innerHTML = questions.q4.d
    q1++
    console.log(q1)
}

// function next() {
//     getQues.innerHTML = arr[zero].q
//     a.innerHTML = arr[zero].a
//     b.innerHTML = arr[zero].b
//     c.innerHTML = arr[zero].c
//     d.innerHTML = arr[zero].d
//     zero++
//     console.log(zero)
// }
