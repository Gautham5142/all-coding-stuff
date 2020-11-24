var Canvas = document.getElementById("myCanvas") ;
ctx = Canvas.getContext("2d") ; 

var rover_width = 100 ;
var rover_height = 100 ;

rover_x = 20 ;
rover_y = 20 ;

var background_image = "mars.jpg" ;
var rover_image = "rover.png" ; 

function add() {
         background_imgTag = new Image() ; 
         background_imgTag.onload = uploadBackground() ;
         background_imgTag.src = background_image ; 

         rover_imgTag = new Image() ;
         rover_imgTag.onload = uploadrover() ;
         rover_imgTag.src = rover_image ; 

}

function uploadBackground() {
        ctx.drawImage(background_imgTag, 0, 0 , Canvas.width, Canvas.height) ;
        
}

function uploadrover() {
        ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height) ;
}

window.addEventListener("keydown" , myKeydown) ; 

function myKeydown(e) {
    keyPressed = e.keyCode ; 
console.log(keyPressed) ;
if(keyPressed == "38")
{
    up() ;
    console.log("up") ;
}
if(keyPressed == "40")
{
    down() ;
    console.log("down") ;
}
if(keyPressed == "37")
{
    left() ;
    console.log("left") ;
}
if(keyPressed == "39")
{
    right() ;
    console.log("right") ;
}
}







