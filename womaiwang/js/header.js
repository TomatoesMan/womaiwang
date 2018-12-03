//topNav我的账户
$(".text").mouseenter(function() {
	/* Act on the event */
	$(this).css({
		border: '1px solid #8cb91e',
		"border-bottom" : "1px solid #fff",
		background : "#fff"
	});
	$(this).next("div").show();;
	$(this).children('a').css('color', '#8cb91e');
}).mouseleave(function() {
	/* Act on the event */
	$(this).css({
		border: "none",
		background : "#f5f5f5"
	});
	$(this).children('a').css('color', '#000');
	$(this).next("div").hide();;
});
$(".text").next("div").mouseenter(function() {
	/* Act on the event */
	$(this).show();
	$(this).prev(".text").css({
		border: '1px solid #8cb91e',
		"border-bottom" : "1px solid #fff",
		background : "#fff"
	});
	$(this).prev(".text").children('a').css('color', '#8cb91e');
}).mouseleave(function() {
	/* Act on the event */
	$(this).prev(".text").css({
		border: "none",
		background : "#f5f5f5"
	});
	$(this).prev(".text").children('a').css('color', '#000');
	$(this).hide();;
});
//search
$(".search").children('input').focus(function() {
	/* Act on the event */
	$(this).attr("value" , " ");
}).blur(function() {
	/* Act on the event */
	$(this).attr("value" , "12.12攻略 100元神劵来袭");
	$(this).css("color","#c30000");
});
//nav
$(".navright .text").mouseenter(function() {
	/* Act on the event */
	$(this).css({
		border: '1px solid #8cb91e',
		"border-bottom" : "2px solid #fff",
		background : "#fff"
	});
	$(this).next("div").show();;
	$(this).children('a').css('color', '#8cb91e');
}).mouseleave(function() {
	/* Act on the event */
	$(this).css({
		border: "none",
		background : "#fff",
		"border-bottom":"2px solid #8cb91e",
		height : 46
	});
	$(this).children('a').css('color', '#000');
	$(this).next("div").hide();;
});
$(".navright .text").next("div").mouseenter(function() {
	/* Act on the event */
	$(this).show();
	$(this).prev(".text").css({
		border: '1px solid #8cb91e',
		"border-bottom" : "2px solid #fff",
		background : "#fff"
	});
	$(this).prev(".text").children('a').css('color', '#8cb91e');
}).mouseleave(function() {
	/* Act on the event */
	$(this).prev(".text").css({
		border: "none",
		background : "#fff",
		"border-bottom":"2px solid #8cb91e"
	});
	$(this).prev(".text").children('a').css('color', '#000');
	$(this).hide();;
});
//banner
$.fn.extend({
	//定义选项卡方法
	fnInit : function( obj, str1, str2 ){
		this.mouseenter(function(){
			/* Act on the event */
			$(this).addClass(str1).siblings().removeClass(str1);
			var index = $(this).index();
			$(obj).eq(index).addClass(str2).siblings().removeClass(str2);
		});
	}
})
//banner左边的大选项卡
$(".bannerLeft>li").mouseenter(function() {
	/* Act on the event */
	$(this).css("background","white").siblings().css('background', '#3ea600');
	$(this).children('i').css('backgroundPosition', '-18px 0').end().siblings().children('i').css('backgroundPosition', '0 0');
	$(this).children('a').css('color', '#3ea600').end().siblings().children('a').css('color', 'white');
	var index = $(this).index();
	$(".bannerLeft+ul>li").eq(index).show().siblings().hide();
});
$(".bannerLeft+ul>li").mouseenter(function() {
	/* Act on the event */
	$(this).show();
	var index  = $(this).index();
	$(".bannerLeft>li").eq(index).css('background', 'white');
	$(".bannerLeft>li").eq(index).children('a').css('color', '#3ea600');
	$(".bannerLeft>li").eq(index).children('i').css('backgroundPosition', '-18px 0');
}).mouseleave(function() {
	/* Act on the event */
	$(this).hide();
	$(".bannerLeft>li").css('background', '#3ea600');
	$(".bannerLeft>li").children('a').css('color', 'white');
	$(".bannerLeft>li").children('i').css('backgroundPosition', '0 0');
});;
$(".bannerLeft").mouseleave(function() {
	/* Act on the event */
	$(this).children('li').siblings().css('background', '#3ea600');
	$(this).children('li').children('i').css('backgroundPosition', '0 0');
	$(this).children('li').children('a').css('color', 'white');
	$(".bannerLeft+ul>li").hide();
});
//navLeft动画
$(".navLeft").mouseenter(function(){
	$(".bannerLeft").slideDown(500)
})
$(".banner").mouseleave(function(){
	$(".bannerLeft").slideUp(500);
})