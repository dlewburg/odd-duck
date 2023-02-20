'use strict';

// **** Globals ****
let productsArray = [];
let votingRounds = 25;


// **** DOM Windows ****

let imgContainer = document.getElementById('image-container');

let firstImage = document.getElementById('imgOne');
let secondImage = document.getElementById('imgTwo');
let thirdImage = document.getElementById('imgThree');




// **** Constructor Function ****

function Products(name, fileExtension = '.jpg'){
  this.name = name;
  this.image = `img/${name}.${fileExtension}`;
  this.votes = 0;
  this.views = 0;
}

// **** Helper Functions / Utilities ***

function renderImg(){
  let imgOne = randomImg();
  let imgTwo = randomImg();
  let imgThree = randomImg();
  

}

// get random image
function randomImg(){
  return Math.floor(Math.random() * productsArray.length);
}

// **** Executable Code ****

let bag = new Products('bag');
let banana = new Products('banana');
let bathroom = new Products('bathroom');
let boots = new Products('boots');
let breakfast = new Products('breakfast');
let bubblegum = new Products('bubblegum');
let chair = new Products('chair');
let cthulhu = new Products('cthulhu');
let dogDuck = new Products('dogDuck');
let dragon = new Products('dragon');
let pen = new Products('pen');
let petSweep = new Products('petSweep');
let scissors = new Products('scissors');
let shark = new Products('shark');
let sweep = new Products('sweep');
let tauntaun = new Products('tauntaun');
let unicorn = new Products('unicorn');
let waterCan = new Products('waterCan');
let wineGlass = new Products('wineGlass');

productsArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass);

// renderImg();




