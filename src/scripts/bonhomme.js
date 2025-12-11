let bonhomme = new Image();
bonhomme.src = "Bonhomme_Immobile.png";

export default class Actor{
    constructor(x, y, sX, sY){
        this.x = x;
        this.y = y;
        this.speedX = sX;
        this.speedY = sY;

    }

    display(ctx){
        ctx.drawImage(bonhomme, this.x, this.y);
    }

    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }  
}