/*
 * These are the rendering actions library.
 */

var width = 300;
var height = 150;

//stores the inforation regarding the coordinates of turtle
var x=width/2;
var y=height/2;
var angle=(Math.PI/2);

//fill_values will store the information of rgb values for filling
var rfill_value=0;
var gfill_value=0;
var bfill_value=0;

//stroke_values will store the information of rgb values for stroking
var rstroke_value=0;
var gstroke_value=0;
var bstroke_value=0;


function canvascolor(r, b, g) {
	var ctx = document.getElementById('canvas').getContext('2d');
	ctx.fillStyle = 'rgb(' + r + ',' + b + ',' + g + ')';
	ctx.fillRect(0, 0, width, height);
	rfill_value=r;		//loads information regarding
	gfill_value=g;		//rgb values for silling
	bfill_value=b;
}

function canvassize(w , h)
{
	var ctx = document.getElementById('canvas').getContext('2d');
	ctx.canvas.width=w;         //sets the canvas width
	ctx.canvas.height=h;		//sets the canvas height
	width=w;
	height=h;
	x=width/2;
	y=height/2;
	angle=Math.PI/2;
	ctx.fillStyle = 'rgb(' + rfill_value + ',' + bfill_value + ',' + gfill_value + ')';
	ctx.fillRect(0,0,width,height);
	center();
}

function pencolor(r , b  ,g)
{
	var ctx = document.getElementById('canvas').getContext('2d');
	ctx.strokeStyle = 'rgb(' + r + ',' + b + ',' + g + ')';
	rstroke_value=r;		//loads information regarding
	gstroke_value=g;		//rgb values for stroking
	bstroke_value=b;

}

function penwidth(p_width)
{
	var ctx = document.getElementById('canvas').getContext('2d');
	ctx.lineWidth=p_width;												//assigns pen width
}
	
function forward( distance )
{
	var ctx = document.getElementById('canvas').getContext('2d');
	ctx.beginPath();
	ctx.moveTo(x,y);
	x=x+distance*Math.cos(angle);		//Changes the value of coordinates
	y=y-distance*Math.sin(angle);
	ctx.lineTo(x,y);					//command for drawing line
	ctx.stroke();						//strokes the defined path
						
}

function backward( distance )
{
	var ctx = document.getElementById('canvas').getContext('2d');
	ctx.beginPath();
	ctx.moveTo(x,y);
	x=x-distance*Math.cos(angle);
	y=y+distance*Math.sin(angle);
	ctx.lineTo(x,y);
	ctx.stroke();
}

function turnleft(ang)
{
	ang=((ang*Math.PI)/180);		//ang in degrees shouldbe converted to radians
	angle+=ang;
	if(angle>2*Math.PI)
	{
		angle=angle-(2*Math.PI);			//to make sure that angle is always between 0 and 360
	}

}

function turnright(ang)
{
	ang=((ang*Math.PI)/180);		//ang in degrees shouldbe converted to radians
	angle-=ang;
	if(angle<0)
	{
		angle=angle+2*Math.PI;
	}

}

function direction(ang)
{
	if(ang<0)
	{
		while(ang>0)
		ang=ang+360;
	}
	if(ang>360)
	{
		while(ang<360)
		ang=ang-360;
	}


	ang=((ang*Math.PI)/180);
	angle=ang;

}

function center()				//makes the cursor go to center
{
	x=width/2;
	y=height/2;
}

function go(x_position,y_position)
{
	x=x_position;						//goes to the given x,y coordinates
	y=y_position;
}

	
function gox(x_position)
{
	x=x_position;						//goes to given x coordinate keeping y coordinate constant
}

function goy(y_position)
{
	y=y_position;
}

function getx()
{
	return x;							//returns x
}

function gety()
{
	return y;
}

function top(distance)
{
	var ctx = document.getElementById('canvas').getContext('2d');
	ctx.beginPath();
	ctx.moveTo(x,y);
	y-=distance;
	ctx.lineTo(x,y);
	ctx.stroke();
}

function down(distance)
{
	var ctx = document.getElementById('canvas').getContext('2d');
	ctx.beginPath();
	ctx.moveTo(x,y);
	y+=distance;
	ctx.lineTo(x,y);
	ctx.stroke();
}

function right(distance)
{
	var ctx = document.getElementById('canvas').getContext('2d');
	ctx.beginPath();
	ctx.moveTo(x,y);
	x+=distance;
	ctx.lineTo(x,y);
	ctx.stroke();
}

function left(distance)
{
	var ctx = document.getElementById('canvas').getContext('2d');
	ctx.beginPath();
	ctx.moveTo(x,y);
	x-=distance;
	ctx.lineTo(x,y);
	ctx.stroke();
}

function getangle()
{
	return angle;
}

	
	
