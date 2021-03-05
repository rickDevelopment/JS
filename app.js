// class Species{
//    constructor(name, image){
//      this.name = name;
//      this.image = image
//      this.facts = [];
//    }
//   displayFact(){
//     return this.facts[Math.floor(Math.random() * Math.floor(this.facts.length))]
//   }
// }

// class Dino1 extends Species{
//   constructor(name, height, weight, diet, image, facts){
//     super(name, image, facts)

//     this.height = height;
//     this.weight = weight;
//     this.diet = diet;
//     // this.where = where;
//     // this.when = when;

//     this.facts = [
//      ` Did you know ${this.name} weighs:  ${this.weight} pounds`,
//      ` ${this.name} is ${this.height} feet tall`,
//      ` ${this.name} has as ${this.diet}  diet`,
//      ` ${this.name} lived in ${this.where}`,
//      ` ${this.name} ${this.fact}  `,
//      ` ${this.name} lived until ${this.when} `,
//   ]
//   }
// }

// let human = new Species('John' , './images/human.png')

// console.log(human.weight);

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

const tileData = {};

compareButton.addEventListener("click", function () {
  tileData.human = createHuman();

  // add human to dino object
  dinoObj.Dinos.splice(4, 0, tileData.human);

  tileData.dino = createDino();
  addElement();
});
// create dino object

function Dino(obj) {
  return {
    species: obj.species,
    weight: obj.weight,
    height: obj.height,
    diet: obj.diet,
    where: obj.where,
    when: obj.when,
    fact: obj.fact,
    image: obj.image
  };
}

// Create Dinos and push it to tileData

// Create Dino Objects
function createDino() {
  const dinoArray = [];
  for (const dino of dinoObj.Dinos) {
      
    dinoArray.push(new Dino(dino));
  }
  return dinoArray;
}

// Create Human Object

function Human(obj) {
  return {
    species: obj.name.value,
    weight: obj.weight.value,
    diet: obj.diet.value,
    height: obj.feet.value,
    image: "./images/human.png",
    facts: [
      `I am a human and I weigh ${this.weight} lbs`,
      `My diet is a ${this.diet} diet`,
      `I am ${this.height} feet tall`,
    ],
    displayFact: function fact() {
      return this.facts[Math.floor(Math.random() * this.facts.length)];
    },
  };
}

// Use IIFE to get human data from form
function createHuman() {
  const formData = document.getElementById("dino-compare");

  // Remove form from screen
  formData.remove();
  // get form data
  return new Human(formData);
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
  for (let i = 0; i < 9; i++) {
    let gridItem = document.createElement("div");
    let heading = document.createElement("h3");
    let para = document.createElement("p");
    let lineBreak = document.createElement("br");
    let image = document.createElement("img");

    gridItem.setAttribute("class", "grid-item");

    let species = document.createTextNode(tileData.dino[i].species);
    heading.appendChild(species);
    gridItem.appendChild(heading);
    let diet = document.createTextNode(`Diet: ${tileData.dino[i].diet}`);
    para.appendChild(diet);
    para.appendChild(lineBreak);

    gridItem.appendChild(para);
    let height = document.createTextNode(`Height: ${tileData.dino[i].height}`);
    para.appendChild(height);
    gridItem.appendChild(para);

    image.src = `${tileData.dino[i].image}`;
    // gridItem.style.backgroundImage =  `url(${tileData.dino[i].image})`
    gridItem.appendChild(image);
    // Add tiles to DOM
    grid.appendChild(gridItem);
  }
}

//get input data form and store it an object
