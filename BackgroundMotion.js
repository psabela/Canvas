window.onload = function() 
{ 
	canvasApp(); 
}
function canvasApp()
{
	var intervalId;
	var canvas=document.getElementById('canvasOne');
	var ctx=canvas.getContext('2d');
	
	var grid = new Grid();
	grid.width = canvas.width;
	grid.height = canvas.height;
	grid.scaleX = 1;
	grid.scaleY = 1;
	grid.draw(ctx);
	
	var imgX = canvas.width * grid.scaleX;
	var imgY = canvas.height * grid.scaleY;
	var shift = 0;
	
	$(document).keydown(function(e){
			switch(e.which)
			{
				case 37: 
					clearInterval(intervalId);
					intervalId = setInterval(shiftBackgroundLeft,33);
				break;
				case 39: 
					clearInterval(intervalId);
					intervalId = setInterval(shiftBackgroundRight,33);
				break;
				default: return;
			}
			e.PreventDefault();
		
		});
	

	
	function shiftBackgroundRight()
	{	
		ctx.setTransform(1,0,0,1,0,0);	
		ctx.clearRect(0,0,canvas.width,canvas.height);
				
		//center image
		ctx.translate(shift, 0);
		grid.draw(ctx);
		
		//left image
		ctx.translate(-1*imgX,0);
		grid.draw(ctx);	
		
		//right image
		ctx.translate(2*imgX,0);
		grid.draw(ctx);	
				
		if(shift > imgX)
		{
			shift = 0;
			ctx.translate(-1*imgX,0);
			grid.draw(ctx);		
		}
		shift+=1;

		
	}

	function shiftBackgroundLeft()
	{
		ctx.setTransform(1,0,0,1,0,0);	
		ctx.clearRect(0,0,canvas.width,canvas.height);
		
		//center image
		ctx.translate(shift, 0);
		grid.draw(ctx);
		//right image
		ctx.translate(imgX,0);
		grid.draw(ctx);
		//left image
		ctx.translate(-2*imgX,0);
		grid.draw(ctx);	

		if(shift < -1*imgX)
		{
			shift = 0;
			ctx.translate(imgX,0);
			grid.draw(ctx);		
		}
		shift+=-1;		
	}	
	
}
	
	














