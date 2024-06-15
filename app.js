function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var day = now.toLocaleDateString('en-US', { weekday: 'long' });

    var timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('date').innerText = timeString;
    document.getElementById('day').innerText = day;
}
setInterval(updateTime, 1000);


var getFirstName = document.getElementById("firstName");
var getLastName = document.getElementById("lastName");
var getEmail = document.getElementById("email");
var getNum = document.getElementById("num");
var getLink = document.getElementById("link");

console.log(getLastName)

function save() {

    if (!getFirstName.value) {
        alert("First Name Is Missing");
        return
    }

    if (!getLastName.value) {
        alert("Last Name Is Missing");
        return
    }

    if ((getLastName = true) || (getLastName = true)) {
        getLink.href = "index2.html"
    }

    localStorage.setItem("First Name", getFirstName.value);
    localStorage.setItem("Last Name", getLastName.value);
}

console.log()

