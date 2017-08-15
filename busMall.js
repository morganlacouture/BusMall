var images = [];

function Items( displayName, url, id ) {
    this.displayName = name;
    this.url = url;
    this.displayCount = 0;
    this.voteCount = 0;
    this.id = id;
    this.votes;

    images.push( this );
}

var bag = new Items(' bag', 'images/bag.jpg', 0, 0, 'bag');
var banana = new Items(' banana', 'images/banana.jpg', 0, 0, 'banana');
var bathroom = new Items(' bathroom', 'images/bathroom.jpg', 0, 0, 'bathroom');
var boots = new Items(' boots', 'images/boots.jpg', 0, 0, 'boots');
var breakfast = new Items(' breakfast', 'images/breakfast.jpg', 0, 0, 'breakfast');
var bubblegum = new Items(' bubblegum', 'images/bubblegum.jpg', 0, 0, 'bubblegum');
var chair = new Items(' chair', 'images/chair.jpg', 0, 0, 'chair');
var cthulhu = new Items(' cthulhu', 'images/cthulhu.jpg', 0, 0, 'cthulhu');
var dogDuck = new Items(' dog-duck', 'images/dog-duck.jpg', 0, 0, 'dog-duck');
var dragon = new Items(' dragon', 'images/dragon.jpg', 0, 0, 'dragon');
var pen = new Items(' pen', 'images/pen.jpg', 0, 0, 'pen');
var pet = new Items(' pet-sweep', 'images/pet-sweep.jpg', 0, 0, 'pet-sweep');
var scissors = new Items(' scissors', 'images/scissors.jpg', 0, 0, 'scissors');
var shark = new Items(' shark', 'images/shark.jpg', 0, 0, 'shark');
var sweep = new Items(' sweep', 'images/sweep.png', 0, 0, 'sweep');
var tauntaun = new Items(' tauntaun', 'images/tauntaun.jpg', 0, 0, 'tauntaun');
var unicorn = new Items(' unicorn', 'images/unicorn.jpg', 0, 0, 'unicorn');
var usb = new Items(' usb', 'images/usb.gif', 0, 0, 'usb');
var waterCan = new Items(' water-can', 'images/water-can.jpg', 0, 0, 'water-can');
var wineGlass = new Items(' wine-glass', 'images/wine-glass.jpg', 0, 0, 'wine-glass');

var randomImage = function () {
    var numberItem = Math.floor(Math.random() * (images.length));
    return images[numberItem].filePath;

}
var createSet = function () {
    var images = [];
    do {
        var imgPath = randomImage();
        if (!images.includes(imgPath)) {

            images.push(imgPath);
        }
    } while (images.length < 3);
    return images;
}

var displayImage = function () {
    var imgPaths = createSet();

    var elImage1 = document.getElementById('pic1');
    elImage1.setAttribute('src', imgPaths[0]);

    var elImage1 = document.getElementById('pic2');
    elImage1.setAttribute('src', imgPaths[1]);

    var elImage1 = document.getElementById('pic3');
    elImage1.setAttribute('src', imgPaths[2]);
}

//     var elImage2 = document.getElementById('pic2');
//     if ( randomImage() === 'first'){
//         randomImage()
//     }
//     else{
//         elImage2.setAttribute('src', randomImage() )
//     }
// }

var survey = document.getElementById('display');
survey.addEventListener('click', voteHandler);

function voteHandler(event) {
    console.log(event.target);
    var clickedEle = event.target;
    console.log('clicked ele id', clickedEle.id);
}

displayImage();




