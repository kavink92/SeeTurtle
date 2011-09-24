/*
*render function will execute
*the commands from the user
*the function_table array will pop a pointer function everytime
* render is called that function is executed
*/

	function render()
	{


		if((function_table.length)>0)
		{

		(function_table.pop()).execute_function(); //idea for using each variable for a function is that we can pass the arguments for the function also
				                                                   //execute function will execute each function in the object using their arguments.

		interpret();
		}


	}


