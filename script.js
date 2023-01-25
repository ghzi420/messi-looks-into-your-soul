let GOAT = 0 //defining each variable
let RONALDO = 0
let start = false;
let grid = true;
 
function preload() {
  TylerOriginal = loadImage("Png.png"); //images i need, 
  Tyler = loadImage("Png.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER) //so the image will stay in the middle
  frameRate(50); //to help speed up the program.
  x=0 ; //for the grid
  y=0 ;
	while(x <= width) {
		while(y<=height) {
		rect(x,y,50);
		y+=50;
		}
		x+= 50
		y = 0
		rect(x,y, 50)
		y += 50;
	}
}

function updateTyler() { //for when tyler is updated
	grid = false; //when tyler is updated the grid will dissapear
	option = random([1, 2, 3]) //randomizes three ways tyler will change
	print(option)
  Tyler.loadPixels(); // we need to call this in order to use .set()
  for (let x = 0; x < Tyler.width; x++) {
    for (let y = 0; y < Tyler.height; y++) { // this goes through all the pixels in the image
      pixelColour = TylerOriginal.get(x, y);
			if (option == 1) {
	      newPixelColour = color(34, 43, 34); // black is a temporary colour
	      newPixelColour.setRed(167 - red(pixelColour));
	      newPixelColour.setGreen(0);
	      newPixelColour.setBlue(0);
	      Tyler.set(x, y, newPixelColour); // the new pixel colour is the inverse of what it was before
			} else if (option == 2) {
	      newPixelColour = color(34, 43, 34); // black is a temporary colour
	      newPixelColour.setRed(0);
	      newPixelColour.setGreen(167 - green(pixelColour));
	      newPixelColour.setBlue(0);
	      Tyler.set(x, y, newPixelColour); // the new pixel colour is the inverse of what it was before
			}
    }
  }
  Tyler.updatePixels(); // we need to call this in order for the pixels to update
}

function draw() {
  GOAT += 1.5 //the image of tyler will increase by this amount.
  RONALDO += 1.5 //how it will increase sideways
  image(Tyler, width/2, height/2, GOAT, RONALDO);
  textSize(20)
  textAlign(CENTER,CENTER)
  text("MaauzGhazi",width/1.1,height/1.1)
  fill(random(255), random(255), random(255));
  x=[0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500]
  y=[0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500] // 
  if (grid) {
		rect(random(x), random(y), 50) // decides what colours will be used to fill the checkerboard
	}
 
  if (GOAT >= 1000){ //resets size of the image when it gets bigger than 1000
    GOAT=0 
    RONALDO = 0
    background(random(256),random(256),random(256))
			updateTyler(); //updates the appearance of tyler when it gets to big

    
  }
}
function getRandomCell() {
  let values = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450];
  randomX = random(values);
  randomY = random(values);
  return [randomX, randomY];
}
