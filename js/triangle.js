/*
 * This file tests the rendering actions.
 */

	 render_timeout=10;                                //global variable which timeout value and can be changed

	function test_actions()
	{


		/* declared without a "var" which implies that it is a global variable and can be used by other files also
		   function_table is an array of objects(one object for each function), the constructor for the object is defined below
		   the object has pointer pointing to a particular function*/

		function_table=new Array;	
		
		function execute_function()		//it is a function of the object and it will execute the function pointed by the pointer
		{
		
			if((typeof this.a==null)&&(typeof this.b==null)&&(typeof this.c==null))		//typeof checks if a var is null
				this.p();

			else
			{

				if((typeof this.b==null)&&(typeof this.c ==null))
				this.p(this.a);
			
				else
				{
					if(typeof this.c==null)
					return this.p(this.a,this.b);
	
					else
					return this.p(this.a,this.b,this.c);
				}
			}
			
		
		

		}

		//constructor overloading, p is a pointer pointing to a particular function, a,b,c are argunments to that function
		function ftable_constructor(p)
		{
			this.p=p;
			this.execute_function=execute_function;
		}

		function ftable_constructor(p,a)
		{
			this.p=p;
			this.a=a;
			this.execute_function=execute_function;
		}

		function ftable_constructor(p,a,b)
		{
			this.p=p;
			this.a=a;
			this.b=b;
			this.execute_function=execute_function;
		}

		function ftable_constructor(p,a,b,c)
		{
			this.p=p;
			this.a=a;
			this.b=b;
			this.c=c;
			this.execute_function=execute_function;
		}

		//pushing the function
		function_table.push(new ftable_constructor(forward,100));
		function_table.push(new ftable_constructor(turnleft,120));
		function_table.push(new ftable_constructor(forward,100));
		function_table.push(new ftable_constructor(turnleft,120));
		function_table.push(new ftable_constructor(forward,100));
		function_table.push(new ftable_constructor(turnleft,120));
		function_table.push(new ftable_constructor(penwidth,3));
		function_table.push(new ftable_constructor(pencolor,200,0,0));
		function_table.push(new ftable_constructor(canvassize,700,500));
		function_table.push(new ftable_constructor(canvascolor,0,100,0));


		setTimeout(render,render_timeout);

	}


	
