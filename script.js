'use strict';
// console.log(document.getElementsByClassName('message')[0].textContent);

// document.querySelector('.score').textContent = '10';
// document.querySelector('.guess').value = 10;


//...Defining secret number
let secret = Math.trunc(Math.random() * 20) + 1;

//...Defining score
let score = 20;  //(coz it will be updated)

//...Defining highscore
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

//...Check button
document.querySelector('.check').addEventListener("click", function () {
    const guess = Number((document.querySelector('.guess').value));
    console.log(guess, typeof guess);

    //...When there is no input
    if (!guess) {
        displayMessage('Not a Number 😶');
    }

    //...When player wins
    else if (guess === secret) {
        displayMessage('Correct Number! 😀');

        document.querySelector('.number').textContent = secret;
        document.querySelector('body').style.backgroundColor = '#1eb367';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }
    }

    // //...When guess is high
    // else if (guess > secret) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too High!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You Lost the game!😥';
    //         document.querySelector('.score').textContent = score - 1;
    //     }
    // }
    // //...When guess is low
    // else if (guess < secret) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too Low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You Lost the game!😥';
    //         document.querySelector('.score').textContent = score - 1;
    //     }
    // }

    //...When guess is different
    else if (guess !== secret) {
        if (score > 1) {
            displayMessage(guess > secret ? '📈 Too High!' : '📉 Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You Lost the game!😥');
            document.querySelector('.score').textContent = score - 1;
        }
    }
});

//...Again button
document.querySelector('.again').addEventListener("click", function () {
    secret = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';

});
