// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    // if (testInput === "" ){
    //     return "Empty"
    // } else if (testInput === "asdf" || ) {
    //     return "Not a number"
    // } else {
    //     return "Is a Number"
    // }
    switch (isNaN(parseInt(testInput))) {
        case true:
            if(testInput=="")
            {
            return "Empty";
            }
            else {
                return "Not a Number";
                }
        case false:
        return "Is a Number";
        default: return "";
    }
        // alert("All fields are required!");     
     }
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let cargoMass = "";
    let ready = true; 
    if (fuelLevel < 10000) {
        ready = false;
        fuelStatus = document.getElementById('fuelStatus').innerHTML = "fuel level is too low to launch!"
    list.style.visibility = 'visible'
    // if ((typeof pilotName.value !== "string") || (typeof copilotName.value !== "string" || (typeof Number (fuelLevel.value) !== "number") || (typeof Number (cargoMass.value !== "number")))){
    //     alert("Appropriate data type is required");
    //  }
}
   else {
    document.getElementById('fuelStatus').innerHTML = "fuel level is high enough to launch!"
   } 
   if (cargoLevel > 10000){
    ready = false;
    cargoMass = document.getElementById('cargoMass').innerHTML = "Cargo mass is too heavy to launch"
    list.style.visibility = 'visible'
   } else {
    cargoMass = document.getElementById('cargoMass').innerHTML = "Cargo mass is low enough to launch"
   }
   let launchStatus = document.getElementById ('launchStatus');
   if(ready){
    launchStatus.style.color = 'rgb'
    launchStatus1.style.color = 'rgb(65, 159, 106)';
        launchStatus1.innerHTML = 'Shuttle is Ready for Launch';
        launchStatus1.style.visibility = "visible";
    } else {
        launchStatus1.style.color = 'rgb(199, 37, 78)';
        launchStatus1.innerHTML = 'Shuttle Not Ready for Launch';
   }
   document.getElementById('pilotStatus').innerHTML = `pilot ${pilot} is ready for launch` ;
   document.getElementById('copilotStatus').innerHTML = `copilot ${copilot} is ready for launch`
   document.getElementById('fuelStatus').innerHTML = `${fuelStatus}`
   document.getElementById('cargoStatus').innerHTML = `${cargoMass}`
   list.style.visibility = 'visible'
   return
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
