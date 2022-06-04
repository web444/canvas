//var common
var cns = document.getElementById("myCanvas");
var ctx = cns.getContext("2d");
var mouseEvent = "empty";
var colorOfL = "darkBlue";
var linegWidth = 5;
var lastPositionX = 0;
var lastPositionY = 0;
//phone (var)
var width = screen.width;
var newWidth = screen.width - 70;
var newHeight = screen.height - 300;
//phoneinfo


if (width < 992) {

    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
}

cns.addEventListener("touchstart", mySCreenStart);

function mySCreenStart(e) {

    colorOfL = document.getElementById("col").value;
    linegWidth = document.getElementById("wid").value;
    lastPositionX = e.touches[0].clientX - cns.offsetLeft;
    lastPositionY = e.touches[0].clientY - cns.offsetTop;

}

cns.addEventListener("touchmove", myMouseTouchMove);

function myMouseTouchMove(e) {

    currentPositionX = e.touches[0].clientX - cns.offsetLeft;
    currentPositionY = e.touches[0].clientY - cns.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = linegWidth;
    ctx.color = colorOfL;
    ctx.moveTo(lastPositionX, lastPositionY);
    ctx.lineTo(currentPositionX, currentPositionY);
    ctx.stroke();
    lastPositionX = currentPositionX;
    lastPositionY = currentPositionY


}



//Laptop(i fo)


cns.addEventListener("mousedown", myMouseDown);


function myMouseDown(e) {
    colorOfL = document.getElementById("col").value;
    linegWidth = document.getElementById("wid").value;
    mouseEvent = "mousedown";

}

cns.addEventListener("mouseup", myMouseUp);

function myMouseUp(e) {

    mouseEvent = "mouseup";

}

cns.addEventListener("mouseleave", myMouseleave);

function myMouseleave(e) {

    mouseEvent = "mouseleave";

}

cns.addEventListener("mousemove", myMouseMove);

function myMouseMove(e) {

    var currentPositionX = e.clientX - cns.offsetLeft;
    var currentPositionY = e.clientY - cns.offsetTop + 125;

    if (mouseEvent == "mousedown") {

        ctx.beginPath();
        ctx.strokeStyle = colorOfL;
        ctx.lineWidth = linegWidth;
        ctx.moveTo(lastPositionX, lastPositionY);

        console.log(lastPositionX, lastPositionY);
        console.log(currentPositionX, currentPositionY);

        ctx.lineTo(currentPositionX, currentPositionY);
        ctx.stroke();
    }
    console.log("Is it working?");
    lastPositionX = currentPositionX;
    lastPositionY = currentPositionY;

}

function cler() {

    ctx.clearRect(0, 0, cns.width, cns.height)

}