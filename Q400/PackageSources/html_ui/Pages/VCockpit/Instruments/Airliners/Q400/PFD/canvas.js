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

drawTopBar();
drawSpeedMeter(12, 84);
drawAltitudeMeter();
drawAngleIndicator(235, 218, 125, 20);

console.log(canvas);

function drawTopBar() {
    c.beginPath();
    c.rect(136, 0, 3, 40);
    c.rect(378, 0, 3, 40);
    c.fillStyle = 'white';
    c.fill();
    c.closePath();
}

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

    // Two white bars
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

function drawAngleIndicator(xpos, ypos, radius, cutoff) {
    c.save();
    c.beginPath();
    c.translate(xpos, ypos);
    // Set clipping for the middle attitude indicator
    var circlePath = new Path2D();
    circlePath.arc(0, 0, radius, 0, 2 * Math.PI, true);
    var rectanglePath = new Path2D();
    rectanglePath.rect(-radius + cutoff, -radius, (radius*2) - (cutoff * 2), radius*2);

    c.clip(circlePath);
    c.clip(rectanglePath);

    // Draws the angle and rotation screen
    // Angle is in degrees
    drawAttitude(xpos, planePitch, planeRoll, radius);

    c.translate(-xpos, -ypos);
    c.restore();
}

function drawAttitude(xpos, pitch, roll, radius) {
    var y = pitch * ((anglebarheight / 10) * 2);
    c.rotate(toRadians(roll));

    // Top blue area
    c.beginPath();
    c.rect(-radius, y + -radius * 10, radius*2, radius * 10);
    c.fillStyle = 'rgb(30, 160, 255)';
    c.fill();
    c.closePath();

    // Bottom sand color area
    c.beginPath();
    c.rect(-radius, y + 0 * 10, radius*2, radius * 10);
    c.fillStyle = 'rgb(232, 189, 49)';
    c.fill();
    c.closePath();

    // White line in middle
    c.beginPath();
    c.rect(-radius, y + 0 - 1.5, radius*2, 3);
    c.fillStyle = 'rgba(255, 255, 255, 0.8)';
    c.fill();
    c.closePath();

    // Angle indicators
    var barheight = 3;
    for(var i = -10; i < 10; i++) {
        if(i == 0) continue;
        c.beginPath();
        var yheight = (i * anglebarheight);
        var wwidth = (i % 2 == 0) ? 60 : 30;
        c.rect(-wwidth / 2, y + yheight - (barheight / 2), wwidth, barheight);
        c.fillStyle = 'rgba(255, 255, 255, 1)';
        c.fill();
        if(i % 2 == 0) {
            c.fillStyle = 'white';
            c.font = '16px Arial';
            c.textAlign = 'left';
            var angle = 0;
            var angle = -i * 10 / 2;
            angle *= (i > 0) ? -1 : 1;
            c.fillText(angle, -wwidth, yheight + 8 + y);
        }
        c.closePath();
    }

    c.rotate(-toRadians(roll));
    // Plane position relative to the indicators
    var yoffset_blackbars = -2.5;
    c.beginPath();
    c.rect(-radius + 40, yoffset_blackbars, 70, 5);
    c.rect(radius - 110, yoffset_blackbars, 70, 5);
    c.rect(-2.5, yoffset_blackbars, 5, 5);
    c.rect(-15, yoffset_blackbars, 5, 10);
    c.rect(10, yoffset_blackbars, 5, 10);
    c.fillStyle = 'rgb(0, 0, 0)';
    c.fill();
    c.closePath();

}

function drawSpeedMeter(xpos, ypos) {
    c.translate(xpos, ypos);
    c.save();

    // Left speed blue bar and clipping
    c.beginPath();
    var width = 68;
    var height = 277;
    c.rect(0, 0, width, height);
    c.fillStyle = 'rgb(30, 160, 255)';
    c.fill();
    c.closePath();
    c.clip();

    // Speed here
    c.beginPath();
    var speedBarWidth = (1/6) * width;
    var speedBarHeight = 3;
    var yadd = planeSpeed * 3;
    for(var i = 0; i < 50; i++) {
        var yheight = -i * 30;
        c.rect(width - speedBarWidth, yheight + (height / 2 - 5) - (speedBarHeight / 2) + yadd, speedBarWidth, speedBarHeight);
        c.fillStyle = 'rgb(255, 255, 255)';
        c.fill();
        if(i % 2 == 0) {
            c.fillStyle = 'white';
            c.font = '16px Arial';
            c.textAlign = 'right';
            c.fillText(i * 10, 0.5 * width, yheight + (height / 2) + yadd, 100);
            console.log("HEIGHT: " + (yheight + yadd) + "VAL: " + i * 10);;      
        }
    }
    c.closePath();

    // Speed black bar triangle
    var x1 = 40;
    c.beginPath();
    c.moveTo(x1, height / 2 - 20);
    c.lineTo(x1 + 15, height / 2 - 5);
    c.lineTo(x1, height / 2 + 10);
    c.lineTo(x1, height / 2 - 20);
    c.fillStyle = 'black';
    c.stroke();
    c.fill();
    c.closePath();

    // Speed black bar rectangle
    c.beginPath();
    c.rect(0, height / 2 - 20, x1, 30);
    c.fillStyle = 'black';
    c.fill();
    c.stroke();
    c.closePath();

    // Text align right with 0.5 * width with font size 16
    c.fillStyle = 'white';
    c.font = '16px Arial';
    c.textAlign = 'right';
    c.fillText(planeSpeed, 0.5 * width, (height) / 2, 100);

    c.restore();
    
    // Two white rectangles
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
    c.translate(-xpos, -ypos);
}

function toDegrees(radians) {
    return radians * 180 / Math.PI;
}

function toRadians(degrees) {
    return degrees * Math.PI / 180;
}
