$(document).ready(function (){

var count = 1

function renderWeek() {
	var calendar = $('<ul></ul>')
	for(var i=0; i < 2000; i++) {
		var weekday = count
		var singleDate = $('<li></li>')
		calendar.append(singleDate.append("Day  " + weekday))
		count ++
	}

	$('.calendarList').append(calendar)

}

var scrollTop = 0;
var docHeight
var winHeight 
var winViewPercent 
var scrollPercent 

$(window).scroll(function(){
	 scrollTop = $(window).scrollTop()
	 docHeight = $(document).height()
	 winHeight = $(window).height()
	 winViewPercent = (1-(docHeight-winHeight)/docHeight)
	 scrollPercent = ((scrollTop) / (docHeight - winHeight) * 100)
		if(scrollPercent>95){
			renderWeek()
		}
})


renderWeek()


})







