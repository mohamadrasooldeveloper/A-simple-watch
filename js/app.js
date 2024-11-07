let $ = document

const clock = $.querySelector('.clock')
const hourElem = $.getElementById('hours')
const minuteElem = $.getElementById('minutes')
const secondElem = $.getElementById('seconds')

setInterval(function () {
    let myDate = new Date()

    let nowHour = String(myDate.getHours()).padStart(2 , '0')
    let nowMinute = String(myDate.getMinutes()).padStart(2 , '0')
    let nowSecond = String(myDate.getSeconds()).padStart(2 , '0')

    hourElem.innerHTML = nowHour;
    minuteElem.innerHTML = nowMinute;
    secondElem.innerHTML = nowSecond;

    console.log(myDate);
}, 1000);