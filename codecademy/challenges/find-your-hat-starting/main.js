const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";
const hatSpot = 1;

const options = [hole, fieldCharacter, hat];

const generateRandIndex = (array) => Math.floor(Math.random() * array.length);

const isHat = (element) => element === hat;
const isHole = (element) => element === hole;

const noHats = (field) => {
  let noHats = true;
  for (let i = 2; i < field.length; i++) {
    if (field[i].some((item) => item === "^")) {
      noHats = false;
    }
  }

  return noHats;
};

const countFieldCharacters = (field) => {
  return field
    .map((line) => {
      let tempArr = line.filter((item) => item === fieldCharacter).join("");
      return tempArr;
    })
    .join("").length;
};

const countHoles = (field) => {
  return field
    .map((line) => {
      let tempArr = line.filter((item) => item === hole).join("");
      return tempArr;
    })
    .join("").length;
};

const percentOfHoles = (field) => {
  const fieldCharacters = countFieldCharacters(field);
  const holes = countHoles(field);

  return Math.round((holes / fieldCharacters) * 100);
};

const isValidField = (field, percent) => {
  return noHats(field) === false && percentOfHoles(field) <= percent
    ? false
    : true;
};

const generateMaxCharacters = (width, height, percentOfHoles) => {
  const availableSpots = width * height - hatSpot;

  const numOfCharacters = Math.round(
    availableSpots * (1 - percentOfHoles / 100)
  );

  const finalArr = [];
  for (let i = 0; i < numOfCharacters; i++) {
    finalArr.push(fieldCharacter);
  }

  return finalArr;
};

const generateMaxHoles = (width, height, percentOfHoles) => {
  const availableSpots = width * height - hatSpot;

  const numOfCharacters = Math.round(availableSpots * (percentOfHoles / 100));

  const finalArr = [];
  for (let i = 0; i < numOfCharacters; i++) {
    finalArr.push(hole);
  }

  return finalArr;
};

class Field {
  constructor(field = [[]]) {
    this.field = field;
    this.locationX = 0;
    this.locationY = 0;
    // Set the "home" position before the game starts
    this.field[0][0] = pathCharacter;
  }

  runGame() {
    let playing = true;
    while (playing) {
      this.print();
      this.askQuestion();
      if (!this.isInBounds()) {
        console.log("Out of bounds instruction!");
        playing = false;
        break;
      } else if (this.isHole()) {
        console.log("Sorry, you fell down a hole!");
        playing = false;
        break;
      } else if (this.isHat()) {
        console.log("Congrats, you found your hat!");
        playing = false;
        break;
      }
      // Update the current location on the map
      this.field[this.locationY][this.locationX] = pathCharacter;
    }
  }

  askQuestion() {
    const answer = prompt("Which way? ").toUpperCase();
    switch (answer) {
      case "U":
        this.locationY -= 1;
        break;
      case "D":
        this.locationY += 1;
        break;
      case "L":
        this.locationX -= 1;
        break;
      case "R":
        this.locationX += 1;
        break;
      default:
        console.log("Enter U, D, L or R.");
        this.askQuestion();
        break;
    }
  }

  isInBounds() {
    return (
      this.locationY >= 0 &&
      this.locationX >= 0 &&
      this.locationY < this.field.length &&
      this.locationX < this.field[0].length
    );
  }

  isHat() {
    return this.field[this.locationY][this.locationX] === hat;
  }

  isHole() {
    return this.field[this.locationY][this.locationX] === hole;
  }

  print() {
    console.log(this.field.map((line) => line.join("")).join("\n"));
  }

  static generateField(width = 4, height = 3, percent = 50) {
    if (width <= 3) return "Oops! Minium width is 4";
    if (height <= 2) return "Oops! Minium height is 3";

    var result = [];
    do {
      for (var i = 0; i < height; i++) {
        result[i] = [];
        for (var j = 0; j < width; j++) {
          let randElement = options[generateRandIndex(options)];

          while (isHat(randElement) && i <= 1) {
            randElement = options[generateRandIndex(options)];
          }

          if (isHat(randElement)) {
            options.pop();
          }

          result[i][j] = randElement;
        }
      }
      options.push(hat);
    } while (isValidField(result, percent));

    console.count("Attempts");
    return result;
  }
}

const myField = new Field(Field.generateField(4, 6, 50));
myField.runGame();
// console.log(field);
// console.log(percentOfHoles(field));
