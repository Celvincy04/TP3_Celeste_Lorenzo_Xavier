// document.addEventListener("mousemove", (e)=>{
// console.log(e)

// })


export default (() => {
    const mercure = document.querySelector(".mercure");
    
    mercure.addEventListener("mouseover", (event) => {
        mercure.querySelector("img").src="Planetes/PlanetesHover/MercureHover.png"
    })

    mercure.addEventListener("mouseout", (event) => {
        mercure.querySelector("img").src="Planetes/Mercure.png"
    })


    const venus = document.querySelector(".venus");

    venus.addEventListener("mouseover", (event) => {
        venus.querySelector("img").src="Planetes/PlanetesHover/VenusHover.png"
    })

    venus.addEventListener("mouseout", (event) => {
        venus.querySelector("img").src="Planetes/Venus.png"
    }) 


    const terre = document.querySelector(".terre");
    
    terre.addEventListener("mouseover", (event) => {
    terre.querySelector("img").src="Planetes/PlanetesHover/TerreHover.png"
    })

    terre.addEventListener("mouseout", (event) => {
        terre.querySelector("img").src="Planetes/Terre.png"
    })
})();
