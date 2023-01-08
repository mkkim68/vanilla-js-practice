const clock = document.querySelector("h2#clock");
const calendar = document.querySelector("h2#calendar");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
function getCalendar() {
    const weekly = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const monthly = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const today = date.getDate();
    const day = date.getDay();
    
    const monthtoday = monthly[month];
    const weektoday = weekly[day];

    calendar.innerText = `${monthtoday} ${today}, ${year} ${weektoday}`;
}


getClock();
getCalendar();
setInterval(getClock, 1000);
setInterval(getCalendar,1000);