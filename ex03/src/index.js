var myPetsArray = ["Dog", "Cat"]

function myArrayFunction(myPets){
    var myNewPets = myPets;
    myNewPets = myPets.push("Bird", "Fish");
    var firstPet = myPets.shift();
    var lastPet = myPets.pop();
    
    
    
    myPets.unshift("Lion");
    return myPets;
}

console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;
