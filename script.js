// Hello Typewriter
const hello = document.getElementById("hello");
const speed = 1000;

const greetings = [
  "Hello World",
  "Salut Monde",
  "Hola Mundo",
  "Hallo Welt",
  "Ciao Mondo",
  "こんにちは世界",
].reduce((acc, curr) => {
  for (let i = 1; i <= curr.length; i++) {
    acc.push(curr.slice(0, i));
  }
  acc.push(curr);
  acc.push(curr);
  acc.push(curr);
  return acc;
}, []);

let typewriterIndex = 0;
function typewriter() {
  hello.innerText = greetings[typewriterIndex];
  typewriterIndex = (typewriterIndex + 1) % greetings.length;
}

setInterval(typewriter, 200);

// Menu Trigger
const menuTrigger = document.getElementById("collapsible-menu-trigger");
const menuContent = document.getElementById("collapsible-menu-content");
const menuLinks = menuContent.querySelectorAll("a");

function toggleMenu() {
  console.log("click");
  if (menuContent.classList.contains("hidden")) {
    menuContent.classList.remove("hidden");
  } else {
    menuContent.classList.add("hidden");
  }
}

menuTrigger.addEventListener("click", toggleMenu);
menuLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});
