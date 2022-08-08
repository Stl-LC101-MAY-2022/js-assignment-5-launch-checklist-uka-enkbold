// const {validateInput, formSubmission, pickPlanet} = require("./scriptHelper.js");

// Write your JavaScript code here!


// const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets ;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()

   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })  
   let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;

   let list = document.getElementById('faultyItems');
   let form = document.querySelector('form');
   
   
   let pilotStatus = document.getElementById('pilotStatus');
   let fuelStatus = document.getElementById('fuelStatus');
   let copilotStatus = document.getElementById('copilotStatus');
   let cargoStatus = document.getElementById('cargoStatus');

   form.addEventListener('submit', function(event){
    event.preventDefault();
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
   }); 
});