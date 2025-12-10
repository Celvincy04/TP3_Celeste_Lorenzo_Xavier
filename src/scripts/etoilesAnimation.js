import gsap from "gsap";


export default (()=>{
    const element = document.querySelector(".etoileFill01");

    gsap.to(element, {
        x: -2000,
        y: 2000,
        duration: 3,
        delay: 2,
        repeatDelay: 5,
        repeat: -1,


        onRepeat: () => {

        },
    })
    const element2 = document.querySelector(".etoileFill02");

    gsap.to(element2, {
        x: -2000,
        y: 1900,
        duration: 4,
        delay: 3,
        repeatDelay: 5,
        repeat: -1,


        onRepeat: () => {

        },
    })
    const element3 = document.querySelector(".etoileFill03");

    gsap.to(element3, {
        x: -2000,
        y: 1900,
        duration: 2,
        delay: 4,
        repeatDelay: 5,
        repeat: -1,


        onRepeat: () => {

        },
    })
})();
    
