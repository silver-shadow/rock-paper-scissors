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

function getPlayerChoice()
{
    let flag=0;
    let playerChoice;
    while(flag===0)
    {
        playerChoice = prompt("Please enter your choice (Rock, Paper or Scissors) :");
        if (playerChoice.toLowerCase()==="rock" || playerChoice.toLowerCase()==="paper" || playerChoice.toLowerCase()==="scissors")
        {
            flag=1;
            return playerChoice.toLowerCase();
        }
        else
        {
            console.log("Invalid input\nTry again");
        }
    }
}

function playRound(playerSelection, computerSelection)
{

    if(playerSelection === computerSelection)
    {
        console.log(`You Draw! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} draws ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`);
        return;
    }
    else if(playerSelection==="paper")
    {
        if(computerSelection==="rock")
        {
            win(playerSelection,computerSelection);
            return "W";
        }
        else
        {
            lose(playerSelection,computerSelection);
            return "L";
        }
    }
    else if(playerSelection==="rock")
    {
        if(computerSelection==="scissors")
        {
            win(playerSelection,computerSelection);
            return "W";
        }
        else
        {
            lose(playerSelection,computerSelection);
            return "L";
        }
    }
    else
    {
        if(computerSelection==="paper")
        {
            win(playerSelection,computerSelection);
            return "W";
        }
        else
        {
            lose(playerSelection,computerSelection);
            return "L";
        }
    }
}

function win(pChoice,compChoice)
{
    console.log(`You Win! ${pChoice.charAt(0).toUpperCase() + pChoice.slice(1)} beats ${compChoice.charAt(0).toUpperCase() + compChoice.slice(1)}`);
    return;
}

function lose(pChoice,compChoice)
{
    console.log(`You Lose! ${compChoice.charAt(0).toUpperCase() + compChoice.slice(1)} beats ${pChoice.charAt(0).toUpperCase() + pChoice.slice(1)}`);
    return;
}

function game()
{
    let pScore=0;
    let compScore=0;
    let round; 
    for(let i=0; i<5; i++)
    {
        round = playRound(getPlayerChoice(),getComputerChoice());
        if(round==="W")
        {
            pScore++;
        }
        else if(round==="L")
        {
            compScore++;
        }
        console.log(`Player:${pScore}\tComputer:${compScore}`);
    }
    if(pScore>compScore)
    {
        console.log(`Score is ${pScore} - ${compScore} to the player\nPlayer wins!`);
    }
    else if(compScore>pScore)
    {
        console.log(`Score is ${compScore} - ${pScore} to the computer\nComputer wins!`);
    }
    else
    {
        console.log(`Score is ${pScore} - ${compScore} \nDraw`);
    }
}

game();