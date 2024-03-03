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

