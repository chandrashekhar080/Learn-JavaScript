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