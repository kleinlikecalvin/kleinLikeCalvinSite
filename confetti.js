const skillsSection = document.body.querySelector("#skills");
let allSectionBtns = skillsSection.querySelectorAll("button");

allSectionBtns.forEach((button) => {
  button.classList.add("button");
  button.addEventListener("click", () => {
    confetti.start();
    setTimeout(function () {
      confetti.stop();
    }, 2000);
  });
});
