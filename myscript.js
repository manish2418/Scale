window.onload = canvas;
 
function canvas()
{
    var myCanvas = document.getElementById("myCanvas");
 
    if( myCanvas && myCanvas.getContext("2d") ) 
    {
var context= myCanvas.getContext("2d");
context.fillStyle  = "red";
context.fillRect(10, 10, 50, 50);
context.save();
 
context.scale(2, 2);
context.fillStyle  = "blue";
context.fillRect(40, 40, 50, 50);
 
context.restore();
context.scale(0.5, 0.5);
context.fillStyle  = "green";
context.fillRect(100, 40, 50, 50);
    }
}