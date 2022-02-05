const hello = document.getElementById("hello");
const speed = 1000;
let u = 0;

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
console.log(greetings);

let typewriterIndex = 0;
function typewriter() {
  hello.innerText = greetings[typewriterIndex];
  typewriterIndex = (typewriterIndex + 1) % greetings.length;
}

setInterval(typewriter, 200);
