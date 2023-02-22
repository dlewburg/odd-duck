'use strict';

// **** Globals ****
let productsArray = [];
let votingRounds = 25;


// **** DOM Windows ****

let imgContainer = document.getElementById('image-container');
let imgOne = document.getElementById('imgOne');
let imgTwo = document.getElementById('imgTwo');
let imgThree = document.getElementById('imgThree');
let results = document.getElementById('button');
let chartCanvas = document.getElementById('results');


// **** Constructor Function ****

function Products(name, fileExtension = 'jpg'){
  this.name = name;
  this.image = `img/${name}.${fileExtension}`;
  this.votes = 0;
  this.views = 0;
  productsArray.push(this);
}

// **** Helper Functions / Utilities ***

let photoIndex = [];
function renderImg(){
  while(photoIndex.length < 6){
    let randomPicture = randomImg();
    if(!photoIndex.includes(randomPicture)){
      photoIndex.push(randomPicture);
    }
  }

  let imgOneIndex = photoIndex.shift();
  let imgTwoIndex = photoIndex.shift();
  let imgThreeIndex = photoIndex.shift();

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

  function randomImg(){
    return Math.floor(Math.random() * productsArray.length);
  }
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

    let stringProducts = JSON.stringify(productsArray);
    console.log('String Products >>>', stringProducts);
    localStorage.setItem('products', stringProducts);
  }
}


// ***** Fx to Render Chart

function renderChart(){

  let productName = [];
  let productVotes = [];
  let productViews = [];

  for (let i = 0; i < productsArray.length; i++){
    productName.push(productsArray[i].name);
    productVotes.push(productsArray[i].votes);
    productViews.push(productsArray[i].views);
  }

  let chartObj = {
    type: 'bar',
    data: {
      labels: productName,
      datasets: [{
        label: 'Numbers of Votes',
        data: productVotes,
        borderWidth: 1.5,
        backgroundColor: ['#DA8A93'],
        borderColor: ['#897C93'],
        color: ['#FCFDF9'],
      },
      {
        label: 'Number of Votes',
        data: productViews,
        borderWidth: 1,
        backgroundColor: ['#897C93'],
        borderColor: ['#DA8A93'],
        color: ['#FCFDF9'],
      }],
    },
    options: {
      scales: {
        y:  {
          beginAtZero: true,
          ticks: {
            color: '#FCFDF9'
          }
        },
        x: {
          ticks: {
            color: '#FCFDF9'
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: '#FCFDF9'
          }
        }
      }
    }
  };

  new Chart(chartCanvas, chartObj);
}


function handleViewResults(){
  if(votingRounds === 0){
    renderChart();

    results.removeEventListener('click', handleViewResults);
  }
}

// **** Executable Code ****

// let returnedProducts = localStorage.getItem()

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

renderImg();

imgContainer.addEventListener('click', handleImgClick);

results.addEventListener('click', handleViewResults);
