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
//定义选项卡方法
$.fn.extend({
	fnInit : function( obj, str1, str2 ){
		this.mouseenter(function(){
			/* Act on the event */
			$(this).addClass(str1).siblings().removeClass(str1);
			var index = $(this).index();
			$(obj).eq(index).addClass(str2).siblings().removeClass(str2);
		});
	}
})
//banner右边的小选项卡
$(".bannerRightTop li").fnInit( ".bannerRightTop+ul li", "bannerRightTopOne", "displayblock" );
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
//大图轮播
var index = 0;
function autoplay(){
	if(index == $(".hover").length){
		index = 0;
	}
	$(".hover").eq(index).css("backgroundPosition","-24px 0").siblings().css("backgroundPosition","0 0");
	$(".bannerImage li").eq(index).css("z-index","1").siblings().css("z-index","0");
}
var timer = setInterval(function(){
	index++;
	autoplay();
},2000);
$(".hover").mouseenter(function() {
	/* Act on the event */
	clearInterval(timer);
	index = $(this).index();
	autoplay();
}).mouseleave(function() {
	/* Act on the event */
	clearInterval(timer);
	timer = setInterval(function(){
		index++;
		autoplay();
	},2000);
});
$(".bannerImage").mouseenter(function(event) {
	/* Act on the event */
	$(".jiao li").show();
}).mouseleave(function(event) {
	/* Act on the event */
	$(".jiao li").hide();
});
$(".jiao li").mouseenter(function(event) {
	/* Act on the event */
	$(".jiao li").show();
}).mouseleave(function(event) {
	/* Act on the event */
	$(".jiao li").hide();
	clearInterval(timer);
	timer = setInterval(function(){
		index++;
		autoplay();
	},2000);
});
$(".jiao").on("click",".jiaoLeft",function(){
	clearInterval(timer);
	index--;
	if(index == -1){
		index = $(".hover").length - 1;
	}
	autoplay();
}).on("click",".jiaoRight",function(){
	clearInterval(timer);
	index++;
	autoplay();
})
//bannerRightCenter
$(".bannerRightCenter li").on("mouseenter", "img", function(){
	var src = $(this).attr("s");
	$(this).attr("src","image/"+src+"_.jpg");
}).on("mouseleave", "img", function(){
	var src = $(this).attr("s");
	$(this).attr("src","image/"+src+".jpg");
})
//dtwo
$(".dtwo li").mouseenter(function(event) {
	/* Act on the event */
	this.div = $("<div></div>");
	this.div.css({'width': $(this).width(),
		     'height': $(this).height(),
		     'background':"rgba(255,0,0,0.3)",
		     'position':'absolute',
		     'left':0,
		 	 'top':0});
	this.div.appendTo($(this))
}).mouseleave(function(event) {
	/* Act on the event */
	this.div.remove();
});
//mainOne
$(".mainbottomright ul").mouseenter(function(event) {
	/* Act on the event */
	$(".jiao1 li").show();
}).mouseleave(function(event) {
	/* Act on the event */
	$(".jiao1 li").hide();
}).on("click", ".jiao1Left", function(){
	$(".mainbottomright ul").animate({left: -$(".mainbottomright ul").width()})
})
