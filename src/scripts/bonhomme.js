//--------------fait par Xavier---------//
let bonhomme = new Image();
bonhomme.src = "Bonhomme_Immobile.png";

export default class Bonhomme{
    constructor(x, y, kL, kR){
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.keyLeft = kL;
        this.keyRight = kR;

        this.rightPress = false;
        this.leftPress = false;

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
                this.leftPress = true;
                this.rightPress = false;
            } else if (e.key === this.keyRight){
                this.rightPress = true;
                this.leftPress = false;
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

        if(this.leftPress) {
            this.speedX = -12;
        } else if (this.rightPress) {
            this.speedX = 15;
        }

        this.x += this.speedX;
        this.img.style.left = this.x + "px";
    }  
}
//--------------fait par Xavier---------//