//this function get a random choice for cuomputer
//using math.random()f function

function getComputerChoice(){

    const comChoices= ((Math.random())*10).toFixed(0);

        if (comChoices <= 3){
        return("ROCK");
        }else if (comChoices >3 && comChoices <=6){
        return("PAPER");
        }else {
        return("SCISSOR");
        }
}

const win = "WON";
const lost = "LOST";
const tie = "TIE";

//this function calls computer choice and your choice

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection ==="ROCK" && computerSelection==="ROCK"){
        return(tie);
    }else if(playerSelection==="ROCK" && computerSelection==="PAPER"){
        return(lost);
    }else if(playerSelection==="ROCK" && computerSelection==="SCISSOR") {
        return(win);
    }
    else if (playerSelection==="PAPER" && computerSelection==="ROCK"){
        return(win)
    }else if(playerSelection==="PAPER" && computerSelection==="PAPER"){
        return(tie)
    }else if(playerSelection==="PAPER" && computerSelection==="SCISSOR"){
        return(lost)
    }
    else if(playerSelection==="SCISSOR" && computerSelection==="ROCK"){
    return(lost)
    }else if(playerSelection==="SCISSOR" && computerSelection==="PAPER"){
        return(win)
    }else if(playerSelection==="SCISSOR" && computerSelection==="SCISSOR"){
        return(tie)}

        else{
            return("WRONG ENTRY, ENTER CORRECT OPTION")
        }
    
}

let numYouWon = 0;
let numYouLost = 0;

function game(){
    for(i = 1 ; i<=5 ; i++){
        let playerSelection = prompt("ROCK PAPER SCISSOR").toUpperCase();
        let computerSelection = getComputerChoice();

        console.log(`YOU : ${playerSelection}`)
        console.log(`COMPUTER : ${computerSelection}`)

        console.log(playRound(playerSelection, computerSelection));

        if(playRound(playerSelection,computerSelection)==="WON"){
            numYouWon++;
        }else if (playRound(playerSelection,computerSelection)==="LOST"){
            numYouLost++;
        }
    }

       if (numYouWon > numYouLost){
            console.log(`YOU WON ; you = ${numYouWon} computer = ${numYouLost}`)
        }else if (numYouWon<numYouLost){
            console.log(`COMPUTER WON; you = ${numYouWon} computer = ${numYouLost}`)
        }else if(numYouLost ==numYouWon){
        console.log(`It's a tie; you = ${numYouWon} computer = ${numYouLost}`)
        } 
      
    }
game();



