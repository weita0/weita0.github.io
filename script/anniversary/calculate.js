var oneDay = 24 * 60 * 60 * 1000;
var firstDate = new Date(2014,08,04);
var secondDate = Date.now();

var diffDays = Math.around(Math.abs((firstDate.getTime() - secondDate.getTime())/oneDay));

$('#days').html(diffDays);