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


    mercure.addEventListener("click", (event) => {
        document.querySelector(".mercureInfo").classList.toggle("mercureHidden")
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


    venus.addEventListener("click", (event) => {
        document.querySelector(".venusInfo").classList.toggle("venusHidden")
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

    
    terre.addEventListener("click", (event) => {
        document.querySelector(".terreInfo").classList.toggle("terreHidden")
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

    
    mars.addEventListener("click", (event) => {
        document.querySelector(".marsInfo").classList.toggle("marsHidden")
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

    
    jupiter.addEventListener("click", (event) => {
        document.querySelector(".jupiterInfo").classList.toggle("jupiterHidden")
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

    
    saturne.addEventListener("click", (event) => {
        document.querySelector(".saturneInfo").classList.toggle("saturneHidden")
    })
/*--------------------------------------------- Saturne -uranus-------------------------------------- */
/*---------------------------------------------- Uranus ---------------------------------------------- */
    const uranus = document.querySelector(".uranus");
    
    uranus.addEventListener("mouseover", (event) => {
        uranus.querySelector("img").src="Planetes/PlanetesHover/UranusHover.png"
    })

    uranus.addEventListener("mouseout", (event) => {
        uranus.querySelector("img").src="Planetes/Uranus.png"
    })

    
    uranus.addEventListener("click", (event) => {
        document.querySelector(".uranusInfo").classList.toggle("uranusHidden")
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

    
    neptune.addEventListener("click", (event) => {
        document.querySelector(".neptuneInfo").classList.toggle("neptuneHidden")
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

    
    pluton.addEventListener("click", (event) => {
        document.querySelector(".plutonInfo").classList.toggle("plutonHidden")
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

    
    soleil.addEventListener("click", (event) => {
        document.querySelector(".soleilInfo").classList.toggle("soleilHidden")
    })
})();
