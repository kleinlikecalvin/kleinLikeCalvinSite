const langsArray = ["Hello World", "Salut Monde", "Hola Mundo", "Hallo Welt", "Ciao Mondo", "こんにちは世界"];
// console.log(langsArray.length);
// const interval = setInterval(typeLang, 500);

// console.log(domRect);
const hello = document.getElementById("hello");

// for (var key in domRect) {
//   if(typeof domRect[key] !== 'function') {
//     let para  = `${ key } : ${ domRect[key] }`;
//     console.log(para);
//   }
// }


// hello.innerHTML = langsArray[1];
document.onscroll = checkView;

function checkView(event){
    // console.log(event);
    const section = event.target.getElementById("helloWorldSection");
    const domRect = section.getBoundingClientRect();
    console.log(domRect);
    // if(domRect.top < 100 && domRect.top > -420 ) {
    //     console.log("I'm here");
    //     // interval;
    // }else{
    //     // clearInterval(interval);
    //     console.log("it's out of my control");
    // }
};



// function typeLang() {
//     for(let i = 0; i < 6; i++) {
//         // console.log(langsArray.length);
//         // hello.classList.add("typewriter");
//         // console.log(i);
//         // console.log(hello.style.top);
//         // console.log(domRect);
//         let string = langsArray[i];
//         console.log(string);
//         // hello.innerHTML = string;
//     }
// }




// clearInterval(interval);

    // for(let i = 0; i <= langsArray.length; i++) {
    //     // console.log(hello);
    //     // hello.classList.add("typewriter");
    //     hello.innerHTML = langsArray[i];
    // }