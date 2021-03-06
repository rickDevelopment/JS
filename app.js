const dinoObj = {
  Dinos: [
    {
      species: "Triceratops",
      weight: 13000,
      height: 114,
      diet: "herbavor",
      where: "North America",
      when: "Late Cretaceous",
      fact: "First discovered in 1889 by Othniel Charles Marsh",
      image: "./images/triceratops.png",
    },
    {
      species: "Tyrannosaurus Rex",
      weight: 11905,
      height: 144,
      diet: "carnivor",
      where: "North America",
      when: "Late Cretaceous",
      fact: "The largest known skull measures in at 5 feet long.",
      image: "./images/tyrannosaurus rex.png",
    },
    {
      species: "Anklyosaurus",
      weight: 10500,
      height: 55,
      diet: "herbavor",
      where: "North America",
      when: "Late Cretaceous",
      fact: "Anklyosaurus survived for approximately 135 million years.",
      image: "./images/anklyosaurus.png",
    },
    {
      species: "Brachiosaurus",
      weight: 70000,
      height: "372",
      diet: "herbavor",
      where: "North America",
      when: "Late Jurasic",
      fact: "An asteroid was named 9954 Brachiosaurus in 1991.",
      image: "./images/brachiosaurus.png",
    },
    {
      species: "Stegosaurus",
      weight: 11600,
      height: 79,
      diet: "herbavor",
      where: "North America, Europe, Asia",
      when: "Late Jurasic to Early Cretaceous",
      fact:
        "The Stegosaurus had between 17 and 22 seperate places and flat spines.",
      image: "./images/stegosaurus.png",
    },
    {
      species: "Elasmosaurus",
      weight: 16000,
      height: 59,
      diet: "carnivor",
      where: "North America",
      when: "Late Cretaceous",
      fact: "Elasmosaurus was a marine reptile first discovered in Kansas.",
      image: "./images/elasmosaurus.png",
    },
    {
      species: "Pteranodon",
      weight: 44,
      height: 20,
      diet: "carnivor",
      where: "North America",
      when: "Late Cretaceous",
      fact: "Actually a flying reptile, the Pteranodon is not a dinosaur.",
      image: "./images/pteranodon.png",
    },
    {
      species: "Pigeon",
      weight: 0.5,
      height: 9,
      diet: "herbavor",
      where: "World Wide",
      when: "Holocene",
      fact: "All birds are living dinosaurs.",
      image: "./images/pigeon.png",
    },
  ],
};

//get compare button
let compareButton = document.getElementById("btn");
let grid = document.getElementById("grid");

// create dino object

class Dino {
  constructor(obj) {
    (this.species = obj.species),
      (this.weight = obj.weight),
      (this.height = obj.height),
      (this.diet = obj.diet),
      (this.where = obj.where),
      (this.when = obj.when),
      (this.fact = obj.fact),
      (this.image = obj.image),
      (this.facts = [
        `${obj.fact} `,
        `${this.species} has a ${this.diet} diet.`,
        `${this.species} can grow upto ${this.height} feet tall.`,
        `${this.species} lived in ${obj.where}.`,
        `${obj.species} lived during ${obj.when} era.`,
      ]),
      (this.displayFact = function fact() {
        return this.facts[Math.floor(Math.random() * this.facts.length)];
      });
  }
  // Create Dino Compare Method 1
  dietCompare() {
    if (tileData.human.diet === this.diet) {
      return `${this.species} was a ${this.diet}. You two could share dinner.`;
    } else if (this.diet === "carnivor") {
      return `${this.species} was a ${this.diet}. Better run before you become the meal.`;
    } else if (this.diet === "herbavor") {
      return `${this.species} was a ${this.diet}. You'll have to prepare an extra salad for dinner.`;
    } else {
      return `${this.species} was a ${this.diet}. Time to suggest a potluck.`;
    }
  }
  weightCompare() {
    if (tileData.human.weight === "") {
      return `Your is 0 but a ${this.species} weighs ${this.weight} lbs.`;
    } else {
      const humanWeight = parseInt(tileData.human.weight);
      return `A ${this.species} is approximately ${Math.floor(
        this.weight / humanWeight
      )} times your current weight of ${humanWeight} lbs.`;
    }
  }
  heightCompare() {
    if (tileData.human.feet === "" || tileData.human.inches === "") {
      return `You did no enter a height but a ${this.species} stands at ${this.height} inches tall.`;
    } else {
      const humanHeight = parseInt(tileData.human.height) * 12;
      return `A ${this.species} is  ${this.height} inches tall, compared to your height of ${humanHeight} inches.`;
    }
  }
}

const tileData = {};

compareButton.addEventListener("click", function (event) {
  event.stopPropagation;
  tileData.human = createHuman();

  // add human to dino object array
  dinoObj.Dinos.splice(4, 0, tileData.human);

  tileData.dino = createDino();
  addElement();
});

// Create Dino Objects
function createDino() {
  const dinoArray = dinoObj.Dinos.map((dino) => new Dino(dino));
  //add facts to dino
  dinoArray.forEach((dino) => {
    dino.facts.push(dino.dietCompare());
    dino.facts.push(dino.weightCompare());
    dino.facts.push(dino.heightCompare());
  });
  return dinoArray;
}

// Create Human Object

function Human(obj) {
  return {
    species: "human",
    name: obj.name.value,
    weight: obj.weight.value,
    diet: obj.diet.value,
    height: obj.feet.value,
    image: "./images/human.png",
  };
}

// Use IIFE to get human data from form
function createHuman() {
  const formData = document.getElementById("dino-compare");
  // check if name is blank
  if (formData.name.value === "") {
    alert("Please refresh the page and enter a name");
    return;
  } else {
    // Remove form from screen
    formData.remove();
    // get form data
    return new Human(formData);
  }
}

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

// On button click, prepare and display infographic
//1.create list
//2.create li
//3.creat div
//4.append div to li
// 5.append li to ul
// 6. repeat 2 - 5ß
// append list to grid
function addElement() {
  for (let i = 0; i < tileData.dino.length; i++) {
    let fragment = new DocumentFragment();

    let gridItem = document.createElement("div");
    let heading = document.createElement("h3");
    let para = document.createElement("p");
    let lineBreak = document.createElement("br");
    let image = document.createElement("img");

    gridItem.setAttribute("class", "grid-item");

    if (i === 4) {
      let name = document.createTextNode(tileData.human.name);
      heading.appendChild(name);
      gridItem.appendChild(heading);
      // let fact = document.createTextNode(` ${tileData.dino[i].displayFact()}`);
      // para.appendChild(fact);
      para.appendChild(lineBreak);

      // gridItem.appendChild(para);
      // let height = document.createTextNode(`Height: ${tileData.dino[i].height}`);
      // para.appendChild(height);
      // gridItem.appendChild(para);

      image.src = `${tileData.human.image}`;
      gridItem.appendChild(image);
      // Add tiles to DOM
      fragment.appendChild(gridItem);
      grid.appendChild(fragment);
    } else if (tileData.dino[i].species === "Pigeon") {
      let species = document.createTextNode(tileData.dino[i].species);
      heading.appendChild(species);
      gridItem.appendChild(heading);
      let fact = document.createTextNode(`All birds are living dinosaurs.`);
      para.appendChild(fact);
      para.appendChild(lineBreak);

      gridItem.appendChild(para);
      // let height = document.createTextNode(`Height: ${tileData.dino[i].height}`);
      // para.appendChild(height);
      gridItem.appendChild(para);

      image.src = `${tileData.dino[i].image}`;
      gridItem.appendChild(image);
      // Add tiles to DOM
      fragment.appendChild(gridItem);
      grid.appendChild(fragment);

      // append human tile in the middle of grid
    } else {
      let species = document.createTextNode(tileData.dino[i].species);
      heading.appendChild(species);
      gridItem.appendChild(heading);
      let fact = document.createTextNode(` ${tileData.dino[i].displayFact()}`);
      para.appendChild(fact);
      para.appendChild(lineBreak);

      gridItem.appendChild(para);
      // let height = document.createTextNode(`Height: ${tileData.dino[i].height}`);
      // para.appendChild(height);
      gridItem.appendChild(para);

      image.src = `${tileData.dino[i].image}`;
      gridItem.appendChild(image);
      // Add tiles to DOM
      fragment.appendChild(gridItem);
      grid.appendChild(fragment);

      // append human tile in the middle of grid
    }
  }
}

//get input data form and store it an object

//to do
//create method to compare weight (dino weighs x pounds which is x amount <> than human weight)
//create method to compare height
//create method to compare diet (state the different or similarties)
// method should be on the dino object
//Upadate the pigion facts
