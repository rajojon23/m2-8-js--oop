// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

// B) Make Boots wait 20 minutes and call then console.log(boots);
class Cat {
  constructor(name, breed) {
  	this.name = name;
  	this.breed = breed;
    this.species = 'Cat';
    this.tiredness = 10;
    this.hunger = 20;
    this.loneliness =10;
    this.happiness =35;
  }

  sleep = (hours) => {
  	this.tiredness = this.tiredness - 5*hours;
  	this.happiness = this.happiness + hours/2;
  };

  eat = (kibbles) => {
  	this.tiredness = this.tiredness - kibbles/5;
  	this.happiness = this.happiness + kibbles/3;
  };

  play = (minutes) => {
  	this.loneliness = this.loneliness - 3*minutes;
  	this.happiness = this.happiness + minutes/4;
  };

  wait = (minutes) => {
  	this.loneliness = this.loneliness + minutes/2;
  	this.tiredness = this.tiredness + minutes/5;
  	this.hunger = this.hunger + minutes*2;	
  }
}

let boots = new Cat("Boots", "Siamese");
boots.wait(10);


console.log(boots);