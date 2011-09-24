		var w=300;
		var h=150;
		var x=w/2;
		var y=h/2;
		var a=(Math.PI/2);
		var render_timeout=10; 
		state = 0;

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
				this.p(this.a)
			
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


	var line_no = 0;
	var line_width = 54;
	var lines;
	
	function repeat()
	{

	
		if((function_table.length)>0)
		{

		(function_table.pop()).execute_function(); //idea for using each variable for a function is that we can pass the arguments for the function also
				                                                   //execute function will execute each function in the object using their arguments.

		}
		if((function_table.length) == 0)
		{
			line_no++;
			interpret();
		}
	}
	function interpret_repeat(x,y,l)
	{
		//document.write(state);
		lines[x] = lines[x].replace("{","");
		lines[y] = lines[y].replace("}","");
		var i=1;
		var line_count = y+1;
		var k;
		while(i<l)
		{
			k = x;
			while(k<=y)
			{
				lines.splice(line_count,0,lines[k]);
				k++;
				line_count++;
			}
			
			i++;
		}
		//document.write(line_no+"<br/>")
		//document.write(lines);
		state = 1;
		interpret();
		//document.write(state);
			
	}
	function tokenize(text)
	{
		var token = text.split(" ");
		return token;
		
	}

	function status(txt)
	{
		state = 1;
		split_lines(txt);
	}
	function split_lines(txt)
	{
		lines = null;
		line_no = 0;
		lines = txt.split("\n");
		document.getElementById('mytext').style.backgroundColor = 'rgb(50,100,50)';
		interpret();
		
		
		//document.getElementById('mytext').style.backgroundColor = 'rgb(234,50,50)';
	}

	function interpret()
	{	
	
		var canvas = document.getElementById("canvas");
	      
	        var ctx = canvas.getContext("2d");

		var token = tokenize(lines[line_no]);
		
	
			if(token[0] == "repeat")
			{
				if(token.length == 2)
				{
					
					var l=parseInt(token[1]);
				
					line_no++;
					var count1=0;
					var count2=0;
					var li = line_no;
					
					while(li<lines.length)
					{	
						if(lines[li].indexOf('{')!=-1) 
						{
							count1 = li;
							
						}
						if(lines[li].indexOf('}')!=-1)
						{
							 count2 = li;
							 
						}						
				
						if(count1 !=0 && count2 !=0)
						{ 
						
							break;
						}	
						li++;					
					}
					
					if(state==1){
					interpret_repeat(count1, count2,l); }

					else
					{ line_no++;// document.write("0");
					interpret(); }
				}

				else
				{
					//document.write("Error in line "+line_no);
					document.getElementById('mytext').style.backgroundColor = 'rgb(50,0,0)';
					setTimeout(interpret,500);
				}
			}
			if(token[0] == "canvascolor")
			{
				if(token.length == 4)
				{
					
					var l=parseInt(token[1]);
					var m=parseInt(token[2]);
					var n=parseInt(token[3]);					
					
					line_no++;
					
					if(state == 1)					
					{
					function_table.push(new ftable_constructor(canvascolor,l,m,n));
					(function_table.pop()).execute_function(); }
					else
					setTimeout(interpret,500);
				}

				else
				{
					//var k=document.getElementById("error");
					//k.document.write("error");						//("Error in line "+line_no);
					document.getElementById('mytext').style.backgroundColor = 'rgb(50,0,0)';
					setTimeout(interpret,500);
				}
			
			}
			
			if(token[0]=="pencolor")
			{
				if(token.length == 4)
				{
					
					var l=parseInt(token[1]);
					var m=parseInt(token[2]);
					var n=parseInt(token[3]);					
					
					line_no++;
					
					if(state == 1)					
					{
					function_table.push(new ftable_constructor(pencolor,l,m,n));
					(function_table.pop()).execute_function(); }
					else
					setTimeout(interpret,500);
				}

				else
				{
					//var k=document.getElementById("error");
					//k.document.write("error");						//("Error in line "+line_no);
					document.getElementById('mytext').style.backgroundColor = 'rgb(50,0,0)';
					setTimeout(interpret,500);
				}
			}
			
			if(token[0]=="penwidth")
			{
				if(token.length == 2)
				{
					
					var l=parseInt(token[1]);
					
					line_no++;
					
					if(state == 1)					
					{
					function_table.push(new ftable_constructor(penwidth,l));
					(function_table.pop()).execute_function(); }
					else
					setTimeout(interpret,500);
				}

				else
				{
					//var k=document.getElementById("error");
					//k.document.write("error");						//("Error in line "+line_no);
					document.getElementById('mytext').style.backgroundColor = 'rgb(50,0,0)';
					setTimeout(interpret,500);
				}
			}
				
			if(token[0]=="canvassize")
			{
				if(token.length == 3)
				{
					
					var l=parseInt(token[1]);
					var m = parseInt(token[2]);
					
					line_no++;
					
					if(state == 1)					
					{
					function_table.push(new ftable_constructor(canvassize,l,m));
					(function_table.pop()).execute_function(); }
					else
					setTimeout(interpret,500);
				}

				else
				{
					//var k=document.getElementById("error");
					//k.document.write("error");						//("Error in line "+line_no);
					document.getElementById('mytext').style.backgroundColor = 'rgb(50,0,0)';
					setTimeout(interpret,500);
				}
			}
			
			if(token[0] == "go")
		        {
				if(token.length == 3)
				{
					
					var l=parseInt(token[1]);
					var m = parseInt(token[2]);
					
					line_no++;
					
					if(state == 1)					
					{
					function_table.push(new ftable_constructor(go,l,m));
					(function_table.pop()).execute_function(); }
					else
					setTimeout(interpret,500);
				}

				else
				{
					//var k=document.getElementById("error");
					//k.document.write("error");						//("Error in line "+line_no);
					document.getElementById('mytext').style.backgroundColor = 'rgb(50,0,0)';
					setTimeout(interpret,500);
				}
		        }	
		
		if(token[0]=="gox")
		{
			if(token.length == 2)
				{
					
					var l=parseInt(token[1]);
					//var m=parseInt(token[2]);
					//var n=parseInt(token[3]);
					
					line_no++;
					if(state == 1)					
					{function_table.push(new ftable_constructor(gox,l));
					(function_table.pop()).execute_function(); }
					else
					interpret();
				}

				else
				{
					//document.write("Error in line "+line_no);
					document.getElementById('mytext').style.backgroundColor = 'rgb(50,0,0)';
					setTimeout(interpret,500);
				}
			
		}
		
		if(token[0] == "goy")
		{
			if(token.length == 2)
				{
					
					var l=parseInt(token[1]);
					//var m=parseInt(token[2]);
					//var n=parseInt(token[3]);
					
					line_no++;
					if(state == 1)					
					{function_table.push(new ftable_constructor(goy,l));
					(function_table.pop()).execute_function(); }
					else
					interpret(); 
				}

				else
				{
					//document.write("Error in line "+line_no);
					document.getElementById('mytext').style.backgroundColor = 'rgb(50,0,0)';
					setTimeout(interpret,500);
				}
			
		}
	
		if(token[0] == "getx")
		{

			if(token.length == 1)
				{
					
					//var l=parseInt(token[1]);
					//var m=parseInt(token[2]);
					//var n=parseInt(token[3]);
					
					line_no++;
					if(state == 1)					
					{function_table.push(new ftable_constructor(getx));
					(function_table.pop()).execute_function(); }
					else
					interpret();
				}

				else
				{
					//document.write("Error in line "+line_no);
					document.getElementById('mytext').style.backgroundColor = 'rgb(234,50,50)';
					setTimeout(interpret,500);
				}
			
		}
		
		if(token[0] == "gety")
		{
	
			return y;
			
		}

		
		if(token[0] == "forward")
		{	
			if(token.length == 2)
				{
					
					var l=parseInt(token[1]);
					line_no++;
					
					if(state == 1)					
					{
					function_table.push(new ftable_constructor(forward,l));
					(function_table.pop()).execute_function(); }
					else
					setTimeout(interpret,500);
				}

				else
				{
					//var k=document.getElementById("error");
					//k.document.write("error");						//("Error in line "+line_no);
					document.getElementById('mytext').style.backgroundColor = 'rgb(50,0,0)';
					setTimeout(interpret,500);
				}
			
		}
		
		if(token[0] == "backward")
		{
			if(token.length == 2)
				{
					
					var l=parseInt(token[1]);
					//var m=parseInt(token[2]);
					//var n=parseInt(token[3]);
					line_no++;
					
					if(state == 1)					
					{function_table.push(new ftable_constructor(backward,l));
					(function_table.pop()).execute_function(); }
					else
					interpret();
					
	
				}

				else
				{
					//document.write("Error in line "+line_no);
					document.getElementById('mytext').style.backgroundColor = 'rgb(234,50,50)';
					setTimeout(interpret,500);
				}
		}
		
		if(token[0] =="turnleft")
		{
			if(token.length == 2)
				{
					
					var l=parseInt(token[1]);
					
					line_no++;
					
					if(state == 1)					
					{
					function_table.push(new ftable_constructor(turnleft,l));
					(function_table.pop()).execute_function(); }
					else
					setTimeout(interpret,500);
				}

				else
				{
					//var k=document.getElementById("error");
					//k.document.write("error");						//("Error in line "+line_no);
					document.getElementById('mytext').style.backgroundColor = 'rgb(50,0,0)';
					setTimeout(interpret,500);
				}
		
		}
		
		if(token[0] =="turnright")
		{
			if(token.length == 2)
				{
					
					var l=parseInt(token[1]);
					
					line_no++;
					
					if(state == 1)					
					{
					function_table.push(new ftable_constructor(turnright,l));
					(function_table.pop()).execute_function(); }
					else
					setTimeout(interpret,500);
				}

				else
				{
					//var k=document.getElementById("error");
					//k.document.write("error");						//("Error in line "+line_no);
					document.getElementById('mytext').style.backgroundColor = 'rgb(50,0,0)';
					setTimeout(interpret,500);
				}
		
		}
		if(token[0] == "direction")
		{
			if(token.length == 2)
				{
					
					var l=parseInt(token[1]);
					
					line_no++;

					if(state == 1)					
					{function_table.push(new ftable_constructor(direction,l));
					(function_table.pop()).execute_function(); }
					else
					interpret();
				}

				else
				{
					//document.write("Error in line "+line_no);
					document.getElementById('mytext').style.backgroundColor = 'rgb(50,0,0)';
					setTimeout(interpret,500);
				}
			
		}
		
		if(token[0] == "center")
		{
			if(token.length == 1)
				{
					line_no++;

					if(state == 1)					
					{function_table.push(new ftable_constructor(center));
					(function_table.pop()).execute_function(); }
					else
					interpret();
				}

				else
				{
					//document.write("Error in line "+line_no);
					document.getElementById('mytext').style.backgroundColor = 'rgb(50,0,0)';
					setTimeout(interpret,500);
				}
		
		}
		if(token[0] =="top")
		{
			
			if(token.length == 2)
				{
					
					var l=parseInt(token[1]);
					//var m=parseInt(token[2]);
					//var n=parseInt(token[3]);

					line_no++;

					if(state == 1)					
					{function_table.push(new ftable_constructor(top,l));
					(function_table.pop()).execute_function(); }
					else
					interpret();
				}

				else
				{
					//document.write("Error in line "+line_no);
					document.getElementById('mytext').style.backgroundColor = 'rgb(50,0,0)';
					setTimeout(interpret,500);
				}
		
			
		}
		
		if(token[0] =="down")
		{
			
			if(token.length == 2)
				{
					
					var l=parseInt(token[1]);
					//var m=parseInt(token[2]);
					//var n=parseInt(token[3]);
					
					line_no++;
					if(state == 1)					
					{function_table.push(new ftable_constructor(down,l));
					(function_table.pop()).execute_function(); }
					else
					interpret();
				}

				else
				{
					//document.write("Error in line "+line_no);
					document.getElementById('mytext').style.backgroundColor ='rgb(50,0,0)';
					setTimeout(interpret,500);
				}
		
		}
		
		if(token[0]=="left")
		{
			
			
			if(token.length == 2)
				{
					
					var l=parseInt(token[1]);
					
					line_no++;
					
					if(state == 1)					
					{
					function_table.push(new ftable_constructor(left,l));
					(function_table.pop()).execute_function(); }
					else
					setTimeout(interpret,500);

				}

				else
				{
					//var k=document.getElementById("error");
					//k.document.write("error");						//("Error in line "+line_no);
					document.getElementById('mytext').style.backgroundColor = 'rgb(50,0,0)';
					setTimeout(interpret,500);
				}
			
		
		}
		
		if(token[0]=="right")
		{
			
			if(token.length == 2)
				{
					
					var l=parseInt(token[1]);
					//var m=parseInt(token[2]);
					//var n=parseInt(token[3]);
					
					line_no++;

					if(state == 1)					
					{function_table.push(new ftable_constructor(right,l));
					(function_table.pop()).execute_function(); }
					else
					interpret();
				}

				else
				{
					//document.write("Error in line "+line_no);
					document.getElementById('mytext').style.backgroundColor = 'rgb(50,0,0)';
					setTimeout(interpret,500);
				}
		
		}
		if(token[0] == "clear")
		{
			if(token.length == 1)
				{
					line_no++;

					if(state == 1)					
					{function_table.push(new ftable_constructor(clear));
					(function_table.pop()).execute_function(); }
					else
					interpret();
				}

				else
				{
					//document.write("Error in line "+line_no);
					document.getElementById('mytext').style.backgroundColor = 'rgb(50,0,0)';
					setTimeout(interpret,500);
				}
		
		}
		state = 0;
		
	}

	
