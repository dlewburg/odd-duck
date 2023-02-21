'use strict';

// **** Globals ****
let productsArray = [];
let votingRounds = 25;


// **** DOM Windows ****

let imgContainer = document.getElementById('image-container');

let imgOne = document.getElementById('imgOne');
let imgTwo = document.getElementById('imgTwo');
let imgThree = document.getElementById('imgThree');




// **** Constructor Function ****

function Products(name, fileExtension = 'jpg'){
  this.name = name;
  this.image = `img/${name}.${fileExtension}`;
  this.votes = 0;
  this.views = 0;
}

// **** Helper Functions / Utilities ***

function renderImg(){
  let imgOneIndex = randomImg();
  let imgTwoIndex = randomImg();
  let imgThreeIndex = randomImg();

  while(imgOneIndex === imgTwoIndex || imgOneIndex === imgThreeIndex || imgTwoIndex === imgThreeIndex){
    imgTwoIndex = randomImg();
    imgThreeIndex = randomImg();
  }

  // if (imgOne === imgTwo){
  //   imgTwo = randomImg();
  // }else if (imgOne === imgThree){
  //   imgThree = randomImg();
  // }else if (imgTwo === imgThree){
  //   imgThree = randomImg();
  // }

  imgOne.src = productsArray[imgOneIndex].image;
  imgOne.title = productsArray[imgOneIndex].name;
  imgOne.alt = `this is an image of ${productsArray[imgOneIndex].name}`;

  imgTwo.src = productsArray[imgTwoIndex].image;
  imgTwo.title = productsArray[imgTwoIndex].name;
  imgTwo.alt = `this is an image of ${productsArray[imgTwoIndex].name}`;

  imgThree.src = productsArray[imgThreeIndex].image;
  imgThree.title = productsArray[imgThreeIndex].name;
  imgThree.alt = `this is an image of ${productsArray[imgThreeIndex].name}`;


  productsArray[imgOneIndex].views++;
  productsArray[imgTwoIndex].views++;
  productsArray[imgThreeIndex].views++;

}

function randomImg(){
  return Math.floor(Math.random() * productsArray.length);
}

function handleImgClick(event){

  let imgClicked = event.target.title;

  for (let i=0; i<productsArray.length; i++){
    if(imgClicked === productsArray[i].name){
      productsArray[i].votes++;
    }
  }

  votingRounds--;

  renderImg();

  if(votingRounds === 0){
    imgContainer.removeEventListener('click',handleImgClick);
  }

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
let sweep = new Products('sweep', 'png');
let tauntaun = new Products('tauntaun');
let unicorn = new Products('unicorn');
let waterCan = new Products('waterCan');
let wineGlass = new Products('wineGlass');

productsArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass);

console.log(productsArray);

renderImg();

imgContainer.addEventListener('click', handleImgClick);




