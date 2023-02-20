'use strict';

// **** Globals ****
let productsArray = [];
let votingRounds = 25;


// **** DOM Windows ****

// **** Constructor Functions ****

function renderImg(){
  let imgOne = randomImg();
  let imgTwo = randomImg();
  let imgThree = randomImg();

}

function Products(name, fileExtension = '.jpg'){
  this.name = name;
  this.image = `img/${name}.${fileExtension}`;
  this.votes = 0;
  this.views = 0;
}

// **** Helper Functions / Utilities ***

// get random image
function randomImg(){
  return Math.floor(Math.random() * productsArray.length);
}

// **** Executable Code ****




