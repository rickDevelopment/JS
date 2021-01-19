
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
    
    // get button element
    const button = document.getElementById('btn');

    // Create Dino Constructor
    function Dino(obj, i){
        this.species= obj.Dinos[i].species
        this.weight= obj.Dinos[i].weight
        this.height= obj.Dinos[i].height
        this.diet= obj.Dinos[i].diet
        this.where= obj.Dinos[i].where
        this.when= obj.Dinos[i].when
        this.fact= obj.Dinos[i].fact
    }
   
   
    // Create Dino Objects

    const triceratops = new Dino(dinoObj,0)
    const tyrannosaurus = new Dino(dinoObj,1)
    const anklyosaurus = new Dino(dinoObj,2)
    const brachiosaurus = new Dino(dinoObj,3)
    const stegosaurus = new Dino(dinoObj,4)
    const elasmosaurus = new Dino(dinoObj,5)
    const pteranodon = new Dino(dinoObj,6)
    const pigeon = new Dino(dinoObj,7)
    // const Pteranodon = new Dino(dinoObj,6)
    
    console.log(triceratops.species)

    // Create Human Object

    function createHuman(obj){
        this.name = obj.name
        this.weight =obj.weight
        this.diet = obj.diet
        fact: function fact(){
            return(` I am a human and I weigh ${weight} lbs`)
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
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic



//get input data form and store it an object

function getFormData(){
    let formData = document.getElementById('dino-compare')
    // let human ={
    //     name: formData.name.value,
    //     feet: formData.feet.value,
    //     inches: formData.inches.value,
    //     weight: formData.weight.value,
    //     diet:formData.diet.value
    // }
    
    return function(){
       return formData
    }
    

}