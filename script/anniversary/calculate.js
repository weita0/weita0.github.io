$(document).ready(function() {
	var oneDay = 24 * 60 * 60 * 1000;
	var firstDate = new Date(2014,08,04);
	var secondDate = Date.now();

	var days_between = Math.round(Math.abs((firstDate.getTime() - secondDate)/oneDay));

	$('#days').html(days_between);

});