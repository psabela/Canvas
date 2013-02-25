function Grid()
{
	this.gridSpacing = 20;
	this.width = 500;
	this.height = 300;
	this.scaleX = 1;
	this.scaleY = 1;
}		
Grid.prototype.draw = function(ctx) 
{		
		ctx.save();
		ctx.scale(this.scaleX,this.scaleY);
		//DRAW RECTANGLE
		ctx.fillStyle = "Red";
		ctx.fillRect(60,60,this.gridSpacing*5,this.gridSpacing*5);

		//set style of the grid
		ctx.strokeStyle = "Black";
		ctx.lineWidth = 1;
		
			
		for(var y = 0; y < this.height; y+=this.gridSpacing)
		{
			ctx.beginPath();
			ctx.moveTo(0,y);
			ctx.lineTo(this.width, y)
			ctx.stroke();
		}
		for(var x = 0; x < this.width; x+=this.gridSpacing)
		{
			ctx.beginPath();
			ctx.moveTo(x,0);
			ctx.lineTo(x, this.height)
			ctx.stroke();
		}		

		//draw text
		ctx.fillStyle = "White";
		ctx.font = 'bold 20px arial';
		ctx.fillText("[0,0]",10,17);
		ctx.strokeText("[0,0]",10,17);

		ctx.fillStyle = "Red";
		ctx.beginPath();
		ctx.moveTo(0,0);
		ctx.arc(0,0,5,0,Math.PI*2,false);
		ctx.stroke();
		ctx.fill();
		ctx.restore();
	}