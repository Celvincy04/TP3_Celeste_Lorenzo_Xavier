let bonhomme = new Image();
bonhomme.src = "Bonhomme_Immobile.png";

export default class Bonhomme{
    constructor(x, y, kL, kR){
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.keyLeft = kL;
        this.keyRight = kR;

        this.element = document.createElement("img");

        this.ecouterTouches();

        this.img = bonhomme;
    }

    ajouter(conteneur){
        this.element.classList.add("bonhomme");
        this.img.src = "Bonhomme/Bonhomme_Immobile.png";
        this.img.alt = "Astronaute";

        conteneur.appendChild(this.img);
        this.img.style.left = this.x + "px";      
    }

    ecouterTouches(){
        document.addEventListener("keydown", (e) =>{
            if (e.key === this.keyLeft){
                this.speedX = -12;
            } else if (e.key === this.keyRight){
                this.speedX = 15;
            }
            console.log(e.key)
        });

        document.addEventListener("keyup", (e) =>{
            if (e.key === this.keyLeft || e.key === this.keyRight){
                this.speedX = 0;
            }
        });
    }

    update(){
        this.x += this.speedX;

        this.img.style.left = this.x + "px";
    }  
}