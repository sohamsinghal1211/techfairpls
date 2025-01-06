var MouseEvent = "empty";
var last_position_of_x, last_position_of_y;
var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");

// Event to track mousedown
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
  color = document.getElementById("Color").value;  // Fetch the color value
  width_of_line = document.getElementById("line-width").value;  // Fetch the line width value
  MouseEvent = "mouseDown";  // Set event to mouseDown

  // Update last_position_of_x and last_position_of_y to the current mouse position
  last_position_of_x = e.clientX - canvas.offsetLeft;
  last_position_of_y = e.clientY - canvas.offsetTop;
}

// Event to track mousemove
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    if (MouseEvent == "mouseDown") {
        var current_position_of_x = e.clientX - canvas.offsetLeft;
        var current_position_of_y = e.clientY - canvas.offsetTop;
        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ", last_position_of_x, last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        
        console.log("Current position of x and y coordinates = ", current_position_of_x, current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();

        last_position_of_x = current_position_of_x;
        last_position_of_y = current_position_of_y;
    }
}

// Event to stop drawing on mouseup
canvas.addEventListener("mouseup", function() {
    MouseEvent = "mouseUp";  // Stop drawing
});

// Event to handle mouse leaving the canvas
canvas.addEventListener("mouseleave", function() {
    MouseEvent = "mouseUp";  // Stop drawing
});

function goBack2() {
    window.location = "navigate.html";
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
    window.location = "index.html";
}
function clearArea() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the entire canvas
}