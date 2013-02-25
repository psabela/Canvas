function Star()
{
	this.x = 0;
	this.y = 0;
	this.scaleX = 0;
	this.scaleY = 0;
	this.rotate = 0;
	this.alpha = 1;
	this.fillStyle = "hsla(300,50%,50%,0.5)";
	
}

Star.prototype.draw = function(ctx)
{
	ctx.save();
	ctx.translate(this.x , this.y);
	ctx.scale(this.scaleX,this.scaleY);
	
	//star bounding box: width/2 = 66 and height/2 = 64
	ctx.translate(-66,-64);
	
	ctx.rotate(Math.PI/180 * this.rotate);
	ctx.fillStyle = this.fillStyle;
	ctx.globalAlpha = this.alpha;
	
	ctx.beginPath();
	ctx.moveTo(45,136);
	ctx.lineTo(79,97);
	ctx.lineTo(126,121);
	ctx.lineTo(100,76);
	ctx.lineTo(136,37);
	ctx.lineTo(85,47);
	ctx.lineTo(60,3);
	ctx.lineTo(55,55);
	ctx.lineTo(4,64);
	ctx.lineTo(52,84);
	ctx.lineTo(45,136);
	ctx.fill();	
	ctx.closePath();
	
	ctx.restore();
}