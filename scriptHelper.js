// Write your helper functions here!
// require('isomorphic-fetch');

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
    if(testInput=="")
        {            
            return "Empty";
        }
      else if(isNaN(testInput)){
           return "Not a Number"
      }
      else (!isNaN(testInput))
       {
     return "Is a Number"
    
      }
}
    
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    console.log(validateInput(pilot))
    // console.log(pilot)
    // console.log(list[2])
  
    // list.style.visibility = 'visible';
    
    //put logic here to for valid input

    if(validateInput(pilot) == 'Empty' || validateInput(copilot) == 'Empty' || validateInput(fuelLevel) == 'Empty' || validateInput(cargoLevel) == 'Empty') {
        alert('All fields are required');
        // validate correct argument type
    }else if(validateInput(pilot) !== 'Not a Number' || validateInput(copilot) !== 'Not a Number') {
        alert('a');
    }else if(validateInput(fuelLevel) !== 'Is a Number' || validateInput(cargoLevel) !== 'Is a Number'){
        alert('b');
    }
    else{
        pilotStatus.innerHTML = `Pilot ${pilot} is ready`;
        copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready`;
    } 
    //Put logic here to display pilot name and check for fuel level and mass input
    if(fuelLevel < 10000) {
        faultyItems.style.visibility = 'visible';
        document.getElementById('fuelStatus').innerHTML = 'Fuel level is too low for launch';
        let launchStatus = document.getElementById('launchStatus').innerHTML = 'Shuttle not ready for launch';
        // launchStatus.style.color = 'red';
    }

    if(cargoLevel > 10000) {
        list.style.visibility = 'visible';
        document.getElementById('cargoStatus').innerHTML = 'Cargo mass is too heavy for launch';
        let launchStatus = document.getElementById('launchStatus').innerHTML = 'Shuttle not ready for launch';
        launchStatus.style.color = 'red';
    }

    if(fuelLevel > 10000 && cargoMass < 10000) {
        list.style.visibility = 'visible';
        let launchStatus = document.getElementById('launchStatus').innerHTML = 'Shuttle is ready for launch';
        launchStatus.style.color = 'green';
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
    missionTarget = document.getElementById('missionTarget')
    let i = Math.floor(Math.random() * planets.length +1)
    return planets[i]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

