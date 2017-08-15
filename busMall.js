var images = []

function Items(name, url, id) {
this.name = name;
this.url = url;
this.displayCount = 0;
this.voteCount = 0;
this.id = id;

images.push(this);
}

var image1 = new Items(' bag', 'images/bag.jpg', 'bag');
var image2 = new Items(' banana', 'images/banana.jpg', 'banana');
var image3 = new Items(' bathroom', 'images/bathroom.jpg', 'bathroom');
var image4 = new Items(' boots', 'images/boots.jpg', 'boots');
var image5 = new Items(' breakfast', 'images/breakfast.jpg', 'breakfast');
var image6 = new Items(' bubblegum', 'images/bubblegum.jpg', 'bubblegum');
var image7 = new Items(' chair', 'images/chair.jpg', 'chair');
var image8 = new Items(' cthulhu', 'images/cthulhu.jpg', 'cthulhu');
var image9 = new Items(' dog-duck', 'images/dog-duck.jpg', 'dog-duck');
var image10 = new Items(' dragon', 'images/dragon.jpg', 'dragon');
var image11 = new Items(' pen', 'images/pen.jpg', 'pen');
var image12 = new Items(' pet-sweep', 'images/pet-sweep.jpg', 'pet-sweep');
var image13 = new Items(' scissors', 'images/scissors.jpg', 'scissors');
var image14 = new Items(' shark', 'images/shark.jpg', 'shark');
var image15 = new Items(' sweep', 'images/sweep.png', 'sweep');
var image16 = new Items(' tauntaun', 'images/tauntaun.jpg', 'tauntaun');
var image17 = new Items(' unicorn', 'images/unicorn.jpg', 'unicorn');
var image18 = new Items(' usb', 'images/usb.gif', 'usb');
var image19 = new Items(' water-can', 'images/water-can.jpg', 'water-can');
var image20 = new Items(' wine-glass', 'images/wine-glass.jpg', 'wine-glass');

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

var elImage1 = document.getElementById('pic2');
elImage1.setAttribute('src', imgPaths[1]);

var elImage1 = document.getElementById('pic3');
elImage1.setAttribute('src', imgPaths[2]);
}

var display = document.getElementById('display');
display.addEventListener('click', voteHandler);

function voteHandler(event) {

console.log(event.target);

var clickedEle = event.target;


console.log('clicked ele id', clickedEle.id);
displayImage();
}

displayImage();