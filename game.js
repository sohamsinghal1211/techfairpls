MouseEvent = "empty"
var last_position_of_x, last_position_of_y;
canvas = document.getElementById("Canvas")
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("Color").value;
    width_of_line = document.getElementById("line-width");
    MouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove)

function my_mousemove(e) {
    current_position_of_x = e.clientX - canvas.offsetLeft
    current_position_of_y = e.clientY - canvas.offsetTop
    if (MouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + " " + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_position_of_x + " " + "y = " + current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}

function goBack2(){
    window.location="navigate.html"
}

function onLoad() {
    gapi.load('auth2', function() {
      gapi.auth2.init();
    });
  }
  
    function signOut() {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log('User signed out.');
      });
      window.location="index.html"
  
    }