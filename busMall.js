function getLs(image) {
    return JSON.parse(localStorage.getItem(image))
};

var images = []

if (!localStorage.image) {
    instantProducts();
}
else {
    var img = getLs('image');
    images = img;
}

var click = 0;



// Object Constructor
function Item(name, url, id) {
    this.name = name;
    this.url = url;
    this.id = id;
    this.voteCount = 0;

    images.push(this);
}

function instantProducts() {

    // Object instances 
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
}

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
    click++

    var clickedEle = event.target;

    addVote(event.target);
    displayImage();

    if (click > 25) {
        chart();
    }

    if ( click > 24 ){
        alert( 'Thank you for voting!' );
        chart();
        display.removeEventListener( 'click', voteHandler, false);
    }
    
    toLS();

}

function toLS() {
    var str = JSON.stringify(images);
    localStorage.setItem('image', str);
}

// adding a total of clicks on images

function addVote(target) {
    for (var i = 0; i < images.length; i++) {


        if (target.src.match(images[i].url)) {
            images[i].voteCount++

        }

    }
}

displayImage();

// using chart.js to add a chart of information to page 

function chart() {
    var chartVotes = [];


    for (var i = 0; i < images.length; i++) {
        chartVotes.push(images[i].voteCount)

    }


    var chartCanvas = document.getElementById('chart').getContext('2d');
    var totalChart = new Chart(chartCanvas, {
        type: 'bar',
        data: {
            labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog', 'dragon', 'pen', 'pet',
                'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water', 'wine'],
            datasets: [
                {
                    label: 'Votes',
                    data: chartVotes,
                    backgroundColor: ['#5E2838', '#524904', '#164346', '#51F3FC', '#ED9D0C', '#FC7751', '#8400EB', '#844953',
                        '#847561', '#000000', '#CCF400', '#FFCCB8', '#473934', '#1E1874', '#FF6A18', '#FF6A50', '#FE1F17',
                        '#8482DD', '#25718D', '#74511E'],
                    // TODO NEED TO ADD IN MORE COLORS -TAKING A BREAK TO FINISH READINGS
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