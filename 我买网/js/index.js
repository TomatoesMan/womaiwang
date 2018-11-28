//topNav我的账户
$(".Me").mouseenter(function() {
	/* Act on the event */
	$(this).children('.text').css({
		border: '1px solid #8cb91e',
		"border-bottom" : "1px solid #fff",
		background : "#fff"
	});
	$(this).children("div").show();;
	$(this).children('.text').children('a').css('color', '#8cb91e');
}).mouseleave(function() {
	/* Act on the event */
	$(this).children('.text').css({
		border: "none",
		background : "#f5f5f5"
	});
	$(this).children('.text').children('a').css('color', '#000');
	$(this).children("div").hide();;
});
