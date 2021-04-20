var canvas = document.querySelector('canvas');

canvas.width = 560;
canvas.height = 680;


var eng1TQ = 0;
var eng2TQ = 0;
var eng1PRP = 0;
var eng2PRP = 0;
var eng1ITT = 0;
var eng2ITT = 0;
var eng1NH = 0;
var eng2NH = 0;
var eng1FF = 0;
var eng2FF = 0;
var eng1NL = 0;
var eng2NL = 0;
var eng1oilTemp = 0;
var eng2oilTemp = 0;
var eng1oilPressure = 0;
var eng2oilPressure = 0;
var fuelWL = 1500;
var fuelWR = 1500;
var fuelTempL = 21;
var fuelTempR = 20;
var SAT = "+0";
var UK2 = 0;

var c = canvas.getContext('2d');

drawTQ();
drawPROP();
drawITT();
drawFuelFlow();
drawNL();
drawFuel();
drawOil();
drawNH();
drawUK();
drawNTRQ1();
drawNTRQ2();
console.log(canvas);

function drawTQ() {
    c.lineWidth =
    c.beginPath();
    c.arc(180,130,70,.85*Math.PI,.15*Math.PI);
    c.strokeStyle = 'white';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(380,130,70,.85*Math.PI,.15*Math.PI);
    c.strokeStyle = 'white';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(180,130,70,.85*Math.PI,1.9*Math.PI);
    c.strokeStyle = 'green';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(380,130,70,.85*Math.PI,1.9*Math.PI);
    c.strokeStyle = 'green';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(180,130,70,1.9*Math.PI,0);
    c.strokeStyle = 'yellow';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(380,130,70,1.9*Math.PI,0);
    c.strokeStyle = 'yellow';
    c.stroke();
    c.closePath();

    c.textAlign = 'center';
    c.fillStyle = 'white';
    c.font = "20px Verdana"
    c.fillText("TRQ",280,65);
    c.fillText(eng1TQ,180,170);
    c.fillText(eng2TQ,380,170);
    c.font = "15px Verdana"
    c.fillStyle = 'blue';
    c.fillText('%',280,85);
}
function drawPROP() {
    c.beginPath();
    c.arc(190,300,60,.85*Math.PI,.15*Math.PI);
    c.strokeStyle = 'white';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(370,300,60,.85*Math.PI,.15*Math.PI);
    c.strokeStyle = 'white';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(190,300,60,1.561799*Math.PI,0);
    c.strokeStyle = 'green';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(370,300,60,1.561799*Math.PI,0);
    c.strokeStyle = 'green';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(190,300,60,1.95*Math.PI,0);
    c.strokeStyle = 'yellow';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(370,300,60,1.95*Math.PI,0);
    c.strokeStyle = 'yellow';
    c.stroke();
    c.closePath();

    c.textAlign = 'center';
    c.fillStyle = 'white';
    c.font = "20px Verdana";
    c.fillText("PROP",280,250);
    c.fillText(eng1PRP,190,340);
    c.fillText(eng2PRP,370,340);
    c.font = "15px Verdana"
    c.fillStyle = 'blue';
    c.fillText('RPM',280,270);
}
function drawITT() {
    c.beginPath();
    c.arc(190, 435, 60, .85 * Math.PI, .25 * Math.PI);
    c.strokeStyle = 'white';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(370, 435, 60, .85 * Math.PI, .25 * Math.PI);
    c.strokeStyle = 'white';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(190, 435, 60, 1.125 * Math.PI, 1.9 * Math.PI);
    c.strokeStyle = 'green';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(370, 435, 60, 1.125 * Math.PI, 1.9 * Math.PI);
    c.strokeStyle = 'green';
    c.stroke();
    c.closePath();

    c.textAlign = 'center';
    c.fillStyle = 'white';
    c.font = "20px Verdana";
    c.fillText("ITT",280,385);
    c.fillText(eng1ITT,190,475);
    c.fillText(eng2ITT,370,475);
    c.font = "15px Verdana"
    c.fillStyle = 'blue';
    c.fillText('°C',280,405);
}

function drawFuelFlow() {
    c.textAlign = 'left';
    c.font = "15px Verdana";
    c.fillStyle = 'white';
    c.fillText("FF", 35,340)
    c.fillStyle = 'blue';
    c.fillText("KG/H",35,355);
    c.font = "20px Verdana";
    c.fillStyle = 'white';
    c.fillText(eng1FF,35,375);
    c.textAlign = 'right';
    c.font = "15px Verdana";
    c.fillStyle = 'white';
    c.fillText("FF", 525,340)
    c.fillStyle = 'blue';
    c.fillText("KG/H",525,355);
    c.font = "20px Verdana";
    c.fillStyle = 'white';
    c.fillText(eng2FF,525,375);
}
function drawNL() {
    c.textAlign = 'left';
    c.font = "15px Verdana";
    c.fillStyle = 'white';
    c.fillText("NL", 35,455)
    c.fillStyle = 'blue';
    c.fillText("%RPM",35,470);
    c.font = "20px Verdana";
    c.fillStyle = 'white';
    c.fillText(eng1NL,35,490);
    c.textAlign = 'right';
    c.font = "15px Verdana";
    c.fillStyle = 'white';
    c.fillText("NL", 525,455)
    c.fillStyle = 'blue';
    c.fillText("%RPM",525,470);
    c.font = "20px Verdana";
    c.fillStyle = 'white';
    c.fillText(eng2NL,525,490);
}
function drawFuel() {
    c.textAlign = 'center';
    c.font = "20px Verdana";
    c.fillStyle = 'white';
    c.fillText("FUEL", 280, 530);
    c.fillText("SAT    ", 265, 600);
    c.fillText(SAT,290,600)
    c.font = "15px verdana";
    c.fillStyle = 'blue';
    c.fillText("KG", 280,555);
    c.fillText("°C", 280,575);
    c.fillText("°C", 325,600);
    c.font = "20px Verdana";
    c.fillStyle = 'white';
    c.textAlign = "right";
    c.fillText(fuelWL,260,555);
    c.fillText(fuelTempL,260, 575);
    c.textAlign = "left";
    c.fillText(fuelWR,300,555);
    c.fillText(fuelTempR,300, 575);
}
function drawOil() {
    c.beginPath();
    c.arc(100,575,35,1.6 *Math.PI,0.4*Math.PI);
    c.strokeStyle = 'white';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(100,575,35,1.4 *Math.PI,0.6*Math.PI,true);
    c.strokeStyle = 'white';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(460,575,35,1.6 *Math.PI,0.4*Math.PI);
    c.strokeStyle = 'white';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(460,575,35,1.4 *Math.PI,0.6*Math.PI,true);
    c.strokeStyle = 'white';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(100,575,35,0,0.25*Math.PI);
    c.strokeStyle = 'yellow';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(460,575,35,0,0.25*Math.PI);
    c.strokeStyle = 'yellow';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(100,575,35,1.6*Math.PI,1.825*Math.PI);
    c.strokeStyle = 'yellow';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(460,575,35,1.6*Math.PI,1.825*Math.PI);
    c.strokeStyle = 'yellow';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(100,575,35,0,1.825*Math.PI,true);
    c.strokeStyle = 'green';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(460,575,35,0,1.825*Math.PI,true);
    c.strokeStyle = 'green';
    c.stroke();
    c.closePath();

    c.beginPath();
    c.arc(100,575,35,1.25*Math.PI,1.2*Math.PI,true);
    c.strokeStyle = 'yellow';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(460,575,35,1.25*Math.PI,1.2*Math.PI,true);
    c.strokeStyle = 'yellow';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(100,575,35,0.75*Math.PI,0.85*Math.PI);
    c.strokeStyle = 'yellow';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(460,575,35,0.75*Math.PI,0.85*Math.PI);
    c.strokeStyle = 'yellow';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(100,575,35,0.85*Math.PI,1.2*Math.PI);
    c.strokeStyle = 'green';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(460,575,35,0.85*Math.PI,1.2*Math.PI);
    c.strokeStyle = 'green';
    c.stroke();
    c.closePath();

    c.textAlign = 'center';
    c.font = '20px Verdana';
    c.fillStyle = 'White';
    c.fillText("OIL",100,530);
    c.fillText("OIL",460,530);
    c.textAlign = 'right';
    c.fillText(eng1oilPressure,165,550);
    c.fillText(eng2oilPressure,525,550);
    c.fillText(eng1oilTemp,65,550);
    c.fillText(eng2oilTemp,425,550);
    c.font = '15px Verdana';
    c.fillStyle = 'blue';
    c.fillText("PSI",165,530);
    c.fillText("PSI",525,530);
    c.fillText("°C",65,530);
    c.fillText("°C",425,530);
}
function drawNH() {
    c.beginPath();
    c.arc(70,225,35,.85*Math.PI,.15*Math.PI);
    c.strokeStyle = 'white';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(490,225,35,.85*Math.PI,.15*Math.PI);
    c.strokeStyle = 'white';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(70,225,35,1.55*Math.PI,1.95*Math.PI);
    c.strokeStyle = 'green';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(490,225,35,1.55*Math.PI,1.95*Math.PI);
    c.strokeStyle = 'green';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(70,225,35,1.95*Math.PI,0);
    c.strokeStyle = 'yellow';
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(490,225,35,1.95*Math.PI,0);
    c.strokeStyle = 'yellow';
    c.stroke();
    c.closePath();

    c.textAlign = 'left';
    c.font = "15px Verdana";
    c.fillStyle = 'white';
    c.fillText("NH", 35,165)
    c.fillStyle = 'blue';
    c.fillText("%RPM",35,180);
    c.font = "20px Verdana";
    c.fillStyle = 'white';

    c.textAlign = 'right';
    c.font = "15px Verdana";
    c.fillStyle = 'white';
    c.fillText("NH", 525,165)
    c.fillStyle = 'blue';
    c.fillText("%RPM",525,180);
    c.font = "20px Verdana";
    c.fillStyle = 'white';
    c.fillText(eng1NH,90,255);
    c.fillText(eng2NH,505,255);
}
function drawUK() {
    c.textAlign = 'center';
    c.font = "20px Verdana";
    c.fillStyle = "white";
    c.fillText("----",70,50);
    c.fillText("--- %",72,80);
}
function drawNTRQ1() {
    c.fillStyle = 'white';
    c.translate(177,127);
    c.rotate(((eng1TQ * Math.PI / 180)*2.13) + 1.1);
    c.rect(0,0,6,60);
    c.lineTo(6,60)
    c.lineTo(3,70)
    c.lineTo(0,60)

    c.fill();
}
function drawNTRQ2() {

}