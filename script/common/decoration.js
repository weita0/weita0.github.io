$(document).ready(function() {
	this.addEventListener('mousemove', function(e) {
		var x = e.pageX + 'px';
		var y = e.pageY + 'px';
		var trail = $('<div></div>', {
			class: 'trail'
		});
		trail.css('left', x);
		trail.css('top', y);
		var body = $('body');
		body.append(trail);
		makeItDisappear(trail, 500);
	});

	this.addEventListener('mousedown', function(e) {
		if(e.which === 1) {
			var x = e.pageX + 'px';
			var y = e.pageY + 'px';
			var heart = $('<div></div>', {
				class: 'heart'
			});
			heart.css('left', x);
			heart.css('top', y);
			heart.addClass('fix');
			var body = $('body');
			body.append(heart);
			makeItDisappear(heart, 300);
		}
	});

	function makeItDisappear(element, milliSecond) {
		setTimeout(function() {
			element.remove();
		}, milliSecond);
	}
});