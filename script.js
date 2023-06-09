function getComputerChoice()
{
    let computerChoice;
    const choiceNum = Math.floor(Math.random() * 3);
    if (choiceNum===0)
    {
        computerChoice="rock";
    }
    else if(choiceNum===1)
    {
        computerChoice="paper";
    }
    else
    {
        computerChoice="scissors";
    }
    
    return computerChoice;
}

function playRound(playerSelection, computerSelection)
{

    if(playerSelection === computerSelection)
    {
        draw(playerSelection);
    }
    else if (   //win round
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
      ) {
        win(playerSelection,computerSelection);
        if(pScore===5)
        {
            final.textContent = "You Win!";
            scoreBoard.appendChild(final);
            return;
        }
      }
     else if (  //lose round
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')
      ) {
        lose(playerSelection,computerSelection);
        if(compScore===5)
        {
            final.textContent = "You Lose.\n Refresh to Try again";
            scoreBoard.appendChild(final);
            return;
        }
      }
}

function win(pChoice,compChoice)
{
    pScore++;
    const player = document.querySelector("p.player");
    player.textContent = `Player :${pScore}`;
    result.textContent = `You Win! ${pChoice.charAt(0).toUpperCase() + pChoice.slice(1)} beats 
    ${compChoice.charAt(0).toUpperCase() + compChoice.slice(1)}`;
    return;
}

function lose(pChoice,compChoice)
{
    compScore++;
    const comp = document.querySelector("p.computer");
    comp.textContent = `Computer :${compScore}`;
    result.textContent = `You Lose! ${compChoice.charAt(0).toUpperCase() + compChoice.slice(1)} beats 
    ${pChoice.charAt(0).toUpperCase() + pChoice.slice(1)}`;
    return;
}

function draw(choice)
{
    result.textContent = `You Draw! ${choice.charAt(0).toUpperCase() + choice.slice(1)} draws
    ${choice.charAt(0).toUpperCase() + choice.slice(1)}`;
    return;
}

let pScore=0;
let compScore=0;

const scoreBoard = document.querySelector('div.scoreBoard'); 
const result = document.querySelector("h3");    //result of each round
const final = document.createElement("h2");     //final result

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", () =>
    {
        playRound(button.id,getComputerChoice());
    }
));
