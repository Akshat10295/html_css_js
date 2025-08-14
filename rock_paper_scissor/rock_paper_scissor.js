let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#computer");
const btn = document.querySelector(".reset");

btn.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = computerScore;
    msg.innerText = "Play Your Move";
});

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);// ranges from 0 to 1, if we multiply by any number between 2 to 10 eg: 3 we get 0 to 2;, eg: 10 we get 0 to 9.
    return options[randIdx];
}

const drawGame = () => {
    msg.style.backgroundColor = "#081b31";
    msg.innerText = "Its a Draw! Play again.";
}

showWinner = (userWin, userChoice, compChoice) => {
    // console.log(userWin ? "User Wins" : "Computer Wins");
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.style.backgroundColor = "green";
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    } else {
        computerScore++;
        compScorePara.innerText = computerScore;
        msg.style.backgroundColor = "red";
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        //draw
        drawGame();
    }else{
        let userWin = true;
        if(userChoice ==="rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});