let appendseconds = document.getElementById("sec");
let appendmilisec = document.getElementById("milisec");
let counting = 1;
let Interval_timer;
let score = 0;
let sec = 8;

function start() {
  setPreview();
  timer();
}

function timer() {
  let sec = calcSec()-1;
  let milisec = 99;
  Interval_timer = setInterval(() => {
    milisec--;
    if(milisec >= 0) appendmilisec.textContent = twoDigits(milisec);
    if (milisec < 0) {
      milisec = 99;
      sec--;
      appendseconds.textContent = "0" + sec;
    }
    if (sec < 0) {
      clearTimer();
      stopTimer();
      alert(`round${counting}은(는) 실패입니다.`);
      return;
    }
  }, 10);
}

// 한 자리수면 앞에 0 붙여서 return
function twoDigits(init){
  return init > 9 ? init : "0" + init;
}

function stopTimer() {
    let sec = calcSec();
    clearInterval(Interval_timer);
    resetTimer();
    showTimer();
    milisec = 99;
    sec -= 2;
    if (counting < 3) nextRound();
    else endGame();
}

function clearTimer() {
    appendmilisec.textContent = "00";
    appendseconds.textContent = "00";
}

function resetTimer() {
  appendmilisec.textContent = "";
  appendseconds.textContent = "";
}

function showTimer(){
  let sec = calcSec();
  milisec = 0;
  appendseconds.textContent = twoDigits(sec);
  appendmilisec.textContent = twoDigits(milisec);
}

function clearText(){
  document.getElementById("preview").value = "";
  document.getElementById("answer").value = "";
}

function updateRound() {
  let round = document.getElementById("round");
  round.textContent = "round" + counting;
}

function endGame() {
  alert("모든 게임을 완료하였습니다.");
  round.textContent = "게임종료";
  alert(`당신의 점수는 ${score}점 입니다.`);
  clearTimer();
  document.getElementById("preview").value = "게임종료";
  document.getElementById("answer").value = "게임종료";
  location.reload();
}

function nextRound() {
  if (counting > 3) endGame();
  counting++;
  updateRound();
  showTimer();
  clearText();
  start();
}

function calcSec(){
  return 10 - counting * 2;
}

function setPreview() {
    let preview = document.getElementById("preview");
    if (counting === 1) preview.value = "1렙";
    else if (counting === 2) preview.value = "2렙";
    else if (counting === 3) preview.value = "3렙";
}

function checkEnter(event) {
    // 13 = enterkey
    if(event.keyCode !== 13) return;
    answer = document.getElementById("answer").value;
    preview = document.getElementById("preview").value;
    if (answer === preview) {
      alert(`round${counting}은(는) 성공입니다.`);
      score++;
      stopTimer();
      return;
    }
  alert("일치하지 않습니다.");
  return;
}