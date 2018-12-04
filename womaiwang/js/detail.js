$(".price>a").click(function(){
	$(".jiajia").toggle();
	if($(".jiajia").css("display") == "none"){
		$(this).html("更多优惠<i></i>")
	}else{
		$(this).html("收起<i></i>");
		$(this).children("i").css("backgroundPositionY","-52px");
	}
})
$(".detail").click(function(){
	if($(this).parent().next().css("display") == "block"){
		$(this).prev().css("backgroundPositionX","-122px")
		$(this).parent().next().hide();
		return;
	}
	$(this).prev().css("backgroundPositionX","-150px")
	$(".detail").parent().next().hide();
	$(this).parent().next().show();
})
$.fn.extend({
	fnMove : function(obj){
		$(obj).click(function() {
			if($(this).index() == 0){
				if($(".priceSmallWidth ul").position().left == 0 ){
					$(this).css("background-position", "-36px 0")
					return;
				}else {
					$(".priceSmallWidth ul").animate({"left":$(".priceSmallWidth ul").position().left+$(".priceSmallWidth").width()})
					$(this).css("background-position", "-73px 0")
				}
			}else if($(this).index() == 1){
				if($(".priceSmallWidth ul").position().left <= -$(".priceSmallWidth").width() * 2 ) {
					$(".priceSmall>i").eq(1).css("background-position", "-55px 0")
					return;
				}else{
					$(".priceSmallWidth ul").animate({"left":$(".priceSmallWidth ul").position().left-$(".priceSmallWidth").width()})
				}
			}
		});
	}
})
$(".priceSmall:eq(0)>i").fnMove(".priceSmall:eq(0)>i")
$(".priceSmall:eq(1)>i").fnMove(".priceSmall:eq(1)>i")
$(".priceSmall:eq(2)>i").fnMove(".priceSmall:eq(2)>i")
$.fn.extend({
	// fnSmall : function(){
	// 	this.
	// }
	fnZoom : function(){
		this.fnEnter().fnDrgat().fnLeave();
	},
	fnEnter : function(){
		this.mouseenter(function(event) {
			/* Act on the event */
			var e = event || window.event;
			this.showx = e.pageX - this.offset().left - $("mask").width() / 2;
			this.showy = e.pageY - this.offset().top - $("mask").height() / 2;
			$(".mask").show({"left":this.showx,"top":this.showy},0);
			$(".big").show();
		}.bind(this));
		return $(".mask");
	},
	fnLeave : function(){
		this.mouseleave(function(event) {
			/* Act on the event */
			$(".mask").hide();
			$(".big").hide();
		});
		return this;
	},
	fnDrgat : function(){
		this.bind("mouseenter",function(event){
			/* Act on the event */
			var e = event || window.event;
			this.disx = e.pageX - this.position().left ;
			this.disy = e.pageY - this.position().top ; 
			$(document).bind("mousemove", function(event){
				var e = event || window.event;
				this.fnMove(e);
			}.bind(this));
			$(document).bind("mouseup", function(event) {
				/* Act on the event */
				this.fnUp();
			}.bind(this));
			return false;
		}.bind(this));
		return $(".min");
	},
	fnMove : function(e){
		this.x = e.pageX - this.disx; 
		this.y = e.pageY - this.disy;
		this.maxL = $(".min").width() - this.width();
		this.maxT = $(".min").height() - this.height();
		this.x = Math.min (Math.max( 0, this.x ),this.maxL);
		this.y = Math.min (Math.max( 0, this.y ),this.maxT);
		this.css("left",this.x);
		this.css("top",this.y);
		//大图移动
		this.X = this.x * ($(".big img").width() - $(".big").width()) / this.maxL;
		this.Y = this.y * ($(".big img").height() - $(".big").height()) / this.maxT;
		$(".big img").css("left",-this.X);
		$(".big img").css("top",-this.Y);
	},
	fnUp : function(){
		$(document).unbind("mousemove mouseup");
	}
})
$(".min").fnZoom();