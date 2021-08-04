const clock = document.getElementById('clock');

function getClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    clock.innerText = `${hour} : ${minute} : ${seconds}`;
}

// 로드되자마자 실행하도록
getClock();
setInterval(getClock, 1000);