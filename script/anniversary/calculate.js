$(document).ready(function() {
		
	var daysBetween = function() {
		var oneDay = 24 * 60 * 60 * 1000;
		var firstDate = new Date(2014,08,04);
		var secondDate = Date.now();
		var days_between = Math.round(Math.abs((firstDate.getTime() - secondDate)/oneDay));
		return days_between;
	};
	$('#days').html(daysBetween());

});