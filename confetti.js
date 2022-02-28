const skillsSection = document.body.querySelector("#mySkillsSection");
let allSectionBtns = skillsSection.querySelectorAll("button");

allSectionBtns.forEach((button) =>
  button.addEventListener("click", handleConfetti)
);

function handleConfetti() {
  confetti.start();
  setTimeout(function () {
    confetti.stop();
  }, 3000);
}
