// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let html = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">
   `
   document.getElementById('missionTarget').innerHTML = html;
}

function validateInput(testInput) {
    if (testInput === "" ){
        return "Empty"
    }
    else if(isNaN(testInput)){
         return "Not a Number"
    }
    else (!isNaN(testInput))
     {
   return "Is a Number"
     }
}

console.log(validateInput(''));
    
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    console.log(validateInput(pilot.value));
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    let launchStatus = document.getElementById('launchStatus');
    
    if(validateInput(pilot.value)=="empty"|| 
     validateInput(copilot.value)=="empty"||
     validateInput(fuelLevel.value)=="empty"||
     validateInput(cargoLevel.value)=="empty")
   {
    alert("all fields are required")
   } 
    else if(validateInput(pilot.value)!=="NotaNumber"|| 
    validateInput(copilot.value)!=="NotaNumber") {
        alert ("please enter the pilot name and the copilet name")
    }
    if(validateInput(fuelLevel.value)!== "Is a Number" || 
    (validateInput(cargoLevel.value)!== "Is a Number")) {
        alert ("please enter number")
    } else {  
    pilotStatus.innerHTML = `Pilot ${pilot} is ready`
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready`
    if (fuelLevel<10000){
        list.style.visibility ='visible';
        launchStatus.innerHTML ="Shuttle not ready for launch"
        fuelStatus.innerHTML = "Fuel level is too low"
        launchStatus.style.color = 'rgb(199, 37, 78)'
    } 
    if  (cargoLevel > 10000){
        launchStatus.innerHTML ="Shuttle not ready for launch"
        launchStatus.style.color = 'rgb(199, 37, 78)'
    }
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let i = Math.floor(Math.random() *planets.length +1)
    return planets[i]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

