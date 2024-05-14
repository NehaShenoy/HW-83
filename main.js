canvas= document.getElementById("my_Canvas");
canvas. addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
color = document.getElementByld("color").value;
width_of_line = document.getElementByld("width_of_line").value;
radius = document.getElementByld("radius").value;
mouseEvent = "mouseDown";
}

function my_mousemove(e){
    current_position_of_mouse_x = c.clientX - canvas.offsetleft;
    current_position_of_mouse_y = c.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {

    console.log("Current position of x and y coordinates = ");
    console.log("x = " + current_position_of_mouse_x + "y= " + current_position_of_mouse_y);

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
    ctx.stroke();

    } }

