var images = []

function Items(name, url, displayCount, voteCount, id) {
this.name = name;
this.url = url;
this.displayCount = displayCount;
this.voteCount = voteCount;
this.id = id;
this.votes;
images.push(this);
}

function instantItems() {

var image1 = new Items(' bag', 'images/bag.jpg', 0, 0, 'bag');
var image2 = new Items(' banana', 'images/banana.jpg', 0, 0, 'banana');
var image3 = new Items(' bathroom', 'images/bathroom.jpg', 0, 0, 'bathroom');
var image4 = new Items(' boots', 'images/boots.jpg', 0, 0, 'boots');
var image5 = new Items(' breakfast', 'images/breakfast.jpg', 0, 0, 'breakfast');
var image6 = new Items(' bubblegum', 'images/bubblegum.jpg', 0, 0, 'bubblegum');
var image7 = new Items(' chair', 'images/chair.jpg', 0, 0, 'chair');
var image8 = new Items(' cthulhu', 'images/cthulhu.jpg', 0, 0, 'cthulhu');
var image9 = new Items(' dog-duck', 'images/dog-duck.jpg', 0, 0, 'dog-duck');
var image10 = new Items(' dragon', 'images/dragon.jpg', 0, 0, 'dragon');
var image11 = new Items(' pen', 'images/pen.jpg', 0, 0, 'pen');
var image12 = new Items(' pet-sweep', 'images/pet-sweep.jpg', 0, 0, 'pet-sweep');
var image13 = new Items(' scissors', 'images/scissors.jpg', 0, 0, 'scissors');
var image14 = new Items(' shark', 'images/shark.jpg', 0, 0, 'shark');
var image15 = new Items(' sweep', 'images/sweep.png', 0, 0, 'sweep');
var image16 = new Items(' tauntaun', 'images/tauntaun.jpg', 0, 0, 'tauntaun');
var image17 = new Items(' unicorn', 'images/unicorn.jpg', 0, 0, 'unicorn');
var image18 = new Items(' usb', 'images/usb.gif', 0, 0, 'usb');
var image19 = new Items(' water-can', 'images/water-can.jpg', 0, 0, 'water-can');
var image20 = new Items(' wine-glass', 'images/wine-glass.jpg', 0, 0, 'wine-glass');
}

// var tracker = {
// // pic1: document.getElementById('pic1'),
// // pic2: document.getElementById('pic2'),
// // pic3: document.getElementById('pic3'),
// displaySection: document.getElementById('display'),
// votes: 0,

// randomIndex: function (arr) {
// return Math.floor(Math.random() * arr.length);
// },

// getIndices: function (arr) {
// var selectedIndices = [];

// do {
// var indexNum = this.randomIndex(arr);

// if (!selectedIndices.includes(indexNum)) {
// selectedIndices.push(indexNum);
// }
// } while (selectedIndices.length < 3);

// return selectedIndices;
// },
// function displayOptions() {

//         var itemPics = this.getIndices(images);

        // var index1 = itemPics[0];
        // var index2 = itemPics[1];
        // var index3 = itemPics[2];

        // var restaurant1 = images[index1];
        // var restaurant2 = images[index2];
        // var restaurant3 = images[index3];

        instantItems();
        document.getElementById('pic1').setAttribute('src', images[0].url);
        document.getElementById('pic2').setAttribute('src', images[1].url);
        document.getElementById('pic3').setAttribute('src', images[2].url);
    //}


    //     tallyVote: function (target) {
    //         this.votes += 1;

    //         var selectRest = images[target.getAttribute('data-index')];
    //         selectRest.votes++;

    //         if (this.votes > 4) {
    //             this.showResults();
    //         }
    //     },
    //     showResults: function () {

    //         this.displaySection.removeEventListener('click', voteHandler);
    //         console.table(images);
    //     }
    // };
    // var display = document.getElementById('display');
    // display.addEventListener('click', voteHandler, true);

    // function voteHandler(e) {

    //     tracker.tallyVote(e.target);
    //     tracker.displayOptions();
    // console.log(this.id + ' is listening; ' + e.target.id + ' was clicked');
    // event.preventDefault();
    //  event.target is what was clicked;
    // }

    // tracker.displayOptions();