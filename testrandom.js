var n;
var l=1;
var ab;
var m = 0;
window.onload=function(){
	// drawLine();
	
}
function up() {
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    canvas.width = 600;
    canvas.height = 600;
    n = document.getElementById("test").value;
    // console.log(n);
    var line = {
    	x : 0,
    	y : 0,
    	x1 : 600,
    	y1 : 0
    }
    var line1 = {
    	x : 0,
    	y : 100,
    	x1 : 600,
    	y1 : 100
    }
    var line2 = {
    	x : 0,
    	y : 200,
    	x1 : 600,
    	y1 : 200
    }
    var line3 = {
    	x : 0,
    	y : 300,
    	x1 : 600,
    	y1 : 300
    }
    var line4 = {
    	x : 0,
    	y : 400,
    	x1 : 600,
    	y1 : 400
    }
    var line5 = {
    	x : 0,
    	y : 500,
    	x1 : 600,
    	y1 : 500
    }
    var line6 = {
    	x : 0,
    	y : 600,
    	x1 : 600,
    	y1 : 600
    }
    drawLine(context);
	for (var i=0;i<n;i++) {
		var x = getRandomInt(0, 600);

    	var y = getRandomInt(0, 600);
		ab = drawRandomLine(context, x, y);
		xiangjiao(ab, line);
		xiangjiao(ab, line1);
		xiangjiao(ab, line2);
		xiangjiao(ab, line3);
		xiangjiao(ab, line4);
		xiangjiao(ab, line5);
		xiangjiao(ab, line6);
	}
	document.getElementById("result").value = m;
	// console.log(m);
	p = 50*2/m*n/100;
	// p = n/m;
	document.getElementById("pai").value = p;
	// console.log(context);
	// var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
	// console.log(imageData.data);
}
function xiangjiao (line, line1) {
	if ((Math.max(line1.x, line1.x1) < Math.min(line.x, line.x1)) || (Math.max(line1.y, line1.y1) < Math.min(line.y, line.y1)) || (Math.max(line.x, line.x1) < Math.min(line1.x, line1.x1)) || (Math.max(line.y, line.y1) < Math.min(line1.y, line1.y1))) {
		return;
	} else {
		m++;
	}
}
function drawRandomLine(cxt, x, y) {
	cxt.beginPath();
	cxt.moveTo(x, y);
	var t = getRandomInt(0, 360);
	var x1 = randomX(x, t);
	// console.log(y1);
	var y1=  randomY(y, t);

	cxt.lineTo(x1, y1);
	// console.log(x, y, x1, y1, t);
	cxt.closePath();
	cxt.lineWidth = 1;
	cxt.stroke();
	return {
		x : x,
		y : y,
		x1 : x1,
		y1 : y1
	};
}
function drawLine(cxt) {
	cxt.lineWidth=1;
	cxt.beginPath();
	for (var i =1;i<6;i++) {
		var j = 100;
		cxt.moveTo(0, j*i);
		cxt.lineTo(600, j*i);
	}
	cxt.stroke();
	cxt.closePath();
}
function getRandomInt(min, max) {
  var num = Math.round(Math.random()*(max-min)+min);
  return num; //The maximum is exclusive and the minimum is inclusive
}
function randomX(x, t) {
	var x1 = x+Math.round(50*Math.sin(t*2*Math.PI/360));
	return x1;

}
function randomY(y, t) {
	var y1 = y+Math.round(50*Math.cos(t*2*Math.PI/360));
	return y1;
}
