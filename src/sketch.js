let img;
let postTime;
let referenceTime;
let currentTime;
let dSpeed = 200;
let dThreshold = 10000;

function preload(){
  img = loadImage('assets/label1.png');
  originalImg = loadImage('assets/label1.png');
}

function setup() {
  createCanvas(img.width, img.height);
  // postTime = year()*365 + month()*30 + day();
  postTime = hour()*3600 + minute()*60 + second();
  referenceTime = postTime;
  
  
  
}

function draw() {
  // background(220);
  
  // currentTime = year()*365 + month()*30 + day();
  currentTime = hour()*3600 + minute()*60 + second();
  let deltaTime = (currentTime - referenceTime) * dSpeed;
  if (deltaTime > dThreshold * 1.2){
    referenceTime ++;
  }
  console.log (deltaTime);

  
  
  img.loadPixels();  
  originalImg.loadPixels();

  for(let y = 0; y < img.height; y++) {
    let chance = random(dThreshold);

    for(let x = 0; x < img.width; x++) {
      let index = (x + y * img.width) * 4;
      
      if (deltaTime > chance){
      img.pixels[index] = random(255); // r
      img.pixels[index+1] = random(255); // g
      img.pixels[index+2] = random(255); // b
      // img.pixels[index+3] = 255; // a
          } else{
      img.pixels[index] = originalImg.pixels[index]; // r
      img.pixels[index+1] = originalImg.pixels[index+1]; // g
      img.pixels[index+2] = originalImg.pixels[index+2]; // b
      img.pixels[index+3] = originalImg.pixels[index+3]; // a   
          }
    }
  }
  
  img.updatePixels();
  clear();
  image(img, 0, 0);
}

function mousePressed() {
  referenceTime = (referenceTime+currentTime)/2;
  // console.log(img.pixels[400000])
}



