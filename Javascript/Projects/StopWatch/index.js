const dsiplay = document.getElementById("display");
let timer = null;
let starttime = 0;
let elapsetime = 0;
let isrunning = false;

function start(){
    if(!isrunning){
        starttime = Date.now() - elapsetime;
        timer = setInterval(update,10);
        isrunning = true;
    }
}

function stop(){
    if(isrunning){
        clearInterval(timer);
        elapsetime = Date.now() - starttime;
        isrunning = false;
    }
}

function reset(){
    clearInterval(timer);
    starttime = 0;
    elapsetime = 0;
    isrunning = false;
    dsiplay.textContent = "00:00:00:00";
}

function update(){
    const currenttime = Date.now();
    elapsetime = currenttime - starttime;

    let hours = Math.floor(elapsetime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsetime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsetime / 1000 % 60);
    let milliseconds = Math.floor(elapsetime % 1000 / 10);

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    dsiplay.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
