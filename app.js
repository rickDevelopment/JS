
//get compare button
let compareButton = document.getElementById('btn')
let formData;
let grid = document.getElementById('grid')

const tileData = {};


// get form data
compareButton.addEventListener('click', function () {
    // debugger
    tileData.human = getHuman();
    tileData.dino = createDino();
    addElement()
    form().remove()
});
// create dino object

function Dino(obj,i){
    return{
        species: obj.Dinos[i].species,
        weight:obj.Dinos[i].weight,
        height: obj.Dinos[i].height,
        diet: obj.Dinos[i].diet,
        where: obj.Dinos[i].where,
        when: obj.Dinos[i].when,
        fact: obj.Dinos[i].fact,
    }

}


    const dinoObj ={
        "Dinos": [
            {
                "species": "Triceratops",
                "weight": 13000,
                "height": 114,
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "First discovered in 1889 by Othniel Charles Marsh"
            },
            {
                "species": "Tyrannosaurus Rex",
                "weight": 11905,
                "height": 144,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "The largest known skull measures in at 5 feet long."
            },
            {
                "species": "Anklyosaurus",
                "weight": 10500,
                "height": 55,
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Anklyosaurus survived for approximately 135 million years."
            },
            {
                "species": "Brachiosaurus",
                "weight": 70000,
                "height": "372",
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Jurasic",
                "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
            },
            {
                "species": "Stegosaurus",
                "weight": 11600,
                "height": 79,
                "diet": "herbavor",
                "where": "North America, Europe, Asia",
                "when": "Late Jurasic to Early Cretaceous",
                "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
            },
            {
                "species": "Elasmosaurus",
                "weight": 16000,
                "height": 59,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
            },
            {
                "species": "Pteranodon",
                "weight": 44,
                "height": 20,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
            },
            {
                "species": "Pigeon",
                "weight": 0.5,
                "height": 9,
                "diet": "herbavor",
                "where": "World Wide",
                "when": "Holocene",
                "fact": "All birds are living dinosaurs."
            }
        ]
    }
// Create Dinos and push it to tileData 


   createDino()
    
  

   

    myDino = new Dino(dinoObj,1)

    // Create Dino Constructor
    // function Dino(obj, i){
    //     return{

    //         species: obj.Dinos[i].species,
    //         weight:obj.Dinos[i].weight,
    //         height: obj.Dinos[i].height,
    //         diet: obj.Dinos[i].diet,
    //         where: obj.Dinos[i].where,
    //         when: obj.Dinos[i].when,
    //         fact: obj.Dinos[i].fact,
    //         sayName: function sayName(){
    //         console.log(this.species)
    //     }
    //     }
        
    // }
   
   
    // Create Dino Objects
    function createDino(){
        const dinoArray = [] 
          for(const elem of dinoObj.Dinos){
          dinoArray.push(elem)
      }
       return dinoArray
     }
    

    // Create Human Object



    function Human(obj){
      return {
        name: obj.name.value,
        weight : obj.weight.value,
        diet : obj.diet.value,
        fact: function fact(){
            return(` I am a human and I weigh ${this.weight} lbs`);
        }
      }
    }


    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array

        //1.create list 
        //2.create li
        //3.creat div
        //4.append div to li
        // 5.append li to ul
        // 6. repeat 2 - 5
        // append list to grid 
function addElement(){
    for( let i=0 ; i< 9; i++){
        let gridItem = document.createElement('div');
    
        gridItem.setAttribute('class','grid-item' );

        gridItem.textContent= "this is a test item"
        grid.appendChild(gridItem)
    }
    
}
      
        // Add tiles to DOM

    // Remove form from screen
        //element.remove()

// On button click, prepare and display infographic



//get input data form and store it an object



function form() {
    let form = document.getElementById('dino-compare');

    remove: function removeForm(){form.remove()}

  return form
}


function getHuman(){
  const formData = form();
  return new Human(formData);
}


