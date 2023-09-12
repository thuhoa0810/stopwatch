let [milisecond, second, minute, hour] = [0,0,0,0];
let timeRef = document.querySelector('.time');
const startbutton = document.querySelector('.start');
const resetbutton = document.querySelector('.reset');
let isPlaying;
let intervalId ;

function displayTimer(){
    milisecond += 10;
    if(milisecond == 1000){
        milisecond = 0;
        second++;
        if(second == 60){
            second = 0;
            minute++;
            if(minute == 60){
                minute = 0;
                hour++;
            }
        }
    }
    let h = hour < 10 ? '0' + hour : hour;
    let m = minute < 10 ? '0' + minute : minute;
    let s = second < 10 ? '0' + second : second;
    let ms = 
        milisecond < 10 ? '00' + milisecond : milisecond
        milisecond < 100 ? '0' + milisecond : milisecond;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

startbutton.addEventListener('click',() => {
    if(isPlaying){
        isPlaying = false;
        startbutton.innerHTML = 'Start';
        clearInterval(intervalId);
    }
    else{
        isPlaying = true;
        intervalId = setInterval(displayTimer, 10);
        startbutton.innerHTML = 'Pause';
    }
})

resetbutton.addEventListener('click',() => {
    [milisecond, second, minute, hour] = [0,0,0,0];
    clearInterval(intervalId);
    timeRef.innerHTML = "00 : 00 : 00 : 000 "
})

