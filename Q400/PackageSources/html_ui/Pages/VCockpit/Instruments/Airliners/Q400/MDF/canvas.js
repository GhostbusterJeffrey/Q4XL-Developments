var canvas = document.querySelector('canvas');

canvas.width = 560;
canvas.height = 420;


var planePitch = 10;
var planeRoll = 0;
var planeSpeed = 0;

var w = canvas.width;
var h = canvas.height;
var anglebarheight = 25;

var c = canvas.getContext('2d');
var heading = 21;

drawHeadingBug(heading);

console.log(canvas);

function drawHeadingBug(heading) {
    c.beginPath();
    c.rect(243, 0, 3, 40);
    c.rect(317, 0, 3, 40);
    c.fillStyle = 'white';
    c.fill();
    c.closePath();

    var headingText = heading.toString();

    c.fillStyle = 'white';
    c.font = '30px Arial';
    c.textAlign = 'center';
    // Text align right with 0.5 * width with font size 16
    c.fillText(headingText, 282, 30, 100);
}
