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
	},
	//定义main中移动的方法
	fnMainYD : function(obj1, obj2,obj3){
		this.mouseenter(function(event) {
			/* Act on the event */
			$(obj1).show();
		}).mouseleave(function(event) {
			/* Act on the event */
			$(obj1).hide();
		}).on("click", ".jiao1Left", function(){
			if($(obj2).position().left == 0){
			$(obj2).animate({left: -$(obj2).width()});
			}else if($(obj2).position().left == -$(obj3).width()){
				$(obj2).animate({left: 0});
			}
		}).on("click", ".jiao1Right", function(){
			if($(obj2).position().left == 0){
				$(obj2).animate({left: -$(obj2).width()});
			}else if($(obj2).position().left == -$(obj3).width()){
				$(obj2).animate({left: 0});
			}
		})
	},
	//定义鲜艳效果的方法
	fnxy:function(obj1){
			this.mouseenter(function(event) {
			/* Act on the event */
			$(obj1).show().animate({left:242}, 800, function(){
				$(obj1).hide().css({left:-242})
			})
		})
	},
	//小轮播
	fnTimer : function(index){
		this.index = index;
		this.timer = setInterval(function(){
			this.index++;
			this.fnAutoplay(this.index);
		}.bind(this),2000);
		return this;
	},
	fnAutoplay : function(index){
			if(this.index == $(this).length + 1){
				this.index = 1;
				$(".wfgd div").css({left:0})
			}
			$(this).eq(this.index==2?0:this.index).css("backgroundPosition","-24px 0").siblings().css("backgroundPosition","0 0");
			$(".wfgd div").animate({left:-480*this.index});
	},
	fnShow : function(obj){
		this.mouseenter(function(event) {
				/* Act on the event */
			$(obj).show();
		}).mouseleave(function(event) {
				/* Act on the event */
			$(obj).hide();
		});
	},
	fnClick : function(){
		var that = this;
		this.mouseenter(function(){
			/* Act on the event */
			clearInterval(that.timer);
			index = $(this).index();
			that.fnAutoplay(index);
		}).mouseleave(function(){
			/* Act on the event */
			clearInterval(this.timer);
			this.timer = setInterval(function(){
				this.index++;
				this.fnAutoplay(this.index);
			}.bind(this),2000);
		}.bind(this));
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
$(".bannerCenter").mouseenter(function(event) {
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
$.ajax({
	type : "get",
	url : "json/doubleTwo.json",
	success : function(msg){
		var arr = msg.list;
		var str = `<ul class="dtwoleft left">
						<li><a href=""><img src="image/${arr[0].src}" alt=""></a></li>
					</ul>
					<div class="dtworight right">
						<ul>
							<li><a href=""><img src="image/${arr[1].src}" alt=""></a></li>
							<li><a href=""><img src="image/${arr[2].src}" alt=""></a></li>
							<li><a href=""><img src="image/${arr[3].src}" alt=""></a></li>
							<li><a href=""><img src="image/${arr[4].src}" alt=""></a></li>
							<li><a href=""><img src="image/${arr[5].src}" alt=""></a></li>
							<li><a href=""><img src="image/${arr[6].src}" alt=""></a></li>
							<li><a href=""><img src="image/${arr[7].src}" alt=""></a></li>
							<li><a href=""><img src="image/${arr[8].src}" alt=""></a></li>
							<li><a href=""><img src="image/${arr[9].src}" alt=""></a></li>
							<li><a href=""><img src="image/${arr[10].src}" alt=""></a></li>
						</ul>
						<ul>
							<li><a href=""><img src="image/${arr[11].src}" alt=""></a></li>
							<li><a href=""><img src="image/${arr[12].src}" alt=""></a></li>
							<li><a href=""><img src="image/${arr[13].src}" alt=""></a></li>
							<li><a href=""><img src="image/${arr[14].src}" alt=""></a></li>
						</ul>
					</div>`
	$(".dtwo").html(str);
	}
})
$(".dtwo").on("mouseenter", "li",function(event) {
	/* Act on the event */
	this.div = $("<div></div>");
	this.div.css({'width': $(this).width(),
		     'height': $(this).height(),
		     'background':"rgba(255,0,0,0.3)",
		     'position':'absolute',
		     'left':0,
		 	 'top':0});
	this.div.appendTo($(this))
}).on("mouseleave", "li", function(event) {
	/* Act on the event */
	this.div.remove();
});
//mainOne
$(".mainOne .mainbottomright").fnMainYD(".mainOne .jiao1 li", ".mainOne .mainbottomyd", ".mainOne .mainbottomright");
$(".mainbottomright li a img").mouseenter(function(event) {
	/* Act on the event */
	$(this).stop().animate({width:216,height:216}, 600)
}).mouseleave(function(event) {
	/* Act on the event */
	$(this).stop().animate({width:180,height:180}, 600)
});
$(".mainOne .bottomleft").fnxy(".mainOne .bottomleft .aImg")
//mainThree
$(".mainThree .mainThreebottom").fnMainYD(".mainThree .jiao1 li", ".mainThree .mainbottomyd",".mainThree .mainThreebottom");
//floor选项卡
$(".floorOne .floorRightTop li").fnInit(".floorOne .floorRight>ul:last-child>li", "floorxxk", "displayblock");
$(".floorTwo .floorRightTop li").fnInit(".floorTwo .floorRight>ul:last-child>li", "floorxxk", "displayblock");
$(".floorThree .floorRightTop li").fnInit(".floorThree .floorRight>ul:last-child>li", "floorxxk", "displayblock");
$(".floorFour .floorRightTop li").fnInit(".floorFour .floorRight>ul:last-child>li", "floorxxk", "displayblock");
$(".floorFive .floorRightTop li").fnInit(".floorFive .floorRight>ul:last-child>li", "floorxxk", "displayblock");
$(".floorSix .floorRightTop li").fnInit(".floorSix .floorRight>ul:last-child>li", "floorxxk", "displayblock");
$(".floorSeven .floorRightTop li").fnInit(".floorSeven .floorRight>ul:last-child>li", "floorxxk", "displayblock");
$(".floorEight .floorRightTop li").fnInit(".floorEight .floorRight>ul:last-child>li", "floorxxk", "displayblock");
$(".floorNine .floorRightTop li").fnInit(".floorNine .floorRight>ul:last-child>li", "floorxxk", "displayblock");
$(".floorTen .floorRightTop li").fnInit(".floorTen .floorRight>ul:last-child>li", "floorxxk", "displayblock");
$(".floorEleven .floorRightTop li").fnInit(".floorEleven .floorRight>ul:last-child>li", "floorxxk", "displayblock");
//floor鲜艳
$(".floorOne .bottomleft").fnxy(".floorOne .bottomleft .aImg")
$(".floorTwo .bottomleft").fnxy(".floorTwo .bottomleft .aImg")
$(".floorThree .bottomleft").fnxy(".floorThree .bottomleft .aImg")
$(".floorFour .bottomleft").fnxy(".floorFour .bottomleft .aImg")
$(".floorFive .bottomleft").fnxy(".floorFive .bottomleft .aImg")
$(".floorSix .bottomleft").fnxy(".floorSix .bottomleft .aImg")
$(".floorSeven .bottomleft").fnxy(".floorSeven .bottomleft .aImg")
$(".floorEight .bottomleft").fnxy(".floorEight .bottomleft .aImg")
$(".floorNine .bottomleft").fnxy(".floorNine .bottomleft .aImg")
$(".floorTen .bottomleft").fnxy(".floorTen .bottomleft .aImg")
$(".floorEleven>div:first-child .bottomleft").fnxy(".floorEleven>div:first-child .bottomleft .aImg")
$(".floorTwelve .bottomleft").fnxy(".floorTwelve .bottomleft .aImg")
//floor中的轮播
$(".floorRight .hover").fnTimer(0).fnClick();
$(".wfgd").fnShow(".wfgd .jiao1 li");
//吸顶操作
$(window).scroll(function(){
	if( $(document).scrollTop() > 945){
		$(".searchWrap").css({"position":"fixed","z-index":999,"top":0,"background":"url('image/hbg.png') repeat-x","backgroundSize":"auto 153px"});
		$(".keyWord").hide();
	}else{
		$(".searchWrap").css({"position":"initial","background":"#fff"});
		$(".keyWord").show();
	}
})
//楼梯
$(window).scroll(function(){
	if( $(document).scrollTop() > 1575 && $(document).scrollTop() < $(".lastContent").offset().top){
		$(".stairs").show();
	}else{
		$(".stairs").hide();
	}
	var index = Math.floor(($(document).scrollTop() - $(".floorOne").offset().top) / $(".floorOne").height());
	if(index >=0){
		$(".stairs li").eq(index).addClass("active").siblings().removeClass('active');
	}
})
$(".stairs li").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
	var index = $(this).index();
	$(document).scrollTop( $(".floorOne").offset().top + $(".floorOne").height()*index )
})