//Archive f SURFBOR3D
//16th OCT 2020
//by Louis Eastaugh

var goshaR;  //Load Gosha Regular
var goshaL;  //Load Gosha Light
var goshaB;  //Load Gosha Bold

newWindow = 5600;
    
    
//var spread1

function preload(){
  //Load Gosha Sans by Pangram Pangram Type
  goshaR=loadFont('data/GoshaSans-Regular.otf'); 
  goshaL=loadFont('data/GoshaSans-Ultralight.otf'); 
  goshaB=loadFont('data/GoshaSans-Bold.otf'); 
}


function setup() {
  createCanvas(windowWidth,((((windowWidth/3)*0.81)*11)+(14*50)));
  
  //Spread Images
  spread11 = loadImage('data/10_Front_Cover.png');
  spread1 = loadImage('data/01_Front_Page.png');
  spread2 = loadImage('data/02_Analogue_Boards.png');
  spread3 = loadImage('data/03_Generative_Designs.png');
  spread4 = loadImage('data/04_Poly_Boards.png');
  spread5 = loadImage('data/05_Collage_Cut.png');
  spread6 = loadImage('data/06_Collage_Cut2.png');
  spread7 = loadImage('data/07_Sweet_potato.png');
  spread8 = loadImage('data/08_3D_forms.png');
  spread9 = loadImage('data/09_End_Notes.png');
  spread10 = loadImage('data/10_All_Forms.png');
  
}


function draw() {
  
  //Black Background 
  background(0);
  //fill(0);
  //rect(50,50,windowWidth-100,newWindow-100);
    
  //Top Rect
  fill(255);
  noStroke();
  rect(0,0,windowWidth,50);
  
    //Image Setup
    //Image Specs
    imageProp = 3;                     //Proportions to divide Image 
    imageWidth = windowWidth/imageProp;  //Divide window width by amount of images
    imageHeight = imageWidth*0.81;       //Times by 1.22 to get proper aspect ration
    topMargin = 0;                      //The distance before first Image 
    imageX = (windowWidth/2)-(imageWidth/2);
    imageY = 100;
    imageGap = 50;
    newWindow = ((100+imageHeight*10)+imageGap*11)+50;
        
   //Image 1
   image(spread11,imageX+(imageWidth/2),imageY+topMargin,imageWidth/2,imageHeight);
   //Image 2
   image(spread1,imageX,(100+imageHeight)+imageGap*1+topMargin,imageWidth,imageHeight);
   //Image 3
   image(spread2,imageX,(100+imageHeight*2)+imageGap*2+topMargin,imageWidth,imageHeight);   
   //Image 4
   image(spread3,imageX,(100+imageHeight*3)+imageGap*3+topMargin,imageWidth,imageHeight);
   //Image 5
   image(spread4,imageX,(100+imageHeight*4)+imageGap*4+topMargin,imageWidth,imageHeight);
   //Image 6
   image(spread10,imageX,(100+imageHeight*5)+imageGap*5+topMargin,imageWidth,imageHeight);
   //Image 7
   image(spread5,imageX,(100+imageHeight*6)+imageGap*6+topMargin,imageWidth,imageHeight);   
   //Image 8
   image(spread6,imageX,(100+imageHeight*7)+imageGap*7+topMargin,imageWidth,imageHeight);   
   //Image 9
   image(spread7,imageX,(100+imageHeight*8)+imageGap*8+topMargin,imageWidth,imageHeight);
   //Image 10
   image(spread8,imageX,(100+imageHeight*9)+imageGap*9+topMargin,imageWidth,imageHeight);  
   //Image 11
   image(spread9,imageX,(100+imageHeight*10)+imageGap*10+topMargin,imageWidth,imageHeight);

   //Bottom Rect
   fill(255);
   rect(0,((100+imageHeight*11)+imageGap*11),windowWidth,50);

   newWindow = ((((windowWidth/3)*0.81)*11)+(14*50));


   //Outer Type
   //TOP
   fill(0);
   textSize(12);
   textFont(goshaB);
   textAlign(RIGHT,CENTER);
   text('Return to SURFBOR3D',(windowWidth-80),25);
   textAlign(LEFT,CENTER);
   textFont(goshaL);
   text('(ARCHIVE)',80,25);

   //Outer Type
   //Bottom
   fill(0);
   textSize(12);
   textFont(goshaB);
   textAlign(RIGHT,CENTER);
   text('Return to SURFBOR3D',(windowWidth-80),newWindow-25);
   textAlign(LEFT,CENTER);
   textFont(goshaL);
   text('(Selected spreads)',80,newWindow-25);
   text('Louis Eastaugh',imageX,newWindow-25);
   textAlign(RIGHT,CENTER);
   text('2020',imageX+imageWidth,newWindow-25);


}

function windowResized() {
   resizeCanvas(windowWidth,((((windowWidth/3)*0.81)*11)+(14*50)));//Y value staying at determined value.. otherwise will snap and not allow for scroll
}


//URL LINK
//**TOP**
//to SURFBOR3D
function mousePressed(){
   if (mouseX>(windowWidth/6)*4 && mouseX<(windowWidth-25) && mouseY<100){
    //range accounting for text length
    window.open("https://louiseastt.github.io/SURFBOR3D/generator/");
  }


//URL LINK
//**TOP**
//to SURFBOR3D
  if (mouseX>(windowWidth/6)*4 && mouseX<(windowWidth-25) && mouseY>(newWindow-100)){
    //range accounting for text length
    window.open("https://louiseastt.github.io/SURFBOR3D/generator/");
  }
}

  
