const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const score = document.querySelector("#score");
const  result = document.querySelector("#result");

const btns = document.querySelectorAll("button");


//--------------------------------------------------------------------------

function getComputerChoice(){
    let comChoice = ["ROCK" , "PAPER" ,"SCISSOR"];
    let randomNum = Math.floor(Math.random() * comChoice.length);
    return comChoice[randomNum];
}
//-------------------------------------------------------------------------
    let playerScore =0;
    let computerScore =0;

function playround(playerSelection,computerSelection){

    if(playerSelection===computerSelection){
        result.textContent = "Its a draw";
    }else if(
        (playerSelection==="ROCK" && computerSelection==="SCISSOR") ||
        (playerSelection==="PAPER" && computerSelection==="ROCK") ||
        (playerSelection==="SCISSOR" && computerSelection==="PAPER")
    ){result.textContent="You Win";
        playerScore++;
        }else{
            result.textContent = "Computer Wins";
            computerScore++;
        }
    score.textContent = `YOU :${playerScore} | COMPUTER :${computerScore}` ;

    
    if (playerScore>=5){
        result.textContent ="Final Result = Player wins" ;
        setTimeout(()=>{
            location.reload();
            btns.disabled = true;
        },9500);
    }else if(computerScore>=5){
        result.textContent = "Final Result :Computer Wins"
        setTimeout(()=>{
            location.reload();
            btns.disabled = true;
        },9500)
    }
    
    //return `${playerSelection} | ${result.textContent} | ${playerScore} - ${computerScore}`
}
//-----------------------------------------------------------------------------------

function game(){
    btns.forEach((button) =>{
        button.addEventListener("click", (e) =>{
            const playerSelection = e.target.id 
            const computerSelection = getComputerChoice();

            player.textContent =   playerSelection ;
            computer.textContent = computerSelection ;
            playround(playerSelection,computerSelection)
        });
    });
}
game();

//-----------------------------------------------------------------------------------------