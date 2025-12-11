import Bonhomme from "./bonhomme";

const board = document.getElementById("monCanvas");
 

const actor = new Bonhomme (1500, 0, "ArrowLeft", "ArrowRight");
actor.ajouter(board);


setInterval(boucleDeJeu, 10);
function boucleDeJeu(){
    actor.update();
}