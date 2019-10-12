/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid. Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
// Build next Constructor
function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
}
// Methods for this Constructor
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
// Build next Constructor
function CharacterStats(charAttrs) {
  GameObject.call(this, charAttrs);
  this.healthPoints = charAttrs.healthPoints;
};
// Inheritance
CharacterStats.prototype = Object.create(GameObject.prototype);

// Methods for this Constructor
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};
/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

// Build Next Constructor
function Humanoid(humanAttrs) {
  CharacterStats.call(this, humanAttrs);
  this.team = humanAttrs.team;
  this.weapons = humanAttrs.weapons;
  this.language = humanAttrs.language;
}
// Inheritance
Humanoid.prototype = Object.create(CharacterStats.prototype);

//Humanoid  Methods Here
Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}.`;
};

// STRETCH TASK
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

// New Constructor
function Villain(villainAttrs) {
  Humanoid.call(this, villainAttrs);
  this.badBreath = villainAttrs.badBreath;
  this.opponentHealth = villainAttrs.opponentHealth;
}
// Inherit
Villain.prototype = Object.create(Humanoid.prototype);

// Method
Villain.prototype.evilLaugh = function () {
  return `The villain ${this.name} lets out an evil laugh and says "You will fail because I have ${this.weapons}!"`;
};

// New Constructor
function Hero(heroAttrs) {
  Humanoid.call(this, heroAttrs);
  this.goodLooks = heroAttrs.goodLooks;
  this.opponentHealth = heroAttrs.opponentHealth;
}
//Inherit
Hero.prototype = Object.create(Humanoid.prototype);

// Methods
Hero.prototype.codeHard = function () {
  this.opponentHealth -= 1;
  return `The hero ${this.name} codes hard.`;
}
Hero.prototype.workHard = function () {
  this.opponentHealth -= 5;
  return `The hero ${this.name} works hard.`;
}

Hero.prototype.victory = function () {
  this.opponentHealth -= 10;
  return `The hero learns to code using her weapons ${this.weapons}... defeats the villain.`;
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid -> Villain & Hero
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/
// Test you work by un-commenting these 3 objects and the list of console logs below:
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const villain = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 2,
      height: 4,
    },
    healthPoints: 20,
    name: 'Brutal',
    team: 'Hell',
    weapons: [
      'fire',
      'low self-esteem'
    ],
    language: 'Devil Tongue',
    badBreath: 'funky breath',
    opponentHealth: 10
  });

  const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 4,
      width: 3,
      height: 5,
    },
    healthPoints: 20,
    name: 'Cat',
    team: 'Forest Kingdom',
    weapons: [
      'Giant Sword',
      ' Shield',
      ' Dragons',
      ' grit' 
    ],
    language: 'JavaScript',
    opponentHealth: 10,
  });

// console.log(mage.createdAt); // Today's date
// console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
// console.log(swordsman.healthPoints); // 15
// console.log(mage.name); // Bruce
// console.log(swordsman.team); // The Round Table
// console.log(mage.weapons); // Staff of Shamalama
// console.log(archer.language); // Elvish
// console.log(archer.greet()); // Lilith offers a greeting in Elvish.
// console.log(mage.takeDamage()); // Bruce took damage.
// console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

console.log("A new battle is about to begin!");
// console.log(`The match ${hero.name} vs ${villain.name} has begun.`);
// console.log(`The villain has the following weapons: ${villain.weapons} `);
//console.log(`The hero has the following weapons ${hero.weapons} `);
// console.log(`The villain has the following extra attribute: ${villain.badBreath} `);
// console.log(`The villain speaks the following language: ${villain.language} `);
// console.log(`The hero speaks the following language: ${hero.language} `);
// console.log(villain.evilLaugh());
// console.log(`${hero.name} has been reduced, ${hero.name} now has ${villain.opponentHealth} less health points.`);
// console.log(hero.codeHard());
// console.log(`${villain.name} has been reduced, ${villain.name} now has ${hero.opponentHealth} less health points`);
// console.log(hero.victory());
// console.log(`${villain.name} has been reduced ${hero.opponentHealth} health points, now only has ${hero.opponentHealth} hp.`)
console.log(`${hero.name} WINS AND GETS A NEW JOB WITH HIGHER PAY!`)