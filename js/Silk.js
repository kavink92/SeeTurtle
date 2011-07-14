/* Author:Kavin Mentor:Kashyap Garimella
 * This file tests the rendering actions.
 * setTimeout function is used to bring animation
 * setTimeout function is not designed for delay, but using some tricks we can bring delay
 * 
 */

function test_actions() {

	canvascolor (0,100,0);
	canvassize(700,500);
	pencolor(200,0,0);
	penwidth(1);
	center();

	direction(45);
	goy(450);

	execute();
}
/*
   draw on the canvas and is called by the execute function */
function draw()
{

	var ex=getx();
	var ey=gety();
	var ea=getangle();


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

}
/*
   execute is the function which calls the draw function after 10 microsecs 
   and immediately calls itself again, 
   by this trick we bring in a timedelay of 10 microsecs
 */
function execute()        
{		
	setTimeout("draw()",10);

	setTimeout("execute()",10);

}
