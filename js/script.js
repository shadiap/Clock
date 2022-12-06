window.onload = function showTime(){
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var session = "AM";
    if(hour>12){
        session = "PM";
        hour = hour-12;
    }
    if(hour == 0){
        hour = 12;
    }
    hour = (hour<10) ? "0"+hour:hour;
    minute = (minute < 10)? "0"+ minute:minute;
    second = (second < 10) ? "0" + second:second;
    var totaltime = hour + " : " + minute + ":" + second;
    document.getElementById("MyClockDisplay").innerHTML = totaltime;
    document.getElementById("MyClockDisplay").textContent = totaltime;
setTimeout(showTime,1000)    
}
showTime();
