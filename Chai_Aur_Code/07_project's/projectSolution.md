# Project Related to DOM

// All project HTML and CSS Files Giving By Link
// All project JavaScript Files Giving only Solutions

## All projects link :=>
[click Here]copy this link:- (https://stackblitz.com/edit/mrcs08-colorchangerproject-yk1mpb?file=index.html)


# Solution Code

## Project_01

``````console.log("MrCSGhosh");
const buttons = document.querySelectorAll('.button');
//console.log(buttons);
const pageBody = document.querySelector('body');


buttons.forEach(function (button) {
 // console.log(button);
  button.addEventListener('click', function (event) {
   // console.log(event);
   // console.log(event.target);
    if (event.target.id === 'grey') {
      pageBody.style.backgroundColor = 'grey'; // event.target.id
      console.log("grey");
    }
    if (event.target.id === 'yellow') {
      pageBody.style.backgroundColor = event.target.id;
      console.log("yellow");
    }
    if (event.target.id === 'green') {
      pageBody.style.backgroundColor = 'green'; // event.target.id
      console.log("Green");

    }
    if (event.target.id === 'blue') {
      pageBody.style.backgroundColor = 'blue'; // event.target.id
      console.log("Blue");

    }
  });
});
``````
## Project_02

``````console.log("MrCSGhosh");

const form = document.querySelector('form');

//this use case gives you empty value because we use event so we want value with event
//const height = parseInt(document.querySelector('#height').value);


form.addEventListener('submit', function (e) {  //even is submit 

    e.preventDefault() //for holding a value of form


   const heights = parseInt(document.querySelector('#height').value);
   const weights = parseInt(document.querySelector('#weight').value);
   const results = document.querySelector('#result');

   if (heights === '' || heights < 0 || isNaN(heights)) {
       results.innerHTML = `Please Give a Valid Height ${heights}`;
   }  else if (weights === '' || weights < 0 || isNaN(weights)) {
       results.innerHTML = `Please Give a Valid Weights ${weights}`;
   }  else {
      const bmi = (weights/((heights*heights)/10000)).toFixed(2);
      results.innerHTML = `<span>${bmi}</span>`;
   }

});
``````
## project_03

``````
console.log('MrCSGhosh');

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

//
console.log('MrCSGhosh');

const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  let options = { hour12: true };
  clock.innerHTML = date.toLocaleTimeString([], options);
}, 1000);

``````
## Project_04

``````console.log("MrCSGhosh");

const userInput = document.querySelector('#guessinput');
const submit = document.querySelector('#sbmt');
const guessSlot = document.querySelector('#guesess');
const lastResult = document.querySelector('#lastResult');
const lowOrHigh = document.querySelector('.loworhigh') 
const startOver = document.querySelector('.result-area')

//console.log((Math.random(inputNumber) * 100 + 1).toFixed(0));
//console.log(parseInt(Math.random() * 100 + 1));
let randomNumber = parseInt(Math.random() * 100 + 1);

const p = document.createElement('p');

let preGuess = [];

let numOfGuess = 1;

let playGame = true;

if (playGame){
    submit.addEventListener('click', function (e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
       // console.log(guess);
        numValidation(guess);
    });
}
function numValidation (guess){
//check validatuon of Number
if (isNaN(guess)){
   alert('Please Enter a Valid Number');
} else if (guess < 1){
    alert('Please Enter a Number Morethen 1');
} else if (guess > 100){
    alert('Please Enter a Number lessthen 100');
} else {
    preGuess.push(guess);
    if(numOfGuess === 11){
        displayGuess(guess);
        displayMessage(`Game Over, Random Number Was : ${randomNumber}`);
        endGame();
    } else {
        displayGuess(guess);
        checkGuess(guess);
    }
}

};

function checkGuess (guess){
 //check the value of guess
 if (guess === randomNumber) {
    displayMessage('you Guessed at Right you Win');
 } else if (guess < randomNumber){ 
    displayMessage('your Guessed Number is too Low');
 } else if(guess > randomNumber){
    displayMessage('your Guessed Number is too High');
 }
};

function displayGuess(guess){
    //display the guesses
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  ,`;
  numOfGuess++;
  lastResult.innerHTML = `${11 - numOfGuess} `;
};

function displayMessage(message){
    //display the message
    lowOrHigh.innerHTML = `<h3>${message}</h3>`
};

function endGame(){
    // end of the Game
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h3 id="newgame">New Game</h3>`
    startOver.appendChild(p)
    playGame = false;
    startGame();
};

function startGame (){
  //again start a game
  const newGameButton = document.querySelector('#newgame');
  //console.log("newstart");
  newGameButton.addEventListener( 'click', function (e){
    //console.log("start");  
    randomNumber = parseInt(Math.random() * 100 + 1);
      preGuess = [];
      numOfGuess = 1;
      guessSlot.innerHTML = '';
      lastResult.innerHTML = `${11 - numOfGuess} `;
      userInput.removeAttribute('disabled')
      startOver.removeChild(p);
      //lowOrHigh.innerHTML = '';
      playGame = true;
    });
};
``````
## project 05

``````
//alert("hi");
console.log('MrCSGhosh');

const colorClass = document.querySelector('#insert');

window.addEventListener('keydown', function (e) {
  colorClass.innerHTML = `<div class="color">
    <table>
    <tr>
    <td>Key</td>
    <td>KeyCode</td>
    <td>Code</td>
    </tr>
    <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    </table>
    </div>`;
});
``````