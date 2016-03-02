$(document).ready(function() {
	this.addEventListener('mousemove', function(e) {
		var x = e.pageX + 'px';
		var y = e.pageY + 'px';
		var trail = $('<div></div>', {
			class: 'trail'
		});
		trail.css('left', x);
		trail.css('top', y);
		$('body').append(trail);
		setTimeout(function() {
			trail.remove();
		}, 520);
	});
});