//BOARD DETAILS
let board;
let bWidth=360;
let bHeight=640;
let context;

//BIRD DETAILS

let birdWidth=34;
let birdHeight=24;
let birdX=bWidth/8;
let birdY=bHeight/2;
let birdImg;
let bird=
{
    x:birdX,
    y:birdY,
    width:birdWidth,
    height:birdHeight
}

//pipes info
let pipeArray=[];
let pipeWidth=64;
let pipeHeight=512;
let pipeX=bWidth;
let pipeY=0;

//pipe images
let topPipeImg;
let bottomPipeImg;


//movement of pipes
let velocityX = -2;
let velocityY=0;
let gravity=0.4;


let gameOver=false;

window.onload=function() {
    board=document.getElementById("board");
    board.height=bHeight;
    board.width=bWidth;
    context=board.getContext("2d");//used for drawing on the board

    //DRAW BIRD
    // context.fillStyle="yellow";
    // context.fillRect(bird.x,bird.y,bird.width,bird.height);

    //Load images
    birdImg=new Image();
    birdImg.src="./images/bird.jpg";
    birdImg.onload=function(){
    context.drawImage(birdImg,bird.x,bird.y,bird.width,bird.height);
    }

    //top pipe
topPipeImg=new Image();
topPipeImg.src="./images/tp2.png";

//bottom pipe
bottomPipeImg=new Image();
bottomPipeImg.src="./images/bttm2.png";

  requestAnimationFrame(update);
  setInterval(placePipes,1500);
  document.addEventListener("keydown",moveBird);
}

function update() {
    requestAnimationFrame(update);
    if(gameOver) 
    {
        return;
    }  
    context.clearRect(0,0,board.width,board.height);

    //bird
    velocityY += gravity;
   bird.y=Math.max(bird.y+velocityY,0);
    context.drawImage(birdImg,bird.x,bird.y,bird.width,bird.height);
if(bird.y>board.height)
{
    gameOver=true;
}

//pipes array
for (let i = 0; i < pipeArray.length; i++) {
  let pipe=pipeArray[i];
  pipe.x += velocityX;
  context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

  if(detectCollision(bird,pipe))
  {
    gameOver=true;
  }
    
}
}
function placePipes() {
    if(gameOver)
    {
        return;
    }


let randomPipeY=pipeY-pipeHeight/4 - Math.random()*(pipeHeight/2);
let openingSpace=board.height/4;
    let topPipe=
    {
        img:topPipeImg,
        x:pipeX,
        y:randomPipeY,
       width:pipeWidth,
       height:pipeHeight,
       passed:false
    }
    pipeArray.push(topPipe);

    let bottomPipe={
        img:bottomPipeImg,
        x:pipeX,
        y:randomPipeY+pipeHeight+openingSpace,
        width:pipeWidth,
        height:pipeHeight,
        passed:false
    }
    pipeArray.push(bottomPipe);
}

function moveBird(e) {
    if (e.code=="Space" ||e.code=="ArrowUp" || e.code=="KeyX") {
        //jump
        velocityY = -6;
    }
}
function detectCollision(a,b) {
    return a.x<b.x+b.width 
    && a.x+a.width>b.x && a.y+b.y+b.height&& a.y + a.height>b.y;
    
}