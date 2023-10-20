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


window.onload=function() {
    board=document.getElementById("board");
    board.height=bHeight;
    board.width=bWidth;
    context=board.getContext("2d");//used for drawing on the board

    //DRAW BIRD
    context.fillStyle="yellow";
    // context.fillRect(bird.x,bird.y,bird.width,bird.height);

    //Load images
    birdImg=new Image();
    birdImg.src="./images/bird.jpg";
    birdImg.onload=function(){
    context.drawImage(birdImg,bird.x,bird.y,bird.width,bird.height);
    }

    //top pipe
topPipeImg=new Image();
topPipeImg.src="./images/top2.png";

//bottom pipe
bottomPipeImg=new Image();
bottomPipeImg.src="./images/bottom2.png";

  requestAnimationFrame(update);
  setInterval(placePipes,1500);
}

function update() {
    requestAnimationFrame(update);   
    context.clearRect(0,0,board.bWidth,board.bHeight);

    //bird
    context.drawImage(birdImg,bird.x,bird.y,bird.width,bird.height);


//pipes array
for (let i = 0; i < pipeArray.length; i++) {
  let pipe=pipeArray[i];
  pipe.x += velocityX;
  context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);
    
}
}
function placePipes() {
    let topPipe=
    {
        img:topPipeImg,
        x:pipeX,
        y:pipeY,
       width:pipeWidth,
       height:pipeHeight,
       passed:false
    }
    pipeArray.push(topPipe);
}
