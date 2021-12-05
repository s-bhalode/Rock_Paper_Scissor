const buttons = document.querySelectorAll('.pick');
const scoreEl = document.getElementById('scored');
const section_1 = document.getElementById('section_1');
const section_2 = document.getElementById('section_2');
const section_3 = document.getElementById('section_3');
const section_4 = document.getElementById('section_4');
const section_5 = document.getElementById('section_5');
const playAgain = document.getElementById('playAgain');
const userPicked = document.getElementById('userPicked');
const computerPicked = document.getElementById('computerPicked');
let score = 0;
let userChoice;

// For pre-loading
function preLoad(){
    setTimeout(() => {
        section_1.style.display = "none";
        section_2.style.display = "block";
        section_3.style.display = "block";
        section_5.style.display = "block";
     }, 4000);
   }

//for switching theme
let checkbox = document.querySelector('input[name=theme]');
checkbox.addEventListener('change', function(){
    if(this.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
    }
});


const choices = ['rock', 'paper', 'scissors'];

function RandomChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}
const computerChoice = RandomChoice();
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        userChoice = button.getAttribute('data-choice');
          
        checkWinner();
    });
});
function updateSelection(selected, choice){
    //updating class
    selected.classList.remove('rock');
    selected.classList.remove('paper');
    selected.classList.remove('scissors');
    
    //updating image
    selected.classList.add(choice);
    selected.querySelector('img').src = "/images/" + choice + ".png";
    section_3.style.display = "none";
    section_4.style.display = "flex";
}
function updateScore(value){
    score += value;
    scoreEl.innerHTML = score;
}

//to play again
playAgain.addEventListener('click', () => {
    section_2.style.display = "block";
    section_3.style.display = "block";
    section_4.style.display = "none";
})
function checkWinner() {
    //Updating UI
    updateSelection(userPicked, userChoice);
    updateSelection(computerPicked, computerChoice);
  
    if(userChoice === computerChoice){
        //Match draw
        document.getElementById("lose_win").innerHTML="DRAW";
    }else if((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper')){
        //User Wins
        console.log(userChoice);
        console.log(computerChoice);
        updateScore(1);
        document.getElementById('lose_win').innerHTML="WON";
    }else if((userChoice === 'rock' && computerChoice === 'paper') || (userChoice === 'scissors' && computerChoice === 'rock') || (userChoice === 'paper' && computerChoice === 'scissors')){
        //User lost
        console.log(userChoice);
        console.log(computerChoice);
        updateScore(-1);
        document.getElementById('lose_win').innerHTML="LOST";
    }
}





