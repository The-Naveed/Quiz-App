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

var zero = 0

var question1 = {

    q: "What is the largest continent by land area?",
    a: "Asia",
    b: "Africa",
    c: "North America",
    d: "Europe",

}

var question2 = {

    q: "What is the capital city of Australia ?",
    a: "Sydney",
    b: "Melbourne",
    c: "Canberra",
    d: "Brisbane",
}

var question3 = {

    q: "Which planet is known as the Red Planet ?",
    a: "Mars",
    b: "Jupiter",
    c: "Venus",
    d: "Saturn",
}

var question4 = {

    q: "Which planet is known as the Red Planet ?",
    a: "Mars",
    b: "Jupiter",
    c: "Venus",
    d: "Saturn",
}

var question5 = {

    q: "What is the tallest mountain in the world ?",
    a: "Mount Everest",
    b: "K2",
    c: "Kangchenjunga",
    d: "Lhotse",
}

var question6 = {

    q: "What is the currency of Japan ?",
    a: "Yen",
    b: "Yuan",
    c: "Euro",
    d: "dollar",
}

var arr = [question1, question2, question3, question4, question5, question6]



var getQues = document.getElementById("ques");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");

getQues.innerHTML = arr[zero].q
a.innerHTML = arr[zero].a
b.innerHTML = arr[zero].b
c.innerHTML = arr[zero].c
d.innerHTML = arr[zero].d

// function next() {
//     for (var i = 0; i < arr.length; i++);
//     console.log(i)
// }

function next() {
    getQues.innerHTML = arr[zero].q
    a.innerHTML = arr[zero].a
    b.innerHTML = arr[zero].b
    c.innerHTML = arr[zero].c
    d.innerHTML = arr[zero].d
    zero++
    console.log(zero)
}
