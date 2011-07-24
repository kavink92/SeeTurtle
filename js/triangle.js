	/*
 	* This file tests the rendering actions.
 	*/

	var stack_count=0;

	function test_actions()
	 {

		var actions={canvascolor:0,canvassize:1	,pencolor: 2, penwidth: 3, turnleft: 4,forward :5};  		 //enum for actions

		stack=new Array;							//var keyword is not used so as to make stack global

		/*Pushing the actions which have to be performed*/
		stack.push(actions.forward);
		stack.push(actions.turnleft);
		stack.push(actions.forward);
		stack.push(actions.turnleft);
		stack.push(actions.forward);
		stack.push(actions.turnleft);
		stack.push(actions.penwidth);
		stack.push(actions.pencolor);
		stack.push(actions.canvassize);
		stack.push(actions.canvascolor);

		len =(stack.length);			//length of stack
		render(stack);

	}

	// function which pops the stack and call the function corresponding to it
	function render(stack)				
	{	




		if(stack_count<len)
		{	stack_count++;					//stack count is made so as to stop the application correctly
			var value=stack.pop();


			switch(value)
			{
				case 5:
					forward(100);break;

				case 4:
					turnleft(120);break;

				case 3:
					penwidth(2);break;

				case 2:
					pencolor(200,0,0);break;

				case 1:
					canvassize(700,500);break;

				case 0:
					canvascolor(0,100,0);break;
			}

		}


		//canvascolor (0,100,0);
		//canvassize(700,500);
		//pencolor(200,0,0);
		//penwidth(2);
		//center();
		//forward(100);
		//turnleft(120);
		//forward(100);
		//turnleft(120);
		//forward(100);


}
