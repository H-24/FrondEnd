const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    hour = String(date.getHours()).padStart(2, "0");
    min = String(date.getMinutes()).padStart(2, "0");
    sec = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hour}:${min}:${sec}`;
}

getClock();
setInterval(getClock, 1000);