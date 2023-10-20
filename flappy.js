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
    requestAnimationFrame(update);
}

function update() {
    requestAnimationFrame(update);   
    context.clearRect(0,0,board.bWidth,board.bHeight);

    //bird
    context.drawImage(birdImg,bird.x,bird.y,bird.width,bird.height);
}