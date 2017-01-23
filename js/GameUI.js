// canvas elements for the main shootemall game

var GameUI = (function() {

	var instance;

	function GameUI() {

		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext('2d');
		document.body.appendChild(canvas);

		var that = this;

		this.setWidth = function(width) {
			canvas.width = width;
		}

		this.setWidth = function(height) {
			canvas.height = height;
		}

		this.getWidth = function() {
			return canvas.width;
		}

		this.getHeight = function() {
			return canvas.height;
		}

		this.getCanvas = function() {
			return canvas;
		}

		this.show = function() {
			canvas.style.display = 'block';
		}

		this.hide = function() {
			canvas.style.display = 'none';
		}

		this.clear = function(x, y, width, height) {
			ctx.clearRect(x, y, width, height);
		}

		this.scrollWindow = function(x, y) {
			ctx.translate(x, y);
		}

		this.draw = function(image, sx, sy, sWidth, sHeight, x, y, width, height ) {
			ctx.drawImage(image, sx, sy, sWidth, sHeight, x, y, width, height);
		}

		this.makeBox = function(x, y, width, height) {
			ctx.rect(x, y, width, height);
			ctx.fillStyle = 'black';
			ctx.fill();
		}

		this.writeText = function(text, x, y) {
			ctx.font = '20px Sans-Serif';
			ctx.fillStyle = 'white';
			ctx.fillText(text, x, y);
		}
		this.drawDottedPath = function() {
			ctx.beginPath(); 
	    ctx.lineWidth="1";
	    ctx.strokeStyle="green"; // Green path
	    ctx.setLineDash([5, 15]);
	    ctx.moveTo(that.player.gunPointX, that.player.gunPointY);
	    ctx.lineTo(mouse.x,  mouse.y);
	    ctx.stroke(); // Draw it
		}

	}

 	return {
 		getInstance: function(){
 			if (instance == null) {
 				instance = new GameUI();
 			}

 			return instance;
 		}
 	}

})();