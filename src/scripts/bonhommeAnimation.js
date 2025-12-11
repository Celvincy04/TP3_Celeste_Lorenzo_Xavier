import Actor from "./bonhomme";

let canvas = document.getElementById("monCanvas");
let ctx = canvas.getContext("2d");

export default document.addEventListener("keydown", (event) =>{
    const parcour1 =document.querySelector("animationBonhomme1");
    
})

const actor = new Actor (50, 50, 100, 100);

Object.assign(actor);

setInterval(boucleDeJeu, 10);
function boucleDeJeu(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    actor.display
}
