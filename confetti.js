const confettiBtn1 = document.getElementById("confettiBtn1");
const confettiBtn2 = document.getElementById("confettiBtn2");
const confettiBtn3 = document.getElementById("confettiBtn3");
const confettiBtn4 = document.getElementById("confettiBtn4");
const confettiBtn5 = document.getElementById("confettiBtn5");
const confettiBtn6 = document.getElementById("confettiBtn6");
const confettiBtn7 = document.getElementById("confettiBtn7");
const confettiBtn8 = document.getElementById("confettiBtn8");

confettiBtn1.addEventListener("click", handleConfettiClick);
confettiBtn2.addEventListener("click", handleConfettiClick);
confettiBtn3.addEventListener("click", handleConfettiClick);
confettiBtn4.addEventListener("click", handleConfettiClick);
confettiBtn5.addEventListener("click", handleConfettiClick);
confettiBtn6.addEventListener("click", handleConfettiClick);
confettiBtn7.addEventListener("click", handleConfettiClick);
confettiBtn8.addEventListener("click", handleConfettiClick);




function handleConfettiClick() {  

    confetti.start();
    setTimeout(function () { confetti.stop(); }, 3000);
}