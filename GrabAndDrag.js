window.onload = function()
{
	var canvas = document.getElementById('canvasOne');
	var ctx = canvas.getContext('2d');
	
	
	var mouseX = 0;
	var mouseY = 0;
    var x = 100;
    var y = 100;
	var isMouseDown = false;
	
	$('#canvasOne').mousemove(function(e){
		
		mouseX = e.clientX - canvas.offsetLeft;
		mouseY = e.clientY - canvas.offsetTop;
        
        if(isMouseDown)
        {
          x = mouseX;
          y = mouseY;            
        }

	});	
    
    $('#canvasOne').mouseup(function(e){
    
        isMouseDown = false;
    
	});	
	
	function drawScreen()
	{
		ctx.clearRect(0,0,canvas.width, canvas.height);
		ctx.fillStyle = 'red';
        
        
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+150,y);
        ctx.lineTo(x, y+150);
        ctx.lineTo(x,y);
        ctx.fill();
        ctx.closePath();
        
        if(ctx.isPointInPath(mouseX, mouseY))
        {
            ctx.lineWidth = 5;
            ctx.strokeStyle = 'black';
            ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.lineTo(x+150,y);
            ctx.lineTo(x, y+150);
            ctx.lineTo(x,y);
            ctx.stroke();
            ctx.closePath();
            
            
            ctx.fillText("Over",100,100);  
            $('#canvasOne').mousedown(function(e){
                isMouseDown = true;
               
                
            });
        }
	}
		
	setInterval(drawScreen,33);	
}


