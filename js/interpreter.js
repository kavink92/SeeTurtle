/* 	this file contains the important function of SeeTurtle		
*	function line interpreter are there in this file
*	Author KAVIN KARTHIK
*	MENTOR KASHYAP GARIMELLA 
*/

		
		var render_timeout=10; 
		state = 0;

	

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


	var line_no = 0;				//keeps count of the line no, or points the the particular line
	
	var lines;					//contains the array of all lines , text is split by '\n'
	
	
	function interpret_repeat(x,y,l)			//this function is used to add the given set of commands under repeat that many times 
	{
		//document.write(state);
		lines[x] = lines[x].replace("{","");		//it removes the '}' from the text
		lines[y] = lines[y].replace("}","");
		var i=1;
		var line_count = y+1;
		var k;
		while(i<l)
		{
			k = x;
			while(k<=y)				//this loop adds the given commands to be repeated ,that many times in the text
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
		var token = text.split(" ");			//splits the given text by space
		return token;
		
	}

	function status(txt)
	{
		state = 1;				//this function is brought to avoid the problem of commands being executed even before submit button is 							//pressed , it becomes 1 when submit is pressed . Only when state is 1, the functions are executed
		split_lines(txt);
	}
	function split_lines(txt)
	{
		lines = null;
		line_no = 0;
		lines = txt.split("\n");			//splits the lines 
		document.getElementById('mytext').style.backgroundColor = 'rgb(50,100,50)';
		interpret();
		
		
		//document.getElementById('mytext').style.backgroundColor = 'rgb(234,50,50)';
	}

	function interpret()
	{	
	
		var canvas = document.getElementById("canvas");
	      
	        var ctx = canvas.getContext("2d");

		var token = tokenize(lines[line_no]);			//tokenizes each line
		
	
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
						if(lines[li].indexOf('{')!=-1) 		//after repeat checks where the '{' is found
						{
							count1 = li;
							
						}
						if(lines[li].indexOf('}')!=-1)		//after repeat checks where the'}' is found
						{
							 count2 = li;
							 
						}						
				
						if(count1 !=0 && count2 !=0)		//if both are found it breaks
						{ 
						
							break;
						}	
						li++;					
					}
					if(state==1){
					interpret_repeat(count1, count2,l); }		//gives info to interpret_repeat

					else
					{ line_no++;// document.write("0");
					interpret(); }
				}

				else
				{
					//document.write("Error in line "+line_no);
					document.getElementById('mytext').style.backgroundColor = 'rgb(50,0,0)';		//if error is detected
					setTimeout(interpret,500);
				}
			}
			if(token[0] == "canvascolor")
			{
				if(token.length >= 4)
				{
					
					var l=parseInt(token[1]);		//parses the text to number
					var m=parseInt(token[2]);
					var n=parseInt(token[3]);					
					
					line_no++;
					
					if(state == 1)					
					{
					function_table.push(new ftable_constructor(canvascolor,l,m,n));		//only if state is 1, it is executed
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
		if(token[0] == "end")
		{
			if(token.length == 1)		//end is not mandatory, but it makes state= 0
				{
					state = 0;
				}

				else
				{
					//document.write("Error in line "+line_no);
					document.getElementById('mytext').style.backgroundColor = 'rgb(50,0,0)';
					setTimeout(interpret,500);
				}
		
		}
		//setTimeout(interpret,500);
		
	}

	
