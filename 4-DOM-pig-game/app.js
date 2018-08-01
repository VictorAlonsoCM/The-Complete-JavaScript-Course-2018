/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePayer, dice;

scores = [0,0];
roundScore = [0,0];
activePayer = 0;

dice = Math.floor(Math.random()*6)+1;

//This just write everything as a string
document.querySelector('#current-' + activePayer).textContent = dice;
//This is for write HTML code in the DOM.
//document.querySelector('#current-' + activePayer).innerHTML = '<em>' + dice + '</em>';

//This is just to read the content of elements from the DOM
var x = document.querySelector('#score-0').textContent;
console.log(x);

document.querySelector('.dice').style.display = 'none';