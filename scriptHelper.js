// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   
   document.innerHTML = `
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
}

function validateInput(testInput) {    
    if (testInput ==="") {            
        return "Empty";
    }
    if (isNaN(testInput)) {
         return "Not a Number";
    }
    if (!isNaN(testInput)) {
       return "Is a Number";
    }
}
    
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    if (validateInput(pilot) ==="Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert('All fields are required');
        
    } else if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert('Give a name');

    } else if(validateInput(fuelLevel) !== "Is a Number" || validateInput(cargoLevel) !== "Is a Number") {
        alert('Must give number!');
    }
    else {

        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready`;
        copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready`;

        let launchStatus = document.getElementById('launchStatus');

        if(fuelLevel < 10000 && cargoLevel <= 10000) {

            faultyItems.style.visibility = 'visible';
            document.getElementById('fuelStatus').innerHTML = 'Fuel level is too low for launch';
            document.getElementById('cargoLevel').innerHTML = "Cargo mass low enough for launch";
            launchStatus.innerHTML =  'Shuttle not ready for launch';
            launchStatus.style.color = 'red';
        }

        else if(cargoLevel > 10000 && fuelLevel < 10000) {

            list.style.visibility = 'visible';
            document.getElementById('cargoStatus').innerHTML = 'Cargo mass is too heavy for launch';
            document.getElementById('fuelStatus').innerHTML = 'Fuel level is too low for launch';
            launchStatus.innerHTML = 'Shuttle not ready for launch';
            launchStatus.style.color = 'red'; 
        }
    
        else {

            list.style.visibility = 'visible';
            launchStatus.style.color = 'green';
            document.getElementById('cargoStatus').innerHTML = 'Cargo mass is low enough for launch';
            document.getElementById('fuelStatus').innerHTML = 'Fuel level enough launch';
            launchStatus.innerHTML = 'Shuttle is ready for launch';
        }
    } 
}   
async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json();
        });
    return planetsReturned;
}

function pickPlanet(planets) {
    let i = Math.floor(Math.random() * planets.length)
    return planets[i];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
