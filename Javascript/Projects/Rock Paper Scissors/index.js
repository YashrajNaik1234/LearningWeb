const choices = ["rock","paper","scissors"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");
const playerscordisp = document.getElementById("playerscoresdisp");
const compscordisp = document.getElementById("compscoresdisp");
let ply = 0;
let comp = 0;

function playgame(playerchoice){
    const compchoice = choices[Math.floor(Math.random() * 3)];

    if(playerchoice == compchoice){
        result = "IT'S A TIE!";
    }
    else{
        switch (playerchoice) {
            case "rock":
                result = (compchoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (compchoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (compchoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerdisplay.textContent = `PLAYER : ${playerchoice}`;
    computerdisplay.textContent = `COMPUTER : ${compchoice}`;
    resultdisplay.textContent = result;

    resultdisplay.classList.remove("greentext","redtext");

    switch(result){
        case "YOU WIN!":
            resultdisplay.classList.add("greentext");
            ply++;
            playerscordisp.textContent = ply;
            break;
        case "YOU LOSE!":
            resultdisplay.classList.add("redtext");
            comp++;
            compscordisp.textContent = ply;
            break;
    }
}