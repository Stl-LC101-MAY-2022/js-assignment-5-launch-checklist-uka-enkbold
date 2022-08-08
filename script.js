// Write your JavaScript code here!

const { myFetch } = require("./scriptHelper");

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
   let list = document.getElementById('faultyItems');
   let form = document.querySelector('form');
   let pilot  = document.querySelector('input [name = pilotName]');
   let copilot  = document.querySelector('input [name = copilotName]');
   let fuelLevel  = document.querySelector('input [name = fuelLevel]');
   let cargoLevel  = document.querySelector('input [name = cargoMass]');
   form.addEventListener('submit', function(event){
    event.preventDefault();
    formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
   }); 
});