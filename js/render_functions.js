	/*

	* These are the rendering actions library.
	*/

	var count=0;
	var delay=10;
	var dist=1;
	var width = 300;
	var height = 150;


	//stores the inforation regarding the coordinates of turtle
	var x=width/2;
	var y=height/2;
	var angle=(Math.PI/2);


	//fill_values will store the information of rgb values for filling
	var rfill_value=256;
	var gfill_value=256;
	var bfill_value=256;


	//stroke_values will store the information of rgb values for stroking
	var rstroke_value=0;
	var gstroke_value=0;
	var bstroke_value=0;


        //TODO: Each action should take some time. For example, the
        //canvascolor function doesn't. Also few functions below that also
        //don't. All you need to do is to call the render function with a
        //timeout. Like, in the canvascolor function, you can do this:
        // setTimeout(render,
	function canvascolor(r, b, g) {

		var ctx = document.getElementById('canvas').getContext('2d');
		ctx.fillStyle = 'rgb(' + r + ',' + b + ',' + g + ')';

		ctx.fillRect(0, 0, width, height);
		rfill_value=r; //loads information regarding
		gfill_value=g; //rgb values for filling
		bfill_value=b;

		state = 1;
                interpret();

		}

	function canvassize(w , h)
	{
		var ctx = document.getElementById('canvas').getContext('2d');
		ctx.canvas.width=w; //sets the canvas width
		ctx.canvas.height=h; //sets the canvas height

		width=w;
		height=h;
		x=width/2;
		y=height/2;
		angle=Math.PI/2;
		ctx.fillStyle = 'rgb(' + rfill_value + ',' + bfill_value + ',' + gfill_value + ')';
		ctx.fillRect(0,0,width,height);
		
		state = 1;
		center();
		//interpret();
	}


	function pencolor(r , b ,g)
	{
		var ctx = document.getElementById('canvas').getContext('2d');
		ctx.strokeStyle = 'rgb(' + r + ',' + b + ',' + g + ')';
		rstroke_value=r;
		gstroke_value=g;
		bstroke_value=b;
		state = 1;
		interpret();
	}



	function penwidth(p_width)
	{
		var ctx = document.getElementById('canvas').getContext('2d');
		ctx.lineWidth=p_width; //assigns pen width
		state = 1;
		interpret();
	}


	function forward(distance)
	{
		var d=0; //variable which is used as a criterion to stop end the forward draw funcion
		
		forwarddraw();


	/*function which draws small lines and calls itself after a delay*/

	function forwarddraw()
	{
		var ctx = document.getElementById('canvas').getContext('2d');
		state = 0;
		ctx.beginPath();
		ctx.moveTo(x,y);
		x=x+dist*Math.cos(angle);
		y=y-dist*Math.sin(angle);
		ctx.lineTo(x,y);
		ctx.stroke();
		
		d+=dist; //calculates how much distance turtle has traveled

		if(d<distance)
		setTimeout(forwarddraw,1); //calls same function after delay of 1ms

		else{
		state = 1;
		interpret(); }//if the required distance has been covered, render is called

		
	

	}

	}

	function backward(distance)
	{
		var d=0; //variable which is used as a criterion to stop end the forward draw funcion
		
		bdraw();


	/*function which draws small lines and calls itself after a delay*/

	function bdraw()
	{
		var ctx = document.getElementById('canvas').getContext('2d');
		state = 0;
		ctx.beginPath();
		ctx.moveTo(x,y);
		x=x-dist*Math.cos(angle);
		y=y+dist*Math.sin(angle);
		ctx.lineTo(x,y);
		ctx.stroke();
		
		d+=dist; //calculates how much distance turtle has traveled

		if(d<distance)
		setTimeout(bdraw,1); //calls same function after delay of 1ms

		else{
		state = 1;
		interpret(); }//if the required distance has been covered, render is called

		}
	}


	function turnleft(ang)
	{
			
		ang=((ang*Math.PI)/180); //ang in degrees shouldbe converted to radians
		angle+=ang;
		
		if(angle>2*Math.PI)
		{
			angle=angle-(2*Math.PI); //to make sure that angle is always between 0 and 360
		}
		state = 1;
		interpret();


		
	}


	function turnright(ang)
	{

		ang=((ang*Math.PI)/180); //ang in degrees shouldbe converted to radians
		angle-=ang;
		
		if(angle<0)
		{
			angle=angle+2*Math.PI;
		}	
		state = 1;
		interpret();

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
		state = 1;
		interpret();
	}

	function center() //makes the cursor go to center
	{
		x=width/2;
		y=height/2;
		//document.write(x+" "+y);
		state = 1;
		interpret();
	}


	function go(x_position,y_position)
	{
		x=x_position; //goes to the given x,y coordinates
		y=y_position;
		state = 1;
		interpret();
	}


	function gox(x_position)
	{
		x=x_position; //goes to given x coordinate keeping y coordinate constant
		state = 1;
		interpret();
	}

	function goy(y_position)
	{
		y=y_position;
		state = 1;
		interpret();
	}

	function getx()
	{
		return x; //returns x
	}

	function gety()
	{
		return y;
	}

	function top(distance)
	{
		var d=0; //variable which is used as a criterion to stop end the forward draw funcion

		tdraw();


	/*function which draws small lines and calls itself after a delay*/

	function tdraw()
	{
		var ctx = document.getElementById('canvas').getContext('2d');

		ctx.beginPath();
		ctx.moveTo(x,y);
		y=y-dist;
		ctx.lineTo(x,y);
		ctx.stroke();

		d+=dist; //calculates how much distance turtle has traveled

		if(d<distance)
		setTimeout(tdraw,1); //calls same function after delay of 1ms

		else
		{state = 1;
		interpret(); }//if the required distance has been covered, render is called
	}

	}

function down(distance)
	{
		var d=0; //variable which is used as a criterion to stop end the forward draw funcion

		ddraw();


	/*function which draws small lines and calls itself after a delay*/

	function ddraw()
	{
		var ctx = document.getElementById('canvas').getContext('2d');

		ctx.beginPath();
		ctx.moveTo(x,y);
		
		y=y+dist;
		ctx.lineTo(x,y);
		ctx.stroke();

		d+=dist; //calculates how much distance turtle has traveled

		if(d<distance)
		setTimeout(ddraw,1); //calls same function after delay of 1ms

		else
		{state = 1;
		interpret(); }//if the required distance has been covered, render is called
	}

	}

	function right(distance)
	{
		var d=0; //variable which is used as a criterion to stop end the forward draw funcion
		
		rdraw();


	/*function which draws small lines and calls itself after a delay*/

	function rdraw()
	{
		var ctx = document.getElementById('canvas').getContext('2d');
		state = 0;
		ctx.beginPath();
		ctx.moveTo(x,y);
		x=x+dist;
		ctx.lineTo(x,y);
		ctx.stroke();
		
		d+=dist; //calculates how much distance turtle has traveled

		if(d<distance)
		setTimeout(rdraw,1); //calls same function after delay of 1ms

		else{
		state = 1;
		interpret(); }//if the required distance has been covered, render is called

		
	

	}


	}


	function left(distance)
	{
		var d=0; //variable which is used as a criterion to stop end the forward draw funcion
		
		ldraw();


	/*function which draws small lines and calls itself after a delay*/

	function ldraw()
	{
		var ctx = document.getElementById('canvas').getContext('2d');
		state = 0;
		ctx.beginPath();
		ctx.moveTo(x,y);
		x=x-dist;
		ctx.lineTo(x,y);
		ctx.stroke();
		
		d+=dist; //calculates how much distance turtle has traveled

		if(d<distance)
		setTimeout(ldraw,1); //calls same function after delay of 1ms

		else{
		state = 1;
		interpret(); }//if the required distance has been covered, render is called

		
	

	}

	}
	function clear()
	{
		canvassize(width,height);	
	}
	function getangle()
	{
	return angle;
	}
/*
* These are the rendering actions library.
*/
