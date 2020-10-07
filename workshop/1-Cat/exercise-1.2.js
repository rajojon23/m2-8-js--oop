// Exercise 1.2
// ------------
// Creating a Cat class - Part 2

// A) In the previous exercise, Boots' name is not part of its object.
// Update the Cat class to accept have a name parameter and a breed parameter and
// then pass Boots' name and breed as arguments when you instantiate the boots object.
// When you are done, console.log the boots object
// and confirm that you have everything in there.

class Cat {
  constructor(name, breed) {
  	this.name = name;
  	this.breed = breed;
    this.species = 'Cat';
    this.tiredness = 0;
    this.hunger = 0;
    this.loneliness =0;
    this.happiness =0;
  }
}


// By the way, Boots is a Simaese cat...

let boots = new Cat("Boots", "Siamese");

console.log(boots);


