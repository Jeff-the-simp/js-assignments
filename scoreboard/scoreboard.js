let sec = 60

let timer = setInterval(minusSec, 1000)

function minusSec() {
    sec--
    document.querySelector("#countdown").innerText = sec
}






// const startingMinutes = 10;
// let time = startingMinutes * 60;


// document.querySelector('#countdown');


// function updateCountdown() {
//     const minutes = Math.floor(time / 60);
//     let seconds = time % 60;

//     setInterval(updateCountdown, 1000);

//     countdownEl.innerHTML = `${minutes}: ${seconds}`;
//     time--;

// }
// time = 600
// seconds = 0

// 600 / 60 = 10

