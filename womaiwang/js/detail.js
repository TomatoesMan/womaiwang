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
	fnSmall : function(){
		this.mouseenter(function(){
			$(this).addClass("bordergreen").siblings().removeClass("bordergreen");
			this.index = $(this).index();
			$(".min li img").attr("src","../image/564393_"+ (this.index + 1)+"_pic500.jpg");
			$(".big li img").attr("src","../image/564393_"+ (this.index + 1)+"_pic1080.jpg");
		})
		return this;
	},
	fnZoom : function(){
		$(".min").fnEnter().fnDrgat().fnLeave();
	},
	fnEnter : function(){
		this.mouseenter(function(event) {
			/* Act on the event */
			$(".mask").show();
			$(".big").show();
		}.bind(this));
		return this;
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
		this.bind("mousemove", function(event){
			var e = event || window.event;
			this.fnMove(e);
		}.bind(this));
		return this;
	},
	fnMove : function(e){
		this.x = e.pageX - this.offset().left - $(".mask").width() / 2; 
		this.y = e.pageY - this.offset().top - $(".mask").height() / 2;
		this.maxL = this.width() - $(".mask").width();
		this.maxT = this.height() -$(".mask").height();
		this.x = Math.min (Math.max( 0, this.x ),this.maxL);
		this.y = Math.min (Math.max( 0, this.y ),this.maxT);
		$(".mask").css("left",this.x);
		$(".mask").css("top",this.y);
		//大图移动
		this.X = this.x * ($(".big img").width() - $(".big").width()) / this.maxL;
		this.Y = this.y * ($(".big img").height() - $(".big").height()) / this.maxT;
		$(".big img").css("left",-this.X);
		$(".big img").css("top",-this.Y);
	},
})
$(".small li").fnSmall().fnZoom();
$(".guige i").click(function(){
	$(this).addClass('biankuang').siblings().removeClass('biankuang');
	$(this).parent().next().children("b").html( $(this).html() )
})
$(".shuliang").on("click","span",function(){
	if( $(this).html() == "+" ){
		$(this).prev().val( parseInt($(this).prev().val()) + 1)
	}else{
		if( $(this).next().val() != 1 ){
			$(this).next().val( parseInt($(this).next().val()) - 1)
		}else{
			return;
		}
		
	}
})
//加入购物车
$(".jiaru").click(function(){
	var arr = [];
	var json = {};
	json = {
		"pid" : $(this).data("pid"),
		"pname" : $(this).data("pname"),
		"src" : $(this).data("src"),
		"price" : $(this).data("price"),
	} 
	arr.push(json)
	localStorage.setItem("pinfo", JSON.stringify(arr));
})
$(".saosao").click(function(){
	var s = localStorage["pinfo"];
	console.log(JSON.parse(s));
})