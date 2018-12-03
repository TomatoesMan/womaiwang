//定义悬浮条的方法
$(".suspend").on('mouseenter', 'li', function(event) {
	event.preventDefault();
	/* Act on the event */
	$(this).children("span").show();
	$(this).children('i').css("backgroundPositionY","-42px");
}).on('mouseleave', 'li', function(event) {
	event.preventDefault();
	/* Act on the event */
	$(this).children("span").hide();
	$(this).children('i').css("backgroundPositionY","-8px");
}).on('click', '.goTop', function(event) {
	/* Act on the event */
	$("body,html").animate({scrollTop:0},500);
}).on('click', '.shopcar', function(event) {
	/* Act on the event */
	$(".suspend").animate({right:0}, 500,function(){
		$(".myShopCar").animate({right:0}, 500);
	})
}).on('click', '.myShopCar i', function(event) {
	/* Act on the event */
	$(".suspend").animate({right:-274}, 500)
	$(".myShopCar").animate({right:-274}, 500);
});