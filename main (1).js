var mouseEvent="empty";
var ultimaposicionx, ultimaposiciony;

canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color="lime";
width_of_line=1;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouseEvent="mouseDown";
}