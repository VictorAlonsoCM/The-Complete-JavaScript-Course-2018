/*
YOUR 3 CHALLENGES
Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, winnerScore;

//This is for initializing the game
init();

var lastDice;

// Animating the dice with the button btn-roll
document.querySelector('.btn-roll').addEventListener('click', () => {
    // This an Anonymous Function and a Callback that will be called when the button were pressed
    if(gamePlaying){
        //1. Random number
        var dice1 = Math.floor(Math.random()*6)+1;
        var dice2 = Math.floor(Math.random()*6)+1;
        //2. Display the result
        var diceDOM = document.querySelector('.dice');
        document.getElementById('dice1').style.display = 'block';
        document.getElementById('dice2').style.display = 'block';
        document.getElementById('dice1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice2').src = 'dice-' + dice2 + '.png';
        //3. Update the round score IF the rolled number was NOT a 1
        /*
        if(dice === 6 && lastDice === 6){
          //Player looses score
          scores[activePlayer] = 0;
          document.querySelector('#score-' + activePlayer).textContent = '0';
          nextPlayer();
        }else if(dice !== 1){
          //Add score
          roundScore += dice;
          document.querySelector("#current-" + activePlayer).textContent = roundScore;
        }else{
          nextPlayer();
        }
        lastDice = dice;
        */
       if(dice1 !== 1 && dice2 != 1){
            //Add score
            roundScore += dice1;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        }else{
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', () =>{
    
    if(gamePlaying){
        //Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        var input = document.querySelector('.final-score').value;
        var winnerScore;

        if(input){
            winnerScore = input;
        }else{
            winnerScore = 100
        }

        // Check if payer won the game
        if(scores[activePlayer] >= winnerScore){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('#dice1').style.display = 'none';
            document.querySelector('#dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }else{
            //Next player
            nextPlayer();
        }
    }
});

function nextPlayer(){
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    //We reset the current score of the current player
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //Remove the active class and add it to the panel of the player-1
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    /*
      The better way to do this is with the class toggle, the if the class is there
      then it will be removed or it will be added
    */
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //This is for hiding the dice when the player change
    document.querySelector('#dice1').style.display = 'none';
    document.querySelector('#dice2').style.display = 'none';
};


//Button new
document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    //winnerScore = prompt('Write the score to win: ', 100);
    //This just write everything as a string
    //document.querySelector('#current-' + activePlayer).textContent = dice;
    //This is for write HTML code in the DOM.
    //document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

    //This is just to read the content of elements from the DOM
    //var x = document.querySelector('#score-0').textContent;
    //console.log(x);

    document.querySelector('#dice1').style.display = 'none';
    document.querySelector('#dice2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
};