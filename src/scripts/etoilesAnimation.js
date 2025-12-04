import gsap from "gsap";


export default (()=>{
    const element = document.querySelector(".etoileFill01");

    gsap.to(element, {
        x: -400,
        y: 400,
        duration: 2,
        delay: 2,
        repeatDelay: 5,
        repeat: -1,


        onRepeat: () => {

        },
    })
})();
    
