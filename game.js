// //Rock, paper and scissors game

// function getComputerChoice() {
//     const random = Math.random();
//     if (random < 0.33){
//         return"rock";
//     }else if (random < 0.66){
//         return "paper";
//     }else {
//         return "scissors";
//     }
// }
// function getHumanChoice() {
//     return prompt("rock, paper, or scissors?").toLowerCase();
// }


// function playGame() {
//     humanScore = 0;
// computerScore = 0;
// function playRound(humanChoice, computerChoice) {
//     humanChoice = getHumanChoice();
//     computerChoice = getComputerChoice();
//     if (humanChoice === computerChoice) {
//         return "It's a tie!";
//     } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
//                (humanChoice === "paper" && computerChoice === "rock") ||
//                (humanChoice === "scissors" && computerChoice === "paper")) {
//          humanScore++;
//         return "You win this round!";
        
//     } else {
//         computerScore++;
//         return "You lose this round! ";
//     }
// }
// const round1 = playRound();
// const round2 = playRound();
// const round3 = playRound();
// const round4 = playRound();
// const round5 = playRound();
// }





// --- BOX 1: THE INPUTS ---
// These functions just "get" the data and give it back.

function getComputerChoice() {
    let random = Math.random();
    if (random < 0.33) return "rock";
    if (random < 0.66) return "paper";
    return "scissors";
}

function getHumanChoice() {
    return prompt("Choose: rock, paper, or scissors").toLowerCase();
}

                                
function determineWinner(human, computer) {
    if (human === computer) {
        return "tie";
    } 
    
    if ((human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")) {
        return "human";
    } 
    
    return "computer";
}


function playGame() {
    // Setup Scoreboard (State)
    let humanScore = 0;
    let computerScore = 0;

    // Play Round 1
    let h1 = getHumanChoice();
    let c1 = getComputerChoice();
    let result1 = determineWinner(h1, c1);
    
    if (result1 === "human") humanScore++;
    if (result1 === "computer") computerScore++;
    console.log("Round 1: " + result1 + ". Score: " + humanScore + "-" + computerScore);

    // Play Round 2
    let h2 = getHumanChoice();
    let c2 = getComputerChoice();
    let result2 = determineWinner(h2, c2);
    
    if (result2 === "human") humanScore++;
    if (result2 === "computer") computerScore++;
    console.log("Round 2: " + result2 + ". Score: " + humanScore + "-" + computerScore);
    // play Round 3
    let h3 = getHumanChoice();
    let c3 = getComputerChoice();
    let result3 = determineWinner(h3, c3);

    if (result3 === "human") humanScore++;
    if (result3 === "computer") computerScore++;
    console.log("Round 3: " + result3 + ". Score: " + humanScore + "-" + computerScore);

    // Play Round 4
    let h4 = getHumanChoice();
    let c4 = getComputerChoice();
    let result4 = determineWinner(h4, c4);

    if (result4 === "human") humanScore++;
    if (result4 === "computer") computerScore++;
    console.log("Round 4: " + result4 + ". Score: " + humanScore + "-" + computerScore);

    // Play Round 5
    let h5 = getHumanChoice();
    let c5 = getComputerChoice();
    let result5 = determineWinner(h5, c5);

    if (result5 === "human") humanScore++;
    if (result5 === "computer") computerScore++;
    console.log("Round 5: " + result5 + ". Score: " + humanScore + "-" + computerScore);

    // 4. Final Result
    console.log("FINAL SCORE: You " + humanScore + " | Computer " + computerScore);
}

// Start the game
playGame();

