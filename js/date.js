const dateId = document.getElementById('date');

function getDate() {
    const todayDate = new Date();
    
    const year = todayDate.getFullYear();
    const month = todayDate.getMonth() + 1;
    const date = todayDate.getDate();
    const day = todayDate.getDay();

    const weekday = [];
    weekday[0] = '일';
    weekday[1] = '월';
    weekday[2] = '화';
    weekday[3] = '수';
    weekday[4] = '목';
    weekday[5] = '금';
    weekday[6] = '토';

    dateId.innerText = `${year} 년 ${month} 월 ${date} 일 ${weekday[day]}요일`;
}

// 로드되자마자 실행하도록
getDate();