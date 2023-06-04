const $computer = document.querySelector('#computer');
const $scissors = document.querySelector('#scissors');
const $rock = document.querySelector('#rock');
const $paper = document.querySelector('#paper');
const $score = document.querySelector('#score');

const IMG = './rsp.png'

$computer.style.background = `url(${IMG}) 0 0 `;
$computer.style.backgroundSize = 'auto 216px';

    const rspX = {
        scissors : '-130px',
        rock : '0',
        paper : '-252px',
    };

    let comGame = 'scissors';

    const comHandChange = () =>{
        if (comGame === 'scissors'){
            comGame = 'rock';
        } else if (comGame === 'rock'){
            comGame = 'paper';
        } else if (comGame === 'paper'){
            comGame = 'scissors';
        }
        $computer.style.background = `url(${IMG}) ${rspX[comGame]} 0`;
        $computer.style.backgroundSize = 'auto 130px';

    }

    let intervalId = setInterval(comHandChange, 50);

    let clickTime = true;

    let myWin = 0;
    let comWin = 0;

    const clickBtn = () => {
        if (clickTime){
            clearInterval(intervalId);
            clickTime = false;

            const myGame = event.target.textContent === '가위' ? 'scissors'
            :  event.target.textContent === '바위' ? 'rock'
            : 'paper';

    const scoreTable = {
        scissors: 1,
        rock: 0,
        paper: -1,
    };

    const myScore = scoreTable[myGame];
    const comScore = scoreTable[comGame];
    const difference = myScore - comScore;

    if ([-1,2].includes(difference)){
        console.log('myWin');
        myWin += 1;
    } else if ([-2,1].includes(difference)){
        console.log('comWin');
        comWin += 1;
    } else{
        console.log('Draw');
    }

    if (myWin === 2){
        $score.textContent = `인간승리 ${myWin} : ${comWin}`;
    } else if (comWin === 2){
        $score.textContent = `컴퓨터승리 ${myWin} : ${comWin}`;
    } else {
        $score.textContent = `${myWin} : ${comWin}`;
        setTimeout(() => {
            clickTime = true;
            intervalId = setInterval(comHandChange, 50)
        }, 1000);
    };
};
}

    $scissors.addEventListener('click',clickBtn);
    $rock.addEventListener('click',clickBtn);
    $paper.addEventListener('click',clickBtn);