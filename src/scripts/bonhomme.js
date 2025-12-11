let bonhomme = new Image();
bonhomme.src = "Bonhomme_Immobile.png";

export default class Actor{
    constructor(x, y, sX, kL, kR){
        this.x = x;
        this.y = y;
        this.speedX = sX;
        this.keyLeft = kL;
        this.keyRight = kR;

        this.element = document.createElement("div")

    }

    display(img){
        this.element.classList.add
    }

    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }  
}