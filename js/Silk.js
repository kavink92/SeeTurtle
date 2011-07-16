/* Author:Kavin Mentor:Kashyap Garimella
 * This file tests the rendering actions.
 * setTimeout function is used to bring animation
 * setTimeout function is not designed for delay, but using some tricks we can bring delay
 *
 */

var i = 0;
var ex, ey, ea;

function test_actions() {

	canvascolor (0,100,0);
	canvassize(700,500);
	pencolor(200,0,0);
	penwidth(1);
	center();

	direction(45);
	goy(450);

	ex=getx();
	ey=gety();
	ea=getangle();

	draw();
}

/* draw on the canvas */
function draw() {

	forward(10);
	if(ex>700)
	{
		backward(10);
		if(ea<Math.PI/2)
			turnleft(90);

		else turnright(90);
		forward(10);
	}

	if(ex<0)
	{
		backward(10);
		if(ea>Math.PI)
			turnleft(90);
		else turnright(90);
		forward(10);
	}

	if(ey<0)
	{
		backward(10);
		if(ea>Math.PI/2)
			turnleft(90);

		else turnright(90);
		forward(10);
	}

	if(ey>500)
	{
		backward(10);
		if(ea<(3*Math.PI)/2)
			turnright(90);
		else turnleft(90);
		forward(10);
	}

	ex=getx();
	ey=gety();
	ea=getangle();
	i=i+1;

	if (i < 10000) {
		setTimeout(draw, 1);
	}

}


