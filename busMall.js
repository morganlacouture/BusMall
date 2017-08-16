// Global Variable
var images = []
var click = 0;

// Object Constructor
function Item(name, url, id) {
    this.name = name;
    this.url = url;
    this.id = id;
    this.voteCount = 0;

    images.push(this);
}

// Object instances 
//on load here 
var bag = new Item(' bag', 'images/bag.jpg', 'bag');
var banana = new Item(' banana', 'images/banana.jpg', 'banana');
var bathroom = new Item(' bathroom', 'images/bathroom.jpg', 'bathroom');
var boots = new Item(' boots', 'images/boots.jpg', 'boots');
var breakfast = new Item(' breakfast', 'images/breakfast.jpg', 'breakfast');
var bubblegum = new Item(' bubblegum', 'images/bubblegum.jpg', 'bubblegum');
var chair = new Item(' chair', 'images/chair.jpg', 'chair');
var cthulhu = new Item(' cthulhu', 'images/cthulhu.jpg', 'cthulhu');
var dog = new Item(' dog-duck', 'images/dog-duck.jpg', 'dog-duck');
var dragon = new Item(' dragon', 'images/dragon.jpg', 'dragon');
var pen = new Item(' pen', 'images/pen.jpg', 'pen');
var pet = new Item(' pet-sweep', 'images/pet-sweep.jpg', 'pet-sweep');
var scissors = new Item(' scissors', 'images/scissors.jpg', 'scissors');
var shark = new Item(' shark', 'images/shark.jpg', 'shark');
var sweep = new Item(' sweep', 'images/sweep.png', 'sweep');
var tauntaun = new Item(' tauntaun', 'images/tauntaun.jpg', 'tauntaun');
var unicorn = new Item(' unicorn', 'images/unicorn.jpg', 'unicorn');
var usb = new Item(' usb', 'images/usb.gif', 'usb');
var water = new Item(' water-can', 'images/water-can.jpg', 'water-can');
var wine = new Item(' wine-glass', 'images/wine-glass.jpg', 'wine-glass');

var randomImage = function () {
    var numberItem = Math.floor(Math.random() * (images.length));
    return images[numberItem].url;
}

var createSet = function () {
    var imageSet = [];
    do {
        var imgPath = randomImage();
        if (!imageSet.includes(imgPath)) {

            imageSet.push(imgPath);
        }
    } while (imageSet.length < 3);
    return imageSet;
}

var displayImage = function () {
    var imgPaths = createSet();

    var elImage1 = document.getElementById('pic1');
    elImage1.setAttribute('src', imgPaths[0]);

    var elImage2 = document.getElementById('pic2');
    elImage2.setAttribute('src', imgPaths[1]);

    var elImage3 = document.getElementById('pic3');
    elImage3.setAttribute('src', imgPaths[2]);
}

var display = document.getElementById('display');
display.addEventListener('click', voteHandler);

function voteHandler(event) {
   click ++
    console.log(event.target);

    var clickedEle = event.target;

    addVote(event.target);
    displayImage();

    if (click > 5 ) {
        chart();
    }
 
    toLS();

}
function toLS (){
var str = JSON.stringify( images );
localStorage.setItem( 'image' , str );
JSON.parse( str );
}
var getLS = parseInt.localStorage.getItem('str');

// adding a total of clicks on images

function addVote(target) {
    for (var i = 0; i < images.length; i++) {

    
        if (target.src.match(images[i].url)) {
            images[i].voteCount++

            console.table(images);
        }

    }
}

displayImage();

// using chart.js to add a chart of information to page 

function chart() {
    var chartVotes = [];


    for (var i = 0; i < images.length; i++){
        chartVotes.push( images[i].voteCount )

    }
 

    var chartCanvas = document.getElementById('chart').getContext('2d');
    var totalChart = new Chart(chartCanvas, {
        type: 'bar',
        data: {
            labels:['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog', 'dragon', 'pen', 'pet',
        'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water', 'wine'],
            datasets: [
                {
                    label: 'votes',
                    data: chartVotes,
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }

        }
        
    })

};




// function saveToLs ( key, value ){
//     var str = JSON.stringify( value );
//     localStorage.setItem( key, str );
// }
// function getFromLs (key){
//     return JSON.parse( localStorage.getItem(key));
// }
// var storedVotes = getFromLs();
//     if( storedVotes){

//     }


//GOALS FOR TODAY
//save original data when page is reloaded but also add the new info to the graph 

//save product array in local storage 

// save it to the if/else chart statement -- once all 25 votes have been used up 

// line 15--on load -- get localStorage products 
   // if there -use them to create objects 
   //otherwise create new objects like the entire like of images 
// make sure to save to array with all products so it doesn't override the array when the page is reloaded.   