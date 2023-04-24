const answer = "JIAAM";
const input = document.querySelectorAll('.input');
let trial = 1;
let answer_check = 0;

function submitAnswer(){
    checkAnswer();
    nextRound();
}

function checkAnswer(){
    for(let i=0; i<5; i++){
        if(input[i].value == ''){
            input[i].style.background = 'gray';
        }
        else if(input[i].value === answer[i]){
            input[i].style.background = 'green';
            answer_check++;
        }
        else if(answer.includes(input[i].value)){
            input[i].style.background = 'yellow';
        }
        else{
            input[i].style.background = 'gray';
        }
    }
}

function nextRound(){
    if (answer_check === 5){
        alert('정답입니다!');
        location.reload();
    }
    trial++;
    if(trial > 5){
        alert("갈!");
        location.reload();
    }
}