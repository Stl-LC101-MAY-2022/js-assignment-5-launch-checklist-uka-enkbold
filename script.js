// const {validateInput, formSubmission, pickPlanet} = require("./scriptHelper.js");

// const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

// Write your JavaScript code here!


// const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets ;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()

   let  listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (listedPlanetsResponse) {
       listedPlanets = listedPlanetsResponse;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets)
       let planet = pickPlanet(listedPlanets);
       const missionTarget = this.document.getElementById("missionTarget")
       addDestinationInfo(missionTarget, planet.name, planet.diameter,planet.star, planet.distance,planet.moons, planet.image);


    //    let name = planet.name
    //    let diameter = planet.diameter
    //    let  star = planet.star
    //    let distance = planet.distance
    //    let moons = planet.moons
    //    let imageUrl = planet.image 

    //    addDestinationInfo(
    //     document,
    //     name,
    //     diameter,
    //     star,
    //     distance,
    //     moons,
    //     imageUrl
    //   );
    })  

       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        // const pilot = document.getElementById("pilotName").value;
        // const copilot = document.getElementById("copilotName").value;
        // const fuelLevel = document.getElementById("fuelLevel").value;
        // const cargoLevel = document.getElementById("cargoLevel").value;
        // let list = document.getElementById('faultyItems');

        let form = document.querySelector('form');

   form.addEventListener('submit', function(event){
    event.preventDefault();
    let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById("faultyItems");  
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
   }); 
});