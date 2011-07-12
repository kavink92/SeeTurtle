/*
 * These are the rendering actions library.
 */

var width = 300;
var height = 150;
function canvascolor(r, b, g) {
	var ctx = document.getElementById('canvas').getContext('2d');
	ctx.fillStyle = 'rgb(' + r + ',' + b + ',' + g + ')';
	ctx.fillRect(0, 0, width, height);
}

