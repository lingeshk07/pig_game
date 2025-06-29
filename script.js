'use strict';

let player1_score = 0;
let player2_score = 0;
let i = 0;
let point = 0;

const score1 = document.querySelector('#score--0'); 
const score2 = document.querySelector('#score--1'); 
const current1 = document.querySelector('#current--0');
const current2 = document.querySelector('#current--1');
const hold = document.querySelector('.btn--hold');
const roll = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const new_game = document.querySelector('.btn--new');
const player11= document.querySelector('.player--0');
const player22 = document.querySelector('.player--1');

const hold_point = function(){

        i%2 ===0 ?    player1_score = player1_score + point : player2_score = player2_score + point ;
        
        score1.textContent = player1_score ;
        score2.textContent = player2_score ;
        point = 0;
        i%2 ===0 ? current1.textContent = point : current2.textContent = point;
        
         if(player1_score >= 10 || player2_score >=10)
        {
            player1_score>=10 ? player11.style.backgroundColor = '#753682' : player22.style.backgroundColor = '#753682';
        }
        else{

                if(i%2 ===0)
        {
            player11.classList.remove('player--active');
            player22.classList.add('player--active');
        }
        else{
            player22.classList.remove('player--active');
            player11.classList.add('player--active');
        }

        i++;

        }
        
        
        
        }
        



const restart = function()
{
    player1_score =0;
    player2_score = 0;
    i=0;
    point =0;
    current1.textContent = point;
    current2.textContent = point;
    score1.textContent = player1_score ;
    score2.textContent = player2_score ;
}

const roll_dice = function(){
    let temp = Math.trunc(Math.random()*6+1);
    dice.src=`dice-${temp}.png`;
    console.log(temp);
    
    if(temp === 1){
        point = 0;
        i%2 ==0 ? current1.textContent = point : current2.textContent = point;
        if(i%2 ===0)
        {
            player11.classList.remove('player--active');
            player22.classList.add('player--active');
        }
        else{
            player22.classList.remove('player--active');
            player11.classList.add('player--active');
        }
        
        i++;
        
        return;
        
    }
    else{
        point = point+temp;
        i%2 ==0 ? current1.textContent = point : current2.textContent = point;
    }


    //i%2 ==0 ? current1.textContent = point : current2.textContent = point;
   

}
hold.addEventListener('click',hold_point);
roll.addEventListener('click',roll_dice);
new_game.addEventListener('click',restart);
