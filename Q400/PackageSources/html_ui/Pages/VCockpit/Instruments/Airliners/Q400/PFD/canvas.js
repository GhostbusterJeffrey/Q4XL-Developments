var canvas = document.querySelector('canvas');

canvas.width = 560;
canvas.height = 420;

var curX = 0;
var curY = 0;

var w = canvas.width;
var h = canvas.height;

var c = canvas.getContext('2d');

// Top Bar
c.beginPath();
c.rect(136, 0, 3, 40);
c.rect(378, 0, 3, 40);
c.fillStyle = 'white';
c.fill();
c.closePath();

drawSpeedMeter();
drawAngleIndicator(235, 218, 125, 20);
drawAltitudeMeter();

console.log(canvas);

function drawAltitudeMeter() {
    c.translate(405, 84);
    c.save();
    c.beginPath();
    var width = 68;
    var height = 277;
    c.rect(0, 0, width, height);
    c.fillStyle = 'rgb(30, 160, 255)';
    c.fill();
    c.closePath();
    c.clip();

    // Speed here

    // Speed black bar triangle
    var x1 = 50;
    c.beginPath();
    c.moveTo(width-x1, height / 2 - 20);
    c.lineTo((width-(x1+20)), height / 2 - 5);
    c.lineTo(width-x1, height / 2 + 10);
    c.lineTo(width-x1, height / 2 - 20);
    c.fillStyle = 'black';
    c.stroke();
    c.fill();
    c.closePath();

    // Speed black bar rectangle
    c.beginPath();
    c.rect(width-x1, height / 2 - 20, 55, 30);
    c.fillStyle = 'black';
    c.fill();
    c.stroke();
    c.closePath();

    c.fillStyle = 'white';
    c.font = '16px Arial';
    c.textAlign = 'left';
    // Text align right with 0.5 * width with font size 16
    c.fillText(250, 0.5 * width, (height) / 2, 100);
    c.restore();

    c.beginPath();
    c.rect(-10, -2, 77, 3);
    c.fillStyle = 'rgba(255, 255, 255, 0.6)';
    c.fill();
    c.closePath();

    c.beginPath();
    c.rect(-10, (height) - 2, 77, 3);
    c.fillStyle = 'rgba(255, 255, 255, 0.6)';
    c.fill();
    c.closePath();
    c.translate(-405, -84);
}

function drawAngleIndicator(x, y, radius, cutoff) {
    c.save();
    c.beginPath();
    c.translate(x, y);
    var circlePath = new Path2D();
    circlePath.arc(0, 0, radius, 0, 2 * Math.PI, true);
    var rectanglePath = new Path2D();
    rectanglePath.rect(-radius + cutoff, -radius, (radius*2) - (cutoff * 2), radius*2);

    c.clip(circlePath);
    c.clip(rectanglePath);

    c.fillStyle = 'rgb(30, 160, 255)';
    c.fillRect(-radius, -radius, radius*2, radius*2);
    c.closePath();
    c.translate(-x, -y);
    c.restore();
}

function drawSpeedMeter() {
    c.translate(12, 84);
    c.save();
    c.beginPath();
    var width = 68;
    var height = 277;
    c.rect(0, 0, width, height);
    c.fillStyle = 'rgb(30, 160, 255)';
    c.fill();
    c.closePath();
    c.clip();

    // Speed here

    // Speed black bar triangle
    c.beginPath();
    c.moveTo(45, height / 2 - 20);
    c.lineTo(60, height / 2 - 5);
    c.lineTo(45, height / 2 + 10);
    c.lineTo(45, height / 2 - 20);
    c.fillStyle = 'black';
    c.stroke();
    c.fill();
    c.closePath();

    // Speed black bar rectangle
    c.beginPath();
    c.rect(0, height / 2 - 20, 45, 30);
    c.fillStyle = 'black';
    c.fill();
    c.stroke();
    c.closePath();

    c.fillStyle = 'white';
    c.font = '16px Arial';
    c.textAlign = 'right';
    // Text align right with 0.5 * width with font size 16
    c.fillText(0, 0.5 * width, (height) / 2, 100);
    c.restore();

    c.beginPath();
    c.rect(0, -2, 77, 3);
    c.fillStyle = 'rgba(255, 255, 255, 0.6)';
    c.fill();
    c.closePath();

    c.beginPath();
    c.rect(0, (height) - 2, 77, 3);
    c.fillStyle = 'rgba(255, 255, 255, 0.6)';
    c.fill();
    c.closePath();
    c.translate(-12, -84);
}

function toDegrees(radians) {
    return radians * 180 / Math.PI;
}

function toRadians(degrees) {
    return degrees * Math.PI / 180;
}
