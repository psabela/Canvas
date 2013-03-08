var Debugger = function () { };
Debugger.log = function (message) {
	try {
		console.log(message);
	} 
	catch (exception) {
		return;
	}
}

//notNaN(Object.prototype, ‘x’);
//notNaN(Object.prototype, ‘y’);
function notNaN(obj, name){
	var key = '__' + name;
	obj.__defineGetter__(name, function(){
	return this[key];
	});
	obj.__defineSetter__(name, function(v) {
	if(typeof v !== 'number' || isNaN(v)){
		throw new TypeError(name + ' isNaN');
	}
	this[key] = v;
	});
}

window.requestAnimFrame = (function(){
		return  window.requestAnimationFrame       || 
				window.webkitRequestAnimationFrame || 
				window.mozRequestAnimationFrame    || 
				window.oRequestAnimationFrame      || 
				window.msRequestAnimationFrame     || 
				function( callback ){
					window.setTimeout(callback, 17);
				};
 })();	

window.cancelAnimationFrame = (function () {
		return 	window.cancelRequestAnimationFrame ||
				window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame ||
				window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame ||
				window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame ||
				window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame ||
				window.clearTimeout);
})();
