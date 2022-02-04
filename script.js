const greetings = ["Hello World", "Salut Monde", "Hola Mundo", "Hallo Welt", "Ciao Mondo", "こんにちは世界"];
const hello = document.getElementById("hello");
const speed = 1000;
let u = 0;
greetings.forEach((greeting, i) => {
    console.log(greeting);
    // setTimeout(() => {
    //     // hello.innerHTML = greeting;
    // }, i * 3000);
    setTimeout(typeWriter(greeting), i * 3000);
});



// document.addEventListener("scroll", checkView);

// function checkView(){

//     const domRect = hello.getBoundingClientRect();

//     if(domRect.bottom > 0 && domRect.top < window.innerHeight ) {

//         console.log("I'm here");
//         typeLang();

//     } else {

//         console.log("it's out of my control");
//     }
// };