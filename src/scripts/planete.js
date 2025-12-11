// document.addEventListener("mousemove", (e)=>{
// console.log(e)

// })


export default (() => {
/*-------------------------------------------------Lorenzo-----------------------------------------------------------*/
/*--------------------------------------------- Mercure ------------------------------------------- */
    const mercure = document.querySelector(".mercure");
    
    mercure.addEventListener("mouseover", (event) => {
        mercure.querySelector("img").src="Planetes/PlanetesHover/MercureHover.png"
    })

    mercure.addEventListener("mouseout", (event) => {
        mercure.querySelector("img").src="Planetes/Mercure.png"
    })

    
    // const infoMercure = document.createElement('div');
    //     infoMercure.className = "infoMercure";

    mercure.addEventListener("click", (event) => {
        

        // infoMercure.document.createElement('div');
        // infoMercure.classList.add('infoMercure');
    })
   

/*-------------------------------------------- Mercure ---------------------------------------------- */
/*--------------------------------------------- Venus ----------------------------------------------- */
    const venus = document.querySelector(".venus");

    venus.addEventListener("mouseover", (event) => {
        venus.querySelector("img").src="Planetes/PlanetesHover/VenusHover.png"
    })

    venus.addEventListener("mouseout", (event) => {
        venus.querySelector("img").src="Planetes/Venus.png"
    }) 
/*---------------------------------------------- Venus ----------------------------------------------- */
/*---------------------------------------------- Terre ----------------------------------------------- */
    const terre = document.querySelector(".terre");
    
    terre.addEventListener("mouseover", (event) => {
        terre.querySelector("img").src="Planetes/PlanetesHover/TerreHover.png"
    })

    terre.addEventListener("mouseout", (event) => {
        terre.querySelector("img").src="Planetes/Terre.png"
    })
/*---------------------------------------------- Terre ----------------------------------------------- */
/*----------------------------------------------- Mars ----------------------------------------------- */
    const mars = document.querySelector(".mars");
    
    mars.addEventListener("mouseover", (event) => {
        mars.querySelector("img").src="Planetes/PlanetesHover/MarsHover.png"
    })

    mars.addEventListener("mouseout", (event) => {
        mars.querySelector("img").src="Planetes/Mars.png"
    })
/*----------------------------------------------- Mars ----------------------------------------------- */
/*--------------------------------------------- Jupiter ---------------------------------------------- */
    const jupiter = document.querySelector(".jupiter");
    
    jupiter.addEventListener("mouseover", (event) => {
        jupiter.querySelector("img").src="Planetes/PlanetesHover/JupiterHover.png"
    })

    jupiter.addEventListener("mouseout", (event) => {
        jupiter.querySelector("img").src="Planetes/Jupiter.png"
    })
/*--------------------------------------------- Jupiter ---------------------------------------------- */
/*--------------------------------------------- Saturne ---------------------------------------------- */
    const saturne = document.querySelector(".saturne");
    
    saturne.addEventListener("mouseover", (event) => {
        saturne.querySelector("img").src="Planetes/PlanetesHover/SaturneHover.png"
    })

    saturne.addEventListener("mouseout", (event) => {
        saturne.querySelector("img").src="Planetes/Saturne.png"
    })
/*--------------------------------------------- Saturne ---------------------------------------------- */
/*---------------------------------------------- Uranus ---------------------------------------------- */
    const uranus = document.querySelector(".uranus");
    
    uranus.addEventListener("mouseover", (event) => {
        uranus.querySelector("img").src="Planetes/PlanetesHover/UranusHover.png"
    })

    uranus.addEventListener("mouseout", (event) => {
        uranus.querySelector("img").src="Planetes/Uranus.png"
    })
/*---------------------------------------------- Uranus ---------------------------------------------- */
/*--------------------------------------------- Neptune ---------------------------------------------- */
    const neptune = document.querySelector(".neptune");
    
    neptune.addEventListener("mouseover", (event) => {
        neptune.querySelector("img").src="Planetes/PlanetesHover/NeptuneHover.png"
    })

    neptune.addEventListener("mouseout", (event) => {
        neptune.querySelector("img").src="Planetes/Neptune.png"
    })
/*--------------------------------------------- Neptune ---------------------------------------------- */
/*---------------------------------------------- Pluton ---------------------------------------------- */
    const pluton = document.querySelector(".pluton");
    
    pluton.addEventListener("mouseover", (event) => {
        pluton.querySelector("img").src="Planetes/PlanetesHover/PlutonHover.png"
    })

    pluton.addEventListener("mouseout", (event) => {
        pluton.querySelector("img").src="Planetes/Pluton.png"
    })
/*---------------------------------------------- Pluton ---------------------------------------------- */
/*-------------------------------------------------Lorenzo-----------------------------------------------------------*/
    const soleil = document.querySelector(".soleil");
    
    soleil.addEventListener("mouseover", (event) => {
        soleil.querySelector("img").src="Planetes/PlanetesHover/Soleil2.png"
    })

    soleil.addEventListener("mouseout", (event) => {
        soleil.querySelector("img").src="Planetes/Soleil1.png"
    })
})();
