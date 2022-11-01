//////////////////////////////////////////////////////////////////////////////////////////////////
//Joshua Lebreton Comments(all), CSS(1-4,47-53), Greyscale (49-56) and Devanshi Thakur Image switching(5-48, 58-106)
//////////////////////////////////////////////////////////////////////////

//Declare variables
let imageThumbs = [...document.querySelectorAll('li img')];
let currentFocus = document.querySelector('figure img');
let figCaption = document.querySelector('figure figcaption');
let bodyTag = document.querySelector('body');
//Create a arraylist of flower image info
let imageItems = [
    {
        'name':'Pink Flowers',
        'small-src':'images/flowers-pink-small.jpg',
        'src':'images/flowers-pink-large.jpg',
        'alt':'Picture of Pink Flowers',
        'background':'rgb(240,16,128)'
    },
    {
        'name':'Purple Flowers',
        'small-src':'images/flowers-purple-small.jpg',
        'src':'images/flowers-purple-large.jpg',
        'alt':'Picture of Purple Flowers',
        'background':'purple'
    },
    {
        'name':'Red Flowers',
        'small-src':'images/flowers-red-small.jpg',
        'src':'images/flowers-red-large.jpg',
        'alt':'Picture of Red Flowers',
        'background':'red'
    },
    {
        'name':'White Flowers',
        'small-src':'images/flowers-white-small.jpg',
        'src':'images/flowers-white-large.jpg',
        'alt':'Picture of White Flowers',
        'background':'white'
    },
    {
        'name':'Yellow Flowers',
        'small-src':'images/flowers-yellow-small.jpg',
        'src':'images/flowers-yellow-large.jpg',
        'alt':'Picture of Yellow Flowers',
        'background':'yellow'
    },
];

function highlightActiveImage(imageNumber){
    console.log(imageNumber);
    for(let i = 0; i <5; i++){
        imageThumbs[i].style.filter = "grayscale(100%)";                
    };
    console.log(imageThumbs[imageNumber]);
    imageThumbs[Number(imageNumber)].style.filter = "grayscale(0%)"; 
}

//Create function to change images
function changeImage(){
    switch(this.getAttribute('src')){
        case("images/flowers-pink-small.jpg"):
            currentFocus.src = imageItems[0].src; //Sets the large image to the large version of each thumbnail image
            currentFocus.alt = imageItems[0].alt;
            figCaption.textContent = imageItems[0].name; //Set caption to the name of the image
            bodyTag.style.backgroundColor = imageItems[0].background; //Set background colour of website to the related colour of the flowers in each image
            highlightActiveImage(0);
            break;
        
        case("images/flowers-purple-small.jpg"):
            currentFocus.src = imageItems[1].src;
            currentFocus.alt = imageItems[1].alt;
            figCaption.textContent = imageItems[1].name;
            bodyTag.style.backgroundColor = imageItems[1].background;
            highlightActiveImage(1);
            break;   
            
        case("images/flowers-red-small.jpg"):
            currentFocus.src = imageItems[2].src;
            currentFocus.alt = imageItems[2].alt;
            figCaption.textContent = imageItems[2].name;
            bodyTag.style.backgroundColor = imageItems[2].background;
            highlightActiveImage(2);
            break;
        
        case("images/flowers-white-small.jpg"):
            currentFocus.src = imageItems[3].src;
            currentFocus.alt = imageItems[3].alt;
            figCaption.textContent = imageItems[3].name;
            bodyTag.style.backgroundColor = imageItems[3].background;
            highlightActiveImage(3);
            break;

        case("images/flowers-yellow-small.jpg"):
            currentFocus.src = imageItems[4].src;
            currentFocus.alt = imageItems[4].alt;
            figCaption.textContent = imageItems[4].name;
            bodyTag.style.backgroundColor = imageItems[4].background;
            highlightActiveImage(4);
            break;
    }
}

//Creates event listeners for each image (creating seperate event listeners allows function to retrive info about each object on line 51)
imageThumbs.forEach(element =>{
    element.addEventListener('click', changeImage)
});