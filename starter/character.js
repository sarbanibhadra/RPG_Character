class Character {
  // Just like constructor functions, classes can accept arguments
  constructor(name, strength, hitPoints) {
    this.name = name;
    this.strength = strength;
    this.hitPoints = hitPoints;
  }

  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do  ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitPoints} hit points remaining!`);
    console.log("------------");
  }


  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    if(this.hitPoints > 0) {
      return true;
    } else {
      console.log(`${this.name} has been defeated!`)
      return false;
    } 
   }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    // console.log which character was attacked and how much damage was dealt
    console.log(opponent.name + ` is attacked by ${this.name} of strength ` + this.strength)
    // Then, change the opponent's hitPoints to reflect this
    opponent.hitPoints -= this.strength;

  }
}

// Create two unique characters using the "character" class

// Create an interval that alternates attacks every 2000 milliseconds
const char1 = new Character('Doug', 15, 50);
const char2 = new Character('Butch', 10, 75);
char2.attack(char1);
char1.printStats();

const initiative1 = Math.random();
console.log("initiative1   "+initiative1)
const initiative2 = Math.random();
console.log("initiative2   "+initiative2)

let firstTurn;
if (initiative1 > initiative2) {
  firstTurn = true;
} else {
  firstTurn = false;
}
console.log(firstTurn)

const turnInterval = setInterval(() => {
  if (!char1.isAlive() || !char2.isAlive()) {
    clearInterval(turnInterval);
    console.log('Game Over!');
  } else if (firstTurn) {
    char1.attack(char2);
    char2.printStats();
    firstTurn = !firstTurn;
  } else {
    char2.attack(char1);
    char1.printStats();
    firstTurn = !firstTurn;
  }
}, 2000);
