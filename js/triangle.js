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




                //TODO: having a separate stack_count variable is a bad idea :).
                //Why don't you just use stack.length itself? Like:
                // if (stack.length > 0) { .. }
		if(stack_count<len)
		{	stack_count++;					//stack count is made so as to stop the application correctly
			var value=stack.pop();


                        //TODO(HINT): switch case is good idea. But it will be
                        //slow because it has to do so many comparisons. Better
                        //ways are:
                        // 1. Hash table
                        // 2. Table of pointers, so that you can directly jump
                        // to the right function like this:
                        //      fTable[value]
                        // 3. Make each action a class, inherited from a 
                        // super class. The super class will have a function
                        // pointer and the inherited classes will fill it with
                        // appropriate functions. You just need to call the
                        // super class function and that's it.
                        //
                        // Out of the three, the second one is the best because
                        // it takes less space and is also faster. 3rd one is
                        // good but it add a pointer to each action object you
                        // create.
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
